import { NextResponse } from 'next/server';
import { emptySubmissionCounts, getSubmissionCounts } from '../../../../lib/waitlist';
import {
  getSupabaseDiagnostics,
  isSupabaseConfigured,
} from '../../../../lib/supabase/server';

export async function GET() {
  const diagnostics = getSupabaseDiagnostics();

  try {
    if (!isSupabaseConfigured()) {
      return NextResponse.json({
        ...emptySubmissionCounts(),
        configured: false,
        diagnostics,
      });
    }

    const counts = await getSubmissionCounts();
    return NextResponse.json({
      ...counts,
      configured: true,
      diagnostics,
    });
  } catch (error) {
    console.error('Waitlist count lookup failed', error);

    return NextResponse.json({
      ...emptySubmissionCounts(),
      configured: true,
      diagnostics,
      error:
        error instanceof Error ? error.message : 'Could not load waitlist counts',
    });
  }
}
