import { NextRequest, NextResponse } from 'next/server';
import {
  emptySubmissionCounts,
  getSubmissionCounts,
  insertSubmission,
  submissionTypes,
  type SubmissionType,
} from '../../../lib/waitlist';
import {
  getSupabaseConfigError,
  isSupabaseConfigured,
} from '../../../lib/supabase/server';

type SubmissionBody = {
  type?: string;
  fields?: Record<string, unknown>;
};

function normalizeFields(fields: Record<string, unknown>) {
  return Object.entries(fields).reduce<Record<string, string>>((acc, [key, value]) => {
    if (typeof value !== 'string') {
      return acc;
    }

    const normalizedKey = key.trim();
    const normalizedValue = value.trim();

    if (!normalizedKey || !normalizedValue) {
      return acc;
    }

    acc[normalizedKey] = normalizedValue;
    return acc;
  }, {});
}

function getClientIp(request: NextRequest) {
  const forwardedFor = request.headers.get('x-forwarded-for');
  if (forwardedFor) {
    return forwardedFor.split(',')[0]?.trim() ?? null;
  }

  return request.headers.get('x-real-ip');
}

export async function POST(request: NextRequest) {
  try {
    if (!isSupabaseConfigured()) {
      return NextResponse.json(
        { error: getSupabaseConfigError() },
        { status: 500 }
      );
    }

    const body = (await request.json()) as SubmissionBody;
    const { type, fields } = body;

    if (!type || !fields) {
      return NextResponse.json(
        { error: 'Missing required fields: type and fields' },
        { status: 400 }
      );
    }

    if (
      typeof fields !== 'object' ||
      Array.isArray(fields) ||
      !submissionTypes.includes(type as SubmissionType)
    ) {
      return NextResponse.json(
        { error: `Invalid type. Must be one of: ${submissionTypes.join(', ')}` },
        { status: 400 }
      );
    }

    const normalizedFields = normalizeFields(fields);

    if (Object.keys(normalizedFields).length === 0) {
      return NextResponse.json(
        { error: 'Please complete the form before submitting.' },
        { status: 400 }
      );
    }

    // Basic email validation if email field exists
    const emailField = Object.entries(normalizedFields).find(
      ([key]) => key.toLowerCase().includes('email')
    );
    if (emailField) {
      const email = emailField[1] as string;
      if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        return NextResponse.json(
          { error: 'Please provide a valid email address' },
          { status: 400 }
        );
      }
    }

    const id = await insertSubmission({
      type: type as SubmissionType,
      fields: normalizedFields,
      ipAddress: getClientIp(request),
    });

    return NextResponse.json(
      { success: true, id },
      { status: 201 }
    );
  } catch (error) {
    console.error('Waitlist submission failed', error);

    return NextResponse.json(
      {
        error:
          error instanceof Error
            ? error.message
            : 'Something went wrong. Please try again.',
      },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    if (!isSupabaseConfigured()) {
      return NextResponse.json({
        ...emptySubmissionCounts(),
        configured: false,
      });
    }

    const counts = await getSubmissionCounts();

    return NextResponse.json({
      ...counts,
      configured: true,
    });
  } catch (error) {
    console.error('Waitlist count lookup failed', error);

    return NextResponse.json(
      {
        error:
          error instanceof Error ? error.message : 'Could not read submissions',
      },
      { status: 500 }
    );
  }
}
