# Content Management Guide

This directory contains all easily maintainable content data for the website, organized in JSON format. This structure allows non-technical team members to update website content without touching code.

## Directory Structure

```
src/data/
├── README.md                           # This file
├── types.ts                            # TypeScript type definitions
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
