# Spec: Iloilo Tourism Platform

## Problem
Travelers planning weekend trips around Iloilo Province cannot easily find diverse destinations—mountains, food spots, walking areas, parks, festivals, and heritage sites—AND places to stay because information is scattered across Facebook, Google, and random websites. They often miss great spots and good accommodations, only discovering them when friends mention them later.

## Solution
A centralized platform where users can browse and discover diverse destinations—mountains, food spots, walking areas, parks, festivals, and heritage sites—PLUS hotels and condominiums in Iloilo Province. The platform shows separate list sections for each category with photos and details, organized by category with filters for Iloilo City vs. Iloilo Province, making it easy to plan trips without jumping between multiple sources.

## The user
Travelers planning weekend trips around Iloilo Province.

## User stories
1. As a traveler, I want to browse destinations organized by category (mountains, foods, walking areas, festivals, nature, heritage) and location (Iloilo City vs. Province), so that I can discover places to visit in the area I'm interested in.
2. As a traveler, I want to click on a category card to scroll to that category's section, so that I can quickly navigate to specific types of places.
3. As a traveler, I want to see a list of hotels and condominiums with photos and details, so that I can find a place to stay.
4. As a traveler, I want to click a destination or accommodation to see its full details (name, address, photo, description, contact info), so that I can learn more about it.
5. As a traveler, I want to browse without creating an account, so that I can quickly find information.
6. As a visitor, I want to see a branded footer with Lakat Iloilo name and navigation links, so that I can easily navigate to different sections and understand the platform's identity.

## Screens
1. Home page — shows welcome text, navigation bar, About Iloilo section, Features section, category cards (mountains, food, walking, festivals, nature, heritage, hotels, condominiums) with location filter (All/Iloilo City/Iloilo Province), separate list sections for each destination category, and accommodations list. Clicking a category card scrolls to that category's section; all sections are always visible.
2. Destination detail page — shows destination name, address, coordinates, photo, and description.
3. Accommodation detail page — shows accommodation name, address, phone, email, photo, and description.
4. Footer — shows Lakat Iloilo branding with platform name, copyright information, navigation links (Home, About, Features, Explore), and social media links (optional). Background uses teal/emerald gradient to match the overall theme.

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
- [x] "What do you want to explore?" section with category cards (Mountains & Hiking Spots, Foods & Dine-ins, Walking Areas, Festivals, Nature & Parks, Heritage Sites, Hotels, Condominiums)
- [x] Glass segmented filter for location (All, Iloilo City, Iloilo Province)
- [x] Each category card shows photo, emoji, category name, and place count
- [x] Clicking a category card scrolls to that category's section
- [x] All category sections are visible by default
- [x] App is live on Vercel and loads on mobile
- [x] Database has RLS enabled with correct policies
- [ ] Lakat Iloilo footer with branding, copyright, and navigation links
- [ ] Elizabeth and Mark have tested the app

## Out of scope
- User accounts and login system
- Reviews and ratings for destinations
- Booking/payments for any services
- Map integration
- Search functionality (text search bar)
- Admin UI for managing data
