# Content Management Guide

This directory contains all easily maintainable content data for the website, organized in JSON format. This structure allows non-technical team members to update website content without touching code.

## Directory Structure

```
src/data/
├── README.md                           # This file
├── types.ts                            # TypeScript type definitions
├── highlights.json                     # News highlights and updates
├── testimonials.json                   # Testimonials from parents and officers
├── core-activities.json                # Main activities of the Boys' Brigade
├── leadership/
│   ├── leadership-team.json            # Main leadership team members
│   └── helpers-team.json               # Helper team members
└── achievements/
    ├── founders-award.json             # Founder's Award recipients
    └── presidents-award.json           # President's Award recipients
```

## How to Update Content

### Adding a New Person

To add a new person to any team or award list:

1. Open the relevant JSON file (e.g., `leadership/leadership-team.json`)
2. Navigate to the `"people"` array
3. Add a new entry following this format:

```json
{
  "name": "JOHN DOE",
  "rank": "Lieutenant",
  "photoSrc": "/headshots/oc/01_JDoe.jpg",
  "portfolio": "Training & Development",
  "photoPosition": "object-top",
  "photoScale": "scale-110"
}
```

4. Make sure to add a comma after the previous entry
5. Save the file

### Editing Existing Person Data

1. Find the person in the JSON file
2. Update any field you want to change
3. Save the file

### Removing a Person

1. Find the person's entry in the JSON file
2. Delete the entire object `{...}` including the surrounding commas
3. Save the file

## Field Descriptions

### Required Fields

- **`name`** (string): Full name of the person (e.g., "KOH HWEI YEE")
- **`photoSrc`** (string): Path to the person's photo, relative to `/public` directory (e.g., "/headshots/oc/01_HYee.jpg")

### Optional Fields

- **`rank`** (string): Military rank or role title (e.g., "Captain", "INSTRUCTOR", "warrant officer")
- **`portfolio`** (string): Responsibility area or year for achievements (e.g., "Training", "2023")
- **`photoPosition`** (string): CSS positioning for the photo. Common values:
  - `"object-top"` - Centers horizontally, aligns to top
  - `"object-[60%_0%]"` - Custom positioning (60% horizontal, 0% vertical)
  - `"object-[0%_10%]"` - 0% horizontal, 10% from top
- **`photoScale`** (string): Tailwind scale class for sizing. Common values:
  - `"scale-100"` - Normal size (100%)
  - `"scale-110"` - 110% size
  - `"scale-120"` - 120% size
  - `"scale-125"` - 125% size
- **`photoRotate`** (string): Tailwind rotation class for slight tilting. Examples:
  - `"-rotate-1"` - Rotate 1 degree counter-clockwise
  - `"rotate-2"` - Rotate 2 degrees clockwise

---

## Managing News Highlights

All news highlights are managed through the `highlights.json` file.

### Adding a New Highlight

To add a new news item or event highlight:

1. Open `highlights.json`
2. Add a new entry to the array following this format:

```json
{
  "slug": "your-event-slug",
  "title": "Your Event Title",
  "date": "2024-12-20",
  "description": "Brief description that appears on cards (1-2 sentences)",
  "category": "Training",
  "imageSrc": "/activities/your-image.jpg",
  "featured": false,
  "content": "Full content here.\n\n## Section Heading\n\n- Bullet point\n- Another point\n\n**Bold text** works too."
}
```

3. Place the entry at the beginning of the array (most recent news first)
4. Save the file

### Highlight Field Descriptions

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `slug` | string | Yes | URL-friendly identifier (lowercase, hyphens only). Used in `/news/slug` URLs |
| `title` | string | Yes | Display title of the highlight |
| `date` | string | Yes | ISO date format: `YYYY-MM-DD`. Used for automatic sorting |
| `description` | string | Yes | Brief summary (1-2 sentences) shown in preview cards |
| `category` | string | Yes | One of: `Training`, `Service`, `Achievement`, `Event`, `Competition` |
| `imageSrc` | string | Yes | Path to image (relative to `/public` directory) |
| `featured` | boolean | Yes | Set to `true` for priority highlights, `false` for regular |
| `content` | string | Yes | Full article content with markdown formatting |

### Available Categories

Choose the most appropriate category:

- **Training**: Camps, workshops, skill development sessions
- **Service**: Community service, outreach activities
- **Achievement**: Competition results, awards, milestones
- **Event**: General events, celebrations, ceremonies
- **Competition**: Drill competitions, specific competitive activities

### Content Formatting

The `content` field supports basic markdown:

