import { NextRequest, NextResponse } from 'next/server';
import { promises as fs } from 'fs';
import path from 'path';

const DATA_FILE = path.join(process.cwd(), 'data', 'submissions.json');

type Submission = {
  id: string;
  type: 'waitlist' | 'partnership' | 'investor';
  fields: Record<string, string>;
  submittedAt: string;
  ip?: string;
};

async function readSubmissions(): Promise<Submission[]> {
  try {
    const data = await fs.readFile(DATA_FILE, 'utf-8');
    return JSON.parse(data);
  } catch {
    return [];
  }
}

async function writeSubmissions(submissions: Submission[]): Promise<void> {
  await fs.mkdir(path.dirname(DATA_FILE), { recursive: true });
  await fs.writeFile(DATA_FILE, JSON.stringify(submissions, null, 2), 'utf-8');
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const { type, fields } = body;

    if (!type || !fields) {
      return NextResponse.json(
        { error: 'Missing required fields: type and fields' },
        { status: 400 }
      );
    }

    const validTypes = ['waitlist', 'partnership', 'investor'];
    if (!validTypes.includes(type)) {
      return NextResponse.json(
        { error: `Invalid type. Must be one of: ${validTypes.join(', ')}` },
        { status: 400 }
      );
    }

    // Basic email validation if email field exists
    const emailField = Object.entries(fields).find(
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

    const submission: Submission = {
      id: `${Date.now()}-${Math.random().toString(36).slice(2, 9)}`,
      type,
      fields,
      submittedAt: new Date().toISOString(),
    };

    const submissions = await readSubmissions();
    submissions.push(submission);
    await writeSubmissions(submissions);

    return NextResponse.json(
      { success: true, id: submission.id },
      { status: 201 }
    );
  } catch {
    return NextResponse.json(
      { error: 'Something went wrong. Please try again.' },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const submissions = await readSubmissions();
    return NextResponse.json({
      total: submissions.length,
      byType: {
        waitlist: submissions.filter(s => s.type === 'waitlist').length,
        partnership: submissions.filter(s => s.type === 'partnership').length,
        investor: submissions.filter(s => s.type === 'investor').length,
      },
      submissions,
    });
  } catch {
    return NextResponse.json(
      { error: 'Could not read submissions' },
      { status: 500 }
    );
  }
}
