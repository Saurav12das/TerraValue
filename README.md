# TerraValue

This project now stores waitlist, partnership, and investor form submissions in Supabase instead of a local JSON file.

## Supabase setup

1. In Supabase, open the SQL editor and run [`supabase/schema.sql`](/Users/sauravdas/Desktop/TerraValue/supabase/schema.sql).
2. In Vercel, confirm these environment variables are present for this project:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `SUPABASE_SERVICE_ROLE_KEY`
3. For local development, copy [`.env.example`](/Users/sauravdas/Desktop/TerraValue/.env.example) into `.env.local` and fill in the real values.

The API routes use a server-side key so form writes stay on the server. The public signup counter reads from the same table through server routes.