- **Paragraphs**: Use `\n\n` (double newline) to separate paragraphs
- **Headings**:
  - `## Main Section` for major sections
  - `### Subsection` for subsections
- **Bold**: `**bold text**`
- **Italic**: `*italic text*`
- **Bullet Lists**: Start lines with `- ` (dash and space)

**Example Content:**
```json
"content": "Opening paragraph.\n\n## Highlights\n\n- First point\n- Second point\n\n## Results\n\nAnother paragraph with **bold text** and *italics*."
```

### Display Locations

- **Homepage**: Shows 3 most recent highlights
- **News Page** (`/news`): Shows 5 most recent highlights
- **Individual Pages**: Each highlight gets its own page at `/news/[slug]`
- **Sorting**: Automatically sorted by date (newest first)

### Editing a Highlight

1. Find the highlight in `highlights.json` by its `slug` or `title`
2. Update the fields you want to change
3. To update content, remember to use `\n\n` for new paragraphs
4. Save the file

### Removing a Highlight

1. Locate the highlight object in the array
2. Delete the entire object including its curly braces `{...}`
3. Ensure proper comma placement (no comma after the last item)
4. Save the file

### Highlight Example

Complete example entry:

```json
{
  "slug": "annual-camp-2024",
  "title": "Annual Camp 2024",
  "date": "2024-12-15",
  "description": "Three days of intensive training, team building, and spiritual growth at our annual camp.",
  "category": "Training",
  "imageSrc": "/activities/expedition.JPG",
  "featured": true,
  "content": "Our annual camp brought together cadets from across the company for three days of intensive training.\n\n## Highlights\n\n- Rock climbing and team building\n- Evening devotions\n- Leadership training\n- Survival skills workshops\n- Award ceremonies\n\nThe camp was a tremendous success!"
}
```

### Important Slug Requirements

⚠️ The `slug` field is critical as it creates the URL:
- Must be unique (no duplicates)
- Use lowercase letters, numbers, and hyphens only
- No spaces or special characters
- Should be descriptive (e.g., `community-service-dec-2024`, not `cs1`)
- Cannot be changed once published (breaks existing links)

### Image Guidelines for Highlights

- Place images in `/public/activities/` or create a new `/public/news/` folder
- Recommended size: 1200x800 pixels (3:2 aspect ratio)
- Format: JPG (optimized for web, under 300KB)
- Reference path: `/activities/image.jpg` (without `public` prefix)

---

## Managing Testimonials

All testimonials displayed on the home page are managed through the `testimonials.json` file.

### Adding a New Testimonial

To add a new testimonial:

1. Open `testimonials.json`
2. Add a new entry to the array following this format:

```json
{
  "quote": "Your testimonial text here. This is the main content that will be displayed.",
  "author": "Full Name",
  "role": "Role or Title",
  "image": "/testimonials/photo.jpg"
}
```

3. Place the entry in the array
4. Save the file

### Testimonial Field Descriptions

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `quote` | string | Yes | The testimonial text. Keep it concise but meaningful (2-4 sentences) |
| `author` | string | Yes | Full name of the person giving the testimonial |
| `role` | string | Yes | Their role or relationship (e.g., "Parent", "Training Officer", "Alumni") |
| `image` | string | Yes | Path to profile image (relative to `/public` directory) |

### Display Location

- **Homepage**: All testimonials are displayed in the "What People Say" section
- **Layout**: Grid format (2 columns on desktop, 1 column on mobile)

### Editing a Testimonial

1. Find the testimonial in `testimonials.json`
2. Update any field you want to change
3. Save the file

### Removing a Testimonial

1. Locate the testimonial object in the array
2. Delete the entire object including its curly braces `{...}`
3. Ensure proper comma placement
4. Save the file

---

## Managing Core Activities

The three main activity cards displayed on the home page are managed through the `core-activities.json` file.

### Adding or Editing an Activity

To modify an activity:

1. Open `core-activities.json`
2. Update or add entries following this format:

```json
{
  "title": "Activity Name",
  "description": "Brief description of the activity (1-2 sentences)",
  "href": "/activities/activity-slug",
  "imageSrc": "/activities/image.jpg",
  "imageAlt": "Descriptive text for the image"
}
```

### Core Activity Field Descriptions

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `title` | string | Yes | Name of the activity |
| `description` | string | Yes | Brief description (1-2 sentences) displayed on the card |
| `href` | string | Yes | Link to the detailed activity page (e.g., `/activities/drill-discipline`) |
| `imageSrc` | string | Yes | Path to activity image (relative to `/public` directory) |
| `imageAlt` | string | Yes | Alt text for accessibility |

### Display Location

