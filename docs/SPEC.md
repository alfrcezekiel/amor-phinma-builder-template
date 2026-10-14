# Spec: Iloilo Tourism Platform

## Problem
Travelers planning weekend trips around Iloilo Province cannot easily find mountain/hiking spots AND places to stay because information is scattered across Facebook, Google, and random websites with no way to filter by category. They often miss great spots and good accommodations, only discovering them when friends mention them later.

## Solution
A centralized platform where users can browse and discover mountain/hiking spots AND hotels/condominiums in Iloilo Province. The platform shows lists of both destinations and accommodations with photos and details, making it easy to plan trips without jumping between multiple sources.

## The user
Travelers planning weekend trips around Iloilo Province.

## User stories
1. As a traveler, I want to see a list of mountain and hiking spots in Iloilo, so that I can discover places to visit.
2. As a traveler, I want to see a list of hotels and condominiums in Iloilo, so that I can find a place to stay.
3. As a traveler, I want to see a photo for each destination and accommodation, so that I can decide if it looks interesting.
4. As a traveler, I want to click a destination to see its details, so that I can learn more about it.
5. As a traveler, I want to click an accommodation to see its details, so that I can learn more about it.
6. As a traveler, I want to see the address and coordinates of a destination, so that I can find it on a map.
7. As a traveler, I want to see the address and contact info of an accommodation, so that I can contact them.
8. As a traveler, I want to read a description of destinations and accommodations, so that I can understand what to expect.
9. As a traveler, I want to browse without creating an account, so that I can quickly find information.

## Screens
1. Home page — welcome text explaining the platform shows destinations and accommodations in Iloilo City and Iloilo Province, with navigation bar linking to Home, About, Features, and Explore sections, followed by About Iloilo section, Discover Iloilo with Ease section, and sections for mountain/hiking spots and hotels/condominiums with name, photo, and short preview
2. Destination detail page — shows full details for a single destination: name, location (address + coordinates), photo, and description
3. Accommodation detail page — shows full details for a single accommodation: name, address, phone, email, photo, and description

## Data
**destinations** table:
- id — unique identifier for each destination
- name — the destination's name (e.g., "Bucari Little Baguio")
- address — text address (e.g., "Leon, Iloilo")
- latitude — coordinate for mapping
- longitude — coordinate for mapping
- photo_url — link to image stored in Supabase Storage
- description — short text about the destination
- category — category type (set to "mountain" for MVP destinations)

**accommodations** table:
- id — unique identifier for each accommodation
- name — the accommodation's name (e.g., "Hotel del Rio")
- address — text address (e.g., "Iloilo City")
- phone — contact phone number
- email — contact email address
- photo_url — link to image stored in Supabase Storage
- description — short text about the accommodation
- type — accommodation type (set to "hotel" or "condominium" for MVP)

Row Level Security policy: Anyone may read all rows in both tables. No one may write through the app (data is added via SQL scripts by the team).

## Login
No login required. The MVP works as a read-only browsing platform.

## Done for the demo
- [x] Home page displays welcome text and list of 5-10 mountain spots
- [x] Home page displays list of 5-10 hotels/condominiums
- [x] Each destination shows name, photo, and preview text
- [x] Each accommodation shows name, photo, and preview text
- [x] Clicking a destination opens a destination detail page
- [x] Clicking an accommodation opens an accommodation detail page
- [x] Destination detail page shows name, address, coordinates, photo, and description
- [x] Accommodation detail page shows name, address, phone, email, photo, and description
- [x] About Iloilo section displays information about why Iloilo is significant for locals and tourists
- [x] Discover Iloilo with Ease section displays what the platform can do (browse destinations, find accommodations, mobile friendly, detailed information, no login required, centralized information)
- [x] Navigation bar with Home, About, Features, and Explore links that scroll to sections
- [x] Responsive navigation with burger menu and backdrop blur for mobile screens
- [ ] App is live on Vercel and loads on mobile
- [x] Database has RLS enabled with correct policies
- [ ] Elizabeth and Mark have tested the app

## Out of scope
- Nature & parks destinations
- Walking areas destinations
- User accounts and login system
- Reviews and ratings for destinations
- Booking/payments for any services
- Map integration
- Search and filter functionality
- Admin UI for managing data
