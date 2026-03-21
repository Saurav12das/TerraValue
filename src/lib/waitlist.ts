import 'server-only';

import { getSupabaseAdminClient } from './supabase/server';

export const submissionTypes = ['waitlist', 'partnership', 'investor'] as const;
export const WAITLIST_TABLE = 'waitlist_submissions';

export type SubmissionType = (typeof submissionTypes)[number];

export type SubmissionCounts = {
  total: number;
  byType: Record<SubmissionType, number>;
};

export function emptySubmissionCounts(): SubmissionCounts {
  return {
    total: 0,
    byType: {
      waitlist: 0,
      partnership: 0,
      investor: 0,
    },
  };
}

function summarizeTypes(types: SubmissionType[]): SubmissionCounts {
  return types.reduce<SubmissionCounts>((summary, type) => {
    summary.total += 1;
    summary.byType[type] += 1;
    return summary;
  }, emptySubmissionCounts());
}

export async function insertSubmission(input: {
  type: SubmissionType;
  fields: Record<string, string>;
  ipAddress?: string | null;
}) {
  const supabase = getSupabaseAdminClient();
  const { data, error } = await supabase
    .from(WAITLIST_TABLE)
    .insert({
      type: input.type,
      fields: input.fields,
      ip_address: input.ipAddress ?? null,
    })
    .select('id')
    .single();

  if (error) {
    throw new Error(error.message);
  }

  return data.id as string;
}

export async function getSubmissionCounts(): Promise<SubmissionCounts> {
  const supabase = getSupabaseAdminClient();
  const { data, error } = await supabase.from(WAITLIST_TABLE).select('type');

  if (error) {
    throw new Error(error.message);
  }

  const types = (data ?? []).map((row) => row.type as SubmissionType);
  return summarizeTypes(types);
}
