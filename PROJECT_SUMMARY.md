# UVA Technology Policy Lab Website - Project Summary

**Created:** October 15, 2025
**Live Site:** https://eloquent-eclair-5aa7e1.netlify.app/
**GitHub Repo:** https://github.com/behartless67-a11y/uva-tech-policy-lab

---

## Project Overview

A professional website for the University of Virginia Technology Policy Lab, built with clean HTML/CSS and deployed on Netlify with an integrated CMS for easy content management.

---

## Design Specifications

### Branding
- **Colors:**
  - UVA Blue: `#232D4B` (primary - navigation, hero overlay, footer)
  - UVA Orange: `#E57200` (accent - links, buttons, social icons)
  - Light Gray: `#F5F5F5` (section backgrounds)

- **Typography:**
  - Primary Font: Adobe Caslon Pro (with Georgia/serif fallbacks)
  - Hero Title: 5.5rem
  - Section Headings: 2.25rem
  - Body Text: 18px
  - Navigation: 1.25rem

- **Layout:**
  - Max Width: 1600px (widened for better card display)
  - Responsive grid system for research cards and team members
  - Clean, minimalist aesthetic inspired by etplabs.org

### Visual Elements
- **Hero Section:**
  - Background image (`tech-pr-policy-decisions.png`) with 90% opacity blue overlay
  - Large title and subtitle text

- **Navigation:**
  - Sticky top navigation with centered menu items
  - No branding text (eliminated redundancy)
  - Active page indicator with orange underline

- **Social Media:**
  - Floating buttons on right side (Facebook, Instagram, LinkedIn)
  - UVA Orange by default, change to UVA Blue on hover
  - Fixed position, vertically centered

- **Footer:**
  - Compact design with minimal padding (0.75rem)
  - Small text (0.85rem) for copyright and location

---

## Site Structure

### Pages Created
1. **index.html** - Homepage
   - Mission statement
   - Research areas overview (4 cards in one row)
   - Latest news section
   - Call-to-action

2. **research.html** - Research page
   - Research approach
   - Current projects with detailed descriptions
   - Research methods
   - Partnerships

3. **people.html** - Team page
   - Director section
   - Faculty affiliates (8 members)
   - Research staff (3 members)
   - Graduate fellows (4 members)

4. **publications.html** - Publications page
   - Recent publications
   - Policy reports & white papers
   - Working papers

5. **about.html** - About/Contact page
   - Lab mission and approach
   - Programs & opportunities
   - Contact information
   - Affiliated organizations

### Key Features
- Fully responsive design
- Consistent navigation across all pages
- Hover effects on cards and buttons
- Social media integration on all pages
- Professional color scheme adhering to UVA brand guidelines

---

## Content Management System (CMS)

### CMS Setup
- **Platform:** Decap CMS (formerly Netlify CMS)
- **Authentication:** GitHub OAuth (no Netlify Identity required)
- **Access URL:** https://eloquent-eclair-5aa7e1.netlify.app/admin/

### What Can Be Edited Through CMS

#### Collections Available:
1. **Pages** - Edit homepage and about page content
2. **News & Updates** - Add/edit/delete news items
3. **Research Projects** - Manage research projects with:
   - Project title
   - Principal investigators
   - Description
   - Funding source

4. **Publications** - Add publications with:
   - Title, authors, venue
   - Year and type (journal, conference, report, etc.)
   - Abstract and links

5. **Team Members** - Manage team profiles with:
   - Name, role, category
   - Bio and email
   - Profile photo upload

6. **Site Settings** - Update:
   - Social media URLs (Facebook, Instagram, LinkedIn)
   - Contact information (email, phone, address)

### CMS Configuration Files
- `/admin/index.html` - CMS interface loader
- `/admin/config.yml` - CMS configuration (defines editable collections)

---

## Deployment Details

### Hosting Platform: Netlify
- **Site Name:** eloquent-eclair-5aa7e1
- **Team:** Batten IT
- **Auto-Deploy:** Enabled (deploys automatically when GitHub repo is updated)

### GitHub Repository
- **Owner:** behartless67-a11y
- **Repo:** uva-tech-policy-lab
- **Branch:** main
- **Visibility:** Public

