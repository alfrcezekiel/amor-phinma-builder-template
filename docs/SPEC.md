# Spec: Iloilo Tourism Platform

## Problem
Travelers planning weekend trips around Iloilo Province cannot easily find diverse destinations—mountains, food spots, walking areas, parks, festivals, and heritage sites—AND places to stay because information is scattered across Facebook, Google, and random websites with no way to filter by category. They often miss great spots and good accommodations, only discovering them when friends mention them later.

## Solution
A centralized platform where users can browse and discover diverse destinations—mountains, food spots, walking areas, parks, festivals, and heritage sites—AND hotels/condominiums in Iloilo Province. The platform shows lists of both destinations and accommodations with photos and details, organized by category with filters for Iloilo City vs. Iloilo Province, making it easy to plan trips without jumping between multiple sources.

## The user
Travelers planning weekend trips around Iloilo Province.

## User stories
1. As a traveler, I want to see a list of destinations organized by category (mountains, foods & dine-ins, walking areas, nature & parks, festivals, heritage sites), so that I can discover places to visit.
2. As a traveler, I want to filter destinations by location (Iloilo City vs. Iloilo Province), so that I can find spots in the area I'm visiting.
3. As a traveler, I want to see a count of places in each category, so that I can understand what's available.
4. As a traveler, I want to see a list of hotels and condominiums in Iloilo, so that I can find a place to stay.
5. As a traveler, I want to see a photo for each destination and accommodation, so that I can decide if it looks interesting.
6. As a traveler, I want to click a destination to see its details, so that I can learn more about it.
7. As a traveler, I want to click an accommodation to see its details, so that I can learn more about it.
8. As a traveler, I want to see the address and coordinates of a destination, so that I can find it on a map.
9. As a traveler, I want to see the address and contact info of an accommodation, so that I can contact them.
10. As a traveler, I want to read a description of destinations and accommodations, so that I can understand what to expect.
11. As a traveler, I want to browse without creating an account, so that I can quickly find information.

## Screens
1. Home page — welcome text explaining the platform shows destinations and accommodations in Iloilo City and Iloilo Province, with navigation bar linking to Home, About, Features, and Explore sections, followed by About Iloilo section, Discover Iloilo with Ease section, and "What do you want to explore?" section at the bottom of features. This section has:
   - Headline in Fraunces font: "What do you want to explore?"
   - Subtext in Inter font explaining the category selection
   - Glass segmented filter: [ All ] [ Iloilo City ] [ Iloilo Province ]
   - Six category cards in a grid (3 columns x 2 rows on desktop, 2 columns x 3 rows on mobile):
     * Mountains & Hiking Spots — shows mountain emoji, category name, and count (e.g., "24 places →")
     * Foods & Dine-ins — shows food emoji, category name, and count (e.g., "86 places →")
     * Walking Areas — shows walking emoji, category name, and count (e.g., "18 places →")
     * Festivals — shows festival emoji, category name, and count (e.g., "12 events →")
     * Nature & Parks — shows nature emoji, category name, and count
     * Heritage Sites — shows heritage emoji, category name, and count
   - Each card has a photo background with the emoji, title, and count overlaid
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
- category — category type (one of: "mountain", "food", "walking", "nature", "festival", "heritage")
- location — location type (one of: "iloilo_city", "iloilo_province")

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
- [x] "What do you want to explore?" section with category cards (Mountains & Hiking Spots, Foods & Dine-ins, Walking Areas, Festivals, Nature & Parks, Heritage Sites)
- [x] Glass segmented filter for location (All, Iloilo City, Iloilo Province)
- [x] Each category card shows photo, emoji, category name, and place count
- [x] App is live on Vercel and loads on mobile
- [x] Database has RLS enabled with correct policies
- [ ] Elizabeth and Mark have tested the app

## Out of scope
- User accounts and login system
- Reviews and ratings for destinations
- Booking/payments for any services
- Map integration
- Search and filter functionality beyond the location filter (All, Iloilo City, Iloilo Province)
- Admin UI for managing data
