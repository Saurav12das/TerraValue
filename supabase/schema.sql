create extension if not exists pgcrypto;

create table if not exists public.waitlist_submissions (
  id uuid primary key default gen_random_uuid(),
  type text not null check (type in ('waitlist', 'partnership', 'investor')),
  fields jsonb not null default '{}'::jsonb,
  ip_address text,
  submitted_at timestamptz not null default timezone('utc', now())
);

create index if not exists waitlist_submissions_type_idx
  on public.waitlist_submissions (type);

create index if not exists waitlist_submissions_submitted_at_idx
  on public.waitlist_submissions (submitted_at desc);
