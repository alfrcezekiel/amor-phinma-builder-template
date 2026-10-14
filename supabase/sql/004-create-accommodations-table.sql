-- Create the accommodations table for hotels and condominiums in Iloilo
create table if not exists accommodations (
  id          uuid primary key default gen_random_uuid(),
  created_at  timestamptz not null default now(),
  name        text        not null,
  address     text        not null,
  phone       text,
  email       text,
  photo_url   text,
  description text,
  type        text        not null default 'hotel'
);

-- Enable Row Level Security
alter table accommodations enable row level security;

-- Policy: anyone may read accommodations
-- This is public data (tourism information), so read access is open to all
create policy "anyone can read accommodations"
  on accommodations for select
  to anon, authenticated
  using (true);

-- Deliberately NO insert, update, or delete policy:
-- Data is added via SQL scripts by the team, not through the app.
-- This prevents any accidental or malicious changes through the API.