### Build Configuration (`netlify.toml`)
```toml
[build]
  publish = "."
  command = "echo 'No build command needed for static site'"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

---

## Giving Professor Edit Access

### Steps to Add Collaborator:
1. Go to: https://github.com/behartless67-a11y/uva-tech-policy-lab
2. Click **Settings** → **Collaborators**
3. Click **Add people**
4. Enter professor's GitHub username or email
5. They accept invitation via email

### How Professor Accesses CMS:
1. Go to: https://eloquent-eclair-5aa7e1.netlify.app/admin/
2. Click **"Login with GitHub"**
3. Authorize the application
4. Start editing content!

### Requirements:
- Professor must have a GitHub account
- Must be added as a collaborator on the repository
- Changes publish automatically to live site within 1-2 minutes

---

## File Structure

```
TechPolicySite/
├── index.html              # Homepage
├── research.html           # Research page
├── people.html             # Team page
├── publications.html       # Publications page
├── about.html              # About/Contact page
├── styles.css              # All styling
├── tech-pr-policy-decisions.png  # Hero background image
├── netlify.toml            # Netlify configuration
├── DEPLOYMENT.md           # Deployment instructions
├── PROJECT_SUMMARY.md      # This file
├── admin/
│   ├── index.html          # CMS interface
│   └── config.yml          # CMS configuration
└── .git/                   # Git repository files
```

---

## Key Design Decisions & Changes Made

### Session 1: Initial Setup
1. Researched technology policy lab websites (UW Tech Policy Lab, Duke, etc.)
2. Gathered UVA branding guidelines (colors, typography)
3. Created 5-page website structure
4. Implemented UVA Blue/Orange color scheme
5. Added Adobe Caslon typography

### Session 2: Design Refinements
1. **Navigation:**
   - Removed "UVA Technology Policy Lab" text from navbar (redundant)
   - Centered navigation menu
   - Increased nav font size to 1.25rem
   - Increased spacing between items to 3rem

2. **Hero Section:**
   - Added background image with faded blue overlay
   - Increased title size to 5.5rem (from 4rem)

3. **Layout:**
   - Widened container from 1200px to 1600px
   - Changed research grid to fixed 4 columns (all cards on one row)

4. **Social Media:**
   - Added floating social media buttons (Facebook, Instagram, LinkedIn)
   - Positioned on right side, vertically centered
   - UVA Orange default, hover to UVA Blue
   - Included on all pages

5. **Footer:**
   - Reduced padding from 3rem → 1.5rem → 0.75rem (final)
   - Reduced text size to 0.85rem
   - Removed margin between paragraphs
   - Tightened line height to 1.4

6. **CTA Section:**
   - Reduced padding from 5rem to 3rem
   - Made button smaller and more compact

### Session 3: Deployment & CMS
1. Initialized Git repository
2. Created GitHub repository
3. Pushed code to GitHub
4. Deployed to Netlify
5. Configured CMS with GitHub OAuth authentication
6. Documented access procedures

---

## Social Media Links (Current Placeholders)

Update these through the CMS after giving professor access:
- **Facebook:** https://www.facebook.com
- **Instagram:** https://www.instagram.com
- **LinkedIn:** https://www.linkedin.com

Navigate to **Settings → Social Media** in the CMS to update.

---

## Content to Customize

The following placeholder content should be replaced with actual information:

### Homepage (index.html)
- Mission statement text
- Research area descriptions
- News items (dates, titles, descriptions)

### Research Page (research.html)
- Current research projects (names, PIs, descriptions, funding)
- Partnership organizations
- Research methods

### People Page (people.html)
- Director name, photo, bio
- All team member names, photos, bios, emails
- Update all initials in profile circles

### Publications Page (publications.html)
- Real publication titles, authors, venues, abstracts
- Add actual links to publications

### About Page (about.html)
- Director contact information
- Lab physical address and building name
- Phone numbers and email addresses
- Affiliated departments and programs

---

## Future Enhancements (Optional)

1. **Custom Domain:** Set up `techpolicylab.virginia.edu` through UVA IT
2. **Analytics:** Add Google Analytics or similar
3. **Search Functionality:** Add site search if content grows
4. **Blog/News System:** Expand news section with full blog functionality
5. **Events Calendar:** Add upcoming events section
6. **Newsletter Signup:** Add email subscription form
7. **Accessibility Audit:** Run full WCAG compliance check
8. **Performance Optimization:** Image optimization, lazy loading

---

## Maintenance Notes

### Updating Content
- Professor can edit through CMS at `/admin/`
- Changes deploy automatically within 1-2 minutes
- All edits are version-controlled through Git

### Updating Design/Code
1. Clone the repository locally
2. Make changes to HTML/CSS files
3. Test locally by opening HTML files in browser
4. Commit and push to GitHub
5. Netlify auto-deploys changes

### Adding New Pages
1. Create new HTML file following existing structure
2. Add navigation links in all existing pages
3. Update CMS config if page needs to be editable
4. Push to GitHub

---

## Technical Specifications

### Browser Compatibility
- Modern browsers (Chrome, Firefox, Safari, Edge)
- Responsive breakpoint at 768px for mobile

### Dependencies
- No JavaScript frameworks required
- CMS loaded from CDN: `https://unpkg.com/netlify-cms@^2.0.0/dist/netlify-cms.js`
- SVG icons for social media (inline)

### Performance
- Static HTML/CSS (fast loading)
- Single CSS file for all pages
- Optimized for minimal load time

---

## Support & Resources

- **Netlify Docs:** https://docs.netlify.com/
- **Decap CMS Docs:** https://decapcms.org/docs/
- **UVA Brand Guidelines:** https://brand.virginia.edu/
- **GitHub Help:** https://docs.github.com/

---

## Contact Information

For technical support or questions about this website:
- Repository Owner: behartless67-a11y
- GitHub: https://github.com/behartless67-a11y/uva-tech-policy-lab

---

## Quick Reference Commands

### Git Commands
```bash
# View status
git status

# Stage changes
git add .

# Commit changes
git commit -m "Description of changes"

# Push to GitHub (triggers auto-deploy)
git push

# View commit history
git log --oneline
```

### Local Development
- Simply open any `.html` file in a web browser to preview
- No build process or local server required
- Changes to CSS/HTML require browser refresh to see updates

---

**Last Updated:** October 15, 2025
**Version:** 1.0
**Status:** Deployed and Live ✅
