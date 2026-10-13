# Spec: Iloilo Tourism Platform

## Problem
Travelers planning weekend trips around Iloilo Province cannot easily find mountain and hiking spots because information is scattered across Facebook, Google, and random websites with no way to filter by category. They often miss great spots and only discover them when friends mention them later.

## Solution
A centralized platform where users can browse and discover mountain and hiking spots in Iloilo Province. The platform shows a list of spots with photos and details, making it easy to plan trips without jumping between multiple sources.

## The user
Travelers planning weekend trips around Iloilo Province.

## User stories
1. As a traveler, I want to see a list of mountain and hiking spots in Iloilo, so that I can discover places to visit.
2. As a traveler, I want to see a photo for each spot, so that I can decide if it looks interesting.
3. As a traveler, I want to click a spot to see its details, so that I can learn more about it.
4. As a traveler, I want to see the address and coordinates of a spot, so that I can find it on a map.
5. As a traveler, I want to read a description of the spot, so that I can understand what to expect.
6. As a traveler, I want to browse without creating an account, so that I can quickly find information.

## Screens
1. Home page — welcome text explaining the platform shows destinations in Iloilo City and Iloilo Province, followed by a list of mountain/hiking spots with name, photo, and short preview
2. Spot detail page — shows full details for a single spot: name, location (address + coordinates), photo, and description

## Data
**destinations** table:
- id — unique identifier for each spot
- name — the spot's name (e.g., "Bucari Little Baguio")
- address — text address (e.g., "Leon, Iloilo")
- latitude — coordinate for mapping
- longitude — coordinate for mapping
- photo_url — link to image stored in Supabase Storage
- description — short text about the spot
- category — for future use (set to "mountain" for all MVP entries)

Row Level Security policy: Anyone may read all rows. No one may write through the app (data is added via SQL scripts by the team).

## Login
No login required. The MVP works as a read-only browsing platform.

## Done for the demo
- [ ] Home page displays welcome text and list of 5-10 mountain spots
- [ ] Each spot shows name, photo, and preview text
- [ ] Clicking a spot opens a detail page
- [ ] Detail page shows name, address, coordinates, photo, and description
- [ ] App is live on Vercel and loads on mobile
- [ ] Database has RLS enabled with correct policies
- [ ] Elizabeth and Mark have tested the app

## Out of scope
- Hotels & accommodations
- Nature & parks
- Walking areas
- User accounts/login
- Reviews and ratings
- Booking/payments
- Map integration
- Search/filter functionality
