# UVA Technology Policy Lab Website

A static website for the University of Virginia Technology Policy Lab, hosted on Netlify.

## Live Site

**URL:** https://eloquent-eclair-5aa7e1.netlify.app

## Project Structure

```
TechPolicySite/
├── index.html          # Home page
├── research.html       # Research projects page
├── people.html         # Team members page
├── publications.html   # Publications page
├── about.html          # About page
├── styles.css          # All styling
├── *.jpg/*.png/*.svg   # Images and assets
└── cms/                # (Unused) Strapi CMS files - can be deleted
```

## How to Update the Website

### Using Claude Code (Recommended)

1. Open this project folder in VS Code
2. Launch Claude Code
3. Ask Claude to make changes, for example:
   - "Add a new team member named John Smith to the People page"
   - "Update the research project description for AI Governance"
   - "Change the contact email to newemail@virginia.edu"
   - "Add a new news item about our upcoming conference"

4. Claude will edit the files and can commit/push for you
5. Changes auto-deploy to Netlify within ~30 seconds

### Manual Editing

1. Edit the HTML files directly
2. Commit and push to GitHub:
   ```bash
   git add .
   git commit -m "Description of changes"
   git push
   ```
3. Netlify auto-deploys from GitHub

## Common Tasks

### Adding a Team Member

Edit `people.html` and add a new `team-card` div in the appropriate section:

```html
<div class="team-card">
    <img src="photo-filename.jpg" alt="Person Name" class="team-photo">
    <h3>Person Name</h3>
    <p class="team-role">Job Title</p>
    <p class="team-bio">Brief biography here.</p>
    <p class="team-email"><a href="mailto:email@virginia.edu">email@virginia.edu</a></p>
</div>
```

**Important:** Add the photo file (JPG format, any size) to the project root folder.

### Adding a Research Project

Edit `research.html` and add a new `research-card` div:

```html
<div class="research-card" style="margin-bottom: 2rem;">
    <h3>Project Title</h3>
    <p><strong>Principal Investigators:</strong> Dr. Name, Dr. Name</p>
    <p>Project description here.</p>
    <p><em>Funded by: Funding Source</em></p>
    <p><strong>Status:</strong> Active</p>
</div>
```

### Adding a News Item

Edit `index.html` and add a new `news-item` article in the news section:

```html
<article class="news-item">
    <span class="news-date">Month Year</span>
    <h3>News Headline</h3>
    <p>News description here.</p>
</article>
```

### Updating Contact Information

The email `techpolicylab@virginia.edu` appears in the footer of every page. To change it, update all HTML files or ask Claude to do it.

## GitHub Repository

**URL:** https://github.com/BattenIT/uva-tech-policy-lab

### Access

The repository is owned by the BattenIT organization. Team members need to be added as collaborators to push changes.

## Netlify Hosting

- **Site:** eloquent-eclair-5aa7e1.netlify.app
- **Auto-deploy:** Connected to GitHub main branch
- **Build:** No build step needed (static HTML)

### Custom Domain

To add a custom domain (e.g., techpolicylab.virginia.edu):
1. Log in to Netlify
2. Go to Site settings → Domain management
3. Add custom domain
4. Configure DNS with UVA IT

## File Descriptions

| File | Description |
|------|-------------|
| `index.html` | Home page with mission, research areas, and news |
| `research.html` | Current research projects |
| `people.html` | Team members (Director, Faculty, Staff, Fellows) |
| `publications.html` | Academic publications |
| `about.html` | About the lab, contact form |
| `styles.css` | All CSS styling |
| `Noah_Myung_H.jpg` | Director's photo |
| `bat_rgb_ko.png` | Batten School logo (footer) |
| `university-of-virginia.svg` | UVA logo (favicon) |

## Styling Guide

### Colors (UVA Brand)
- **UVA Blue:** #232D4B
- **UVA Orange:** #E57200
- **Light Gray:** #F5F5F5

### CSS Classes

- `.section` - Standard page section
- `.bg-light` - Light gray background section
- `.container` - Centered content container
- `.btn` - Orange button
- `.research-card` - Card for research projects
- `.team-card` - Card for team members
- `.team-photo` - Round photo with orange border
- `.news-item` - News article styling

## Troubleshooting

### Changes not appearing on live site
1. Check if changes were pushed to GitHub
2. Check Netlify deploy status at app.netlify.com
3. Clear browser cache (Ctrl+Shift+R)

### Image not displaying
1. Verify file is in project root (not in a subfolder)
2. Check filename matches exactly (case-sensitive)
3. Ensure file was committed and pushed

### Netlify deploy failed
1. Check Netlify deploy logs for errors
2. Verify HTML is valid (no unclosed tags)

## Support

For technical issues with the website, contact Batten IT or use Claude Code to diagnose and fix problems.

## Notes

- The `cms/` folder contains unused Strapi CMS files from an earlier approach. It can be safely deleted to clean up the repository.
- All content is static HTML - no database or backend required.
- Images should be optimized for web (< 500KB) for faster loading.
