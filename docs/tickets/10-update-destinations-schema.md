# 10 — Update destinations table schema

**What to build:** Add `category` and `location` columns to the destinations table to support the new category system.

**Blocked by:** None

**Status:** done

- [x] Add `category` column to destinations table (enum: "mountain", "food", "walking", "nature", "festival", "heritage")
- [x] Add `location` column to destinations table (enum: "iloilo_city", "iloilo_province")
- [x] Create a migration SQL file in supabase/sql/
- [x] Run the migration on the Supabase project
- [x] Verify the columns exist in the database
- [x] Works on the live URL
