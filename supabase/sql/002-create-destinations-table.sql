-- Create the destinations table for mountain/hiking spots in Iloilo
create table if not exists destinations (
  id          uuid primary key default gen_random_uuid(),
  created_at  timestamptz not null default now(),
  name        text        not null,
  address     text        not null,
  latitude    numeric,
  longitude   numeric,
  photo_url   text,
  description text,
  category    text        not null default 'mountain'
);

-- Enable Row Level Security
alter table destinations enable row level security;

-- Policy: anyone may read destinations
-- This is public data (tourism information), so read access is open to all
create policy "anyone can read destinations"
  on destinations for select
  to anon, authenticated
  using (true);

-- Deliberately NO insert, update, or delete policy:
-- Data is added via SQL scripts by the team, not through the app.
-- This prevents any accidental or malicious changes through the API.
