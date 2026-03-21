import 'server-only';

import { createClient } from '@supabase/supabase-js';

function getSupabaseUrl() {
  return process.env.NEXT_PUBLIC_SUPABASE_URL ?? process.env.SUPABASE_URL;
}

function getSupabaseServerKey() {
  return (
    process.env.SUPABASE_SERVICE_ROLE_KEY ??
    process.env.SUPABASE_SECRET_KEY ??
    process.env.SUPABASE_KEY
  );
}

export function isSupabaseConfigured() {
  return Boolean(getSupabaseUrl() && getSupabaseServerKey());
}

export function getSupabaseDiagnostics() {
  const url = getSupabaseUrl();
  const key = getSupabaseServerKey();

  return {
    hasUrl: Boolean(url),
    hasServerKey: Boolean(key),
    urlHost: url ? new URL(url).host : null,
    keyPrefix: key ? `${key.slice(0, 8)}...${key.slice(-6)}` : null,
  };
}

export function getSupabaseConfigError() {
  return 'Supabase is not configured. Set NEXT_PUBLIC_SUPABASE_URL (or SUPABASE_URL) and SUPABASE_SERVICE_ROLE_KEY (or SUPABASE_SECRET_KEY) in your environment.';
}

export function getSupabaseAdminClient() {
  const url = getSupabaseUrl();
  const key = getSupabaseServerKey();

  if (!url || !key) {
    throw new Error(getSupabaseConfigError());
  }

  return createClient(url, key, {
    auth: {
      autoRefreshToken: false,
      persistSession: false,
    },
  });
}
