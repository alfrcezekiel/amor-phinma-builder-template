# Ticket 16: Add Category Filtering

## What
Make the category cards clickable so that when John clicks on a category (e.g., Mountains & Hiking Spots), the page scrolls to that specific category's destination section below. Each category has its own list component (MountainList, FoodList, WalkingList, FestivalList, NatureList, HeritageList).

## Why
John struggles to find specific types of destinations quickly. By clicking on category cards, he can instantly jump to the section showing that type of destination, making it easier to browse what he's interested in.

## How

### 1. Create separate list components for each category
- Create MountainList.tsx for mountain destinations
- Create FoodList.tsx for food destinations
- Create WalkingList.tsx for walking areas
- Create FestivalList.tsx for festivals
- Create NatureList.tsx for nature & parks
- Create HeritageList.tsx for heritage sites
- Each component has a `visible` prop to control whether it renders
- Each component has an `id` prop for scroll targeting

### 2. Update CategoryExploreSection to handle clicks
- Add `onCategorySelect` prop to pass section ID to parent
- Map each category to its section ID (e.g., "mountain" → "mountain-list")
- Make each category card clickable
- When clicked, call `onCategorySelect` with the section ID

### 3. Update Home page to manage visibility
- Add `handleCategorySelect` function to scroll to the selected section
- Import all category list components
- Render each category list with its section ID
- Set `visible={true}` for all sections (all sections always visible by default)

### 4. Test the flow
- Click on "Mountains & Hiking Spots" card
- Verify the page scrolls to the Mountains section
- Verify all category sections are still visible
- Click on "Foods & Dine-ins" card
- Verify the page scrolls to the Foods section
- Verify all category sections are still visible
- Test with all 6 categories

## Acceptance criteria
- [x] Category cards are clickable with hover effect
- [x] Clicking a category card scrolls to that category's section
- [x] Each category has its own list component
- [x] All category sections are visible by default
- [x] Works with all 6 categories (mountain, food, walking, festival, nature, heritage)
- [x] Build succeeds without errors
