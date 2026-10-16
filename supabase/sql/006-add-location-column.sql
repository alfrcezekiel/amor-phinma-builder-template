-- Add location column to destinations table
-- This allows filtering by Iloilo City vs Iloilo Province
alter table destinations
add column if not exists location text not null default 'iloilo_province';

-- Add a check constraint to ensure valid location values
alter table destinations
add constraint valid_location
check (location in ('iloilo_city', 'iloilo_province'));
