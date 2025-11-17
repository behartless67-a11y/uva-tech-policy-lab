# CMS User Guide - Tech Policy Lab Website

## Quick Start

### Accessing the CMS

1. **URL**: http://localhost:1337/admin (when running locally)
2. **Login**: Use your email and password created during setup

## How to Update Content

### Adding a Team Member

1. Click **Content Manager** in the left sidebar
2. Click **Person**
3. Click **+ Create new entry**
4. Fill in:
   - Name (required)
   - Role (e.g., "Research Fellow")
   - Category (select from dropdown)
   - Bio (short description)
   - Email (optional)
   - Photo (click to upload an image)
   - Order (number to control sort order, lower = appears first)
5. Click **Save**
6. Click **Publish** to make it visible on the website

### Editing a Team Member

1. Content Manager → Person
2. Click on the person you want to edit
3. Make your changes
4. Click **Save** then **Publish**

### Adding a Research Project

1. Content Manager → Research Project
2. Click **+ Create new entry**
3. Fill in:
   - Title (required)
   - Investigators (required)
   - Description (use the rich text editor - you can format text, add links, etc.)
   - Funding (optional)
   - Icon (optional - name of an icon, default is "microscope")
   - Order (controls display order)
4. **Save** and **Publish**

### Adding a News Update

1. Content Manager → News Item
2. Click **+ Create new entry**
3. Fill in:
   - Title
   - Date (click to pick date and time)
   - Body (use rich text editor)
4. **Save** and **Publish**

### Adding a Publication

1. Content Manager → Publication
2. Click **+ Create new entry**
3. Fill in all fields:
   - Title
   - Authors (e.g., "Smith, J., Doe, A.")
   - Venue (journal or conference name)
   - Year
   - Type (select from dropdown)
   - Abstract
   - Link (optional - URL to the paper)
4. **Save** and **Publish**

### Updating Site Settings

1. Content Manager → Global Settings
2. Update any of:
   - Contact information (email, phone, address, building)
   - Social media links (Facebook, Instagram, LinkedIn)
   - Hero subtitle (text under main heading on homepage)
   - Mission text (main mission statement)
3. Click **Save**
   - Note: Single types don't need to be published

## Using the Rich Text Editor

The rich text editor allows you to:
- **Bold** and *italic* text
- Create bullet lists and numbered lists
- Add headings (H1, H2, H3, etc.)
- Insert links
- Add images
- Format code blocks

### Adding a Link
1. Select the text you want to link
2. Click the link icon in the toolbar
3. Paste the URL
4. Click "Insert"

### Adding an Image
1. Click the image icon
2. Upload or select an existing image
3. Add alt text (description for accessibility)

## Uploading Images

### Best Practices
- **Team photos**: 400x400px minimum, square format works best
- **File size**: Keep under 500KB for faster loading
- **Format**: JPG or PNG
- **Naming**: Use descriptive names (e.g., `john-smith-headshot.jpg`)

### How to Upload
1. Click the image field
2. Drag and drop your image OR click "Browse files"
3. Select your image
4. The image will upload automatically
5. You can crop or adjust if needed

## Draft vs Published

- **Draft**: Only you can see it (saved but not published)
- **Published**: Visible on the public website

To publish: Click the **Publish** button after saving
To unpublish: Click the **Unpublish** button

## Filtering and Searching

- Use the **Search** box at the top to find content quickly
- Use **Filters** to narrow down by category, date, etc.
- Click column headers to sort

## Bulk Actions

1. Select multiple items using the checkboxes
2. Click the action button at the top (Publish, Unpublish, Delete)

## Common Tasks

### Reordering Items
- Edit each item and change the "order" field
- Lower numbers appear first (0, 1, 2, 3...)

### Deleting Content
1. Click the item you want to delete
2. Click the **Delete** button (trash icon)
3. Confirm deletion
   - **Warning**: This cannot be undone!

### Duplicating Content
1. Click the item you want to duplicate
2. Click the three dots (⋯) menu
3. Select "Duplicate"
4. Edit the duplicated version
5. Save and Publish

## Tips for Content Editors

1. **Save often**: Click Save frequently to avoid losing work
2. **Preview before publishing**: Double-check everything before hitting Publish
3. **Use descriptive titles**: Makes searching easier later
4. **Fill in all required fields**: Required fields have a red asterisk (*)
5. **Keep backups**: Before making major changes, consider duplicating first
6. **Alt text for images**: Always add descriptions for accessibility
7. **Test links**: Make sure external links work before publishing

## Troubleshooting

### "Cannot save" error
- Make sure all required fields are filled in
- Check that your internet connection is stable
- Try refreshing the page and logging in again

### Image won't upload
- Check file size (should be under 10MB)
- Ensure it's a supported format (JPG, PNG, GIF)
- Try a different browser

### Content not showing on website
- Make sure you clicked **Publish** (not just Save)
- Refresh the public website page
- Clear your browser cache

### Forgot password
- Click "Forgot password" on the login screen
- Check your email for reset instructions
- Contact your administrator if needed

## Getting Help

- **Technical issues**: Contact your web administrator
- **Strapi documentation**: https://docs.strapi.io
- **This lab**: Contact techpolicylab@virginia.edu

## Keyboard Shortcuts

- **Save**: Ctrl+S (Cmd+S on Mac)
- **Publish**: Ctrl+P (Cmd+P on Mac)
- **Search**: Ctrl+K (Cmd+K on Mac)

## Best Practices

1. **Regular updates**: Keep news and research sections current
2. **Consistent formatting**: Use the same style for similar content
3. **Proofread**: Check spelling and grammar before publishing
4. **Optimize images**: Compress images before uploading
5. **Meaningful URLs**: Use descriptive link text
6. **Accessibility**: Add alt text to all images
7. **Mobile-friendly**: Keep text concise and scannable

---

Last updated: November 2025