- **Homepage**: Displayed in the "Our Core Activities" section
- **Layout**: Grid format (3 columns on desktop, responsive on mobile)
- **Order**: Activities display in the order they appear in the JSON file

### Important Notes

- The file currently contains 3 activities - you can add more, but the homepage layout is optimized for 3
- Images should be placed in `/public/activities/` directory
- Recommended image size: 1200x800 pixels (3:2 aspect ratio)
- Format: JPG (optimized for web, under 300KB)

---

## Photo Guidelines

### Adding Photos

1. Place photos in the appropriate directory under `/public/headshots/`:
   - `/public/headshots/oc/` - For current officers and leadership
   - `/public/headshots/honorroll/` - For award recipients
   - `/public/headshots/general/` - For other members

2. Use consistent naming: `FirstInitial_LastName.jpg` (e.g., `01_HYee.jpg`)

3. Recommended photo specifications:
   - Format: JPG or PNG
   - Aspect ratio: Portrait (3:4 or similar)
   - Minimum size: 400x600 pixels
   - File size: Under 500KB for optimal performance

### Photo Positioning Tips

If a person's face is not centered properly in the photo grid:

1. **Face too low or high**: Adjust `photoPosition`
   - Use `"object-top"` to align to the top
   - Use `"object-[50%_20%]"` to move down 20% from top
   - Use `"object-[50%_0%]"` for extreme top alignment

2. **Face too small**: Adjust `photoScale`
   - Increase the scale value (e.g., from `"scale-110"` to `"scale-120"`)

3. **Want a slight tilt**: Add `photoRotate`
   - Use `"-rotate-1"` for subtle counter-clockwise rotation
   - Use `"rotate-2"` for subtle clockwise rotation

## Metadata Fields

Each JSON file includes metadata:

- **`category`**: Name of the group (e.g., "Leadership Team")
- **`description`**: Brief description of this group
- **`lastUpdated`**: Date of last update (YYYY-MM-DD format)

Update the `lastUpdated` field whenever you make changes!

## Examples

### Example 1: Adding a New Leadership Team Member

Add this to `leadership/leadership-team.json` in the `people` array:

```json
{
  "name": "JANE SMITH",
  "rank": "warrant officer",
  "photoSrc": "/headshots/oc/02_JSmith.jpg",
  "portfolio": "Community Outreach",
  "photoPosition": "object-top",
  "photoScale": "scale-115"
}
```

### Example 2: Adding a 2024 Founder's Award Recipient

Add this to `achievements/founders-award.json`:

```json
{
  "name": "ALEX TAN",
  "rank": "SERGEANT",
  "photoSrc": "/headshots/honorroll/ATan.jpg",
  "portfolio": "2024",
  "photoPosition": "object-top",
  "photoScale": "scale-110"
}
```

### Example 3: Updating Someone's Role

Change:
```json
{
  "name": "LUKE TENG",
  "portfolio": "Quartermaster"
}
```

To:
```json
{
  "name": "LUKE TENG",
  "portfolio": "Operations & Training"
}
```

## Validation Tips

After making changes:

1. **Check JSON syntax**: Ensure all braces `{}`, brackets `[]`, and commas are correct
2. **Verify file paths**: Make sure photo paths exist in `/public/headshots/`
3. **Test locally**: Run `npm run dev` and check the pages work correctly
4. **Check formatting**: Use a JSON validator like [JSONLint](https://jsonlint.com/) if unsure

## Common Mistakes to Avoid

❌ **Don't forget commas between entries**
```json
{
  "name": "Person 1"
}  // ❌ Missing comma here
{
  "name": "Person 2"
}
```

✅ **Correct:**
```json
{
  "name": "Person 1"
},
{
  "name": "Person 2"
}
```

❌ **Don't add a trailing comma after the last entry**
```json
{
  "name": "Last Person"
},  // ❌ Remove this comma
]
```

✅ **Correct:**
```json
{
  "name": "Last Person"
}
]
```

❌ **Don't use single quotes**
```json
{
  'name': 'John'  // ❌ Use double quotes
}
```

✅ **Correct:**
```json
{
  "name": "John"
}
```

## Getting Help

- **JSON Syntax Errors**: Use [JSONLint](https://jsonlint.com/) to validate your JSON
- **Photo Issues**: Check that files exist in `/public/headshots/`
- **Questions**: Contact the web development team

## Technical Notes

For developers:

- Data files are imported as static JSON in Astro pages
- Type definitions are in `types.ts` using TypeScript interfaces
- Pages using this data:
  - `/src/pages/about/leadership.astro`
  - `/src/pages/about/achievements.astro`
- Component: `/src/components/PeopleGrid.tsx`
