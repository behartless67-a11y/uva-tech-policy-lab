# Deployment Instructions for Netlify

This guide will help you deploy the UVA Technology Policy Lab website to Netlify with CMS capabilities.

## Prerequisites
- GitHub account
- Netlify account (free - sign up at https://www.netlify.com/)

## Step 1: Create a GitHub Repository

1. Go to https://github.com and create a new repository
2. Name it something like `uva-tech-policy-lab`
3. Keep it public or private (your choice)
4. Don't initialize with README, .gitignore, or license

## Step 2: Push Your Code to GitHub

Open a terminal/command prompt in your project folder and run:

```bash
git init
git add .
git commit -m "Initial commit - UVA Tech Policy Lab website"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/uva-tech-policy-lab.git
git push -u origin main
```

Replace `YOUR-USERNAME` with your actual GitHub username.

## Step 3: Deploy to Netlify

1. Go to https://app.netlify.com/
2. Click "Add new site" → "Import an existing project"
3. Choose "GitHub" as your Git provider
4. Authorize Netlify to access your GitHub account
5. Select your `uva-tech-policy-lab` repository
6. Configure build settings:
   - **Branch to deploy:** main
   - **Build command:** (leave empty)
   - **Publish directory:** . (just a period)
7. Click "Deploy site"

Your site will be live in a few seconds at a URL like `https://random-name-12345.netlify.app`

## Step 4: Enable Netlify CMS

1. In your Netlify site dashboard, go to **Site settings** → **Identity**
2. Click **Enable Identity**
3. Under **Registration preferences**, select "Invite only" (recommended)
4. Under **Services** → **Git Gateway**, click **Enable Git Gateway**
5. Go to the **Identity** tab and click **Invite users**
6. Enter the professor's email address to send them an invitation

## Step 5: Access the CMS

1. Once deployed, your professor can access the CMS at: `https://your-site-name.netlify.app/admin/`
2. They'll need to accept the email invitation from Netlify
3. After accepting, they can log in and start editing content through the CMS interface

## Step 6: Custom Domain (Optional)

To use a custom domain like `techpolicylab.virginia.edu`:

1. In Netlify dashboard, go to **Domain settings**
2. Click **Add custom domain**
3. Enter your domain name
4. Follow instructions to configure DNS settings with UVA IT

## What Can Be Edited Through the CMS?

Your professor can edit:
- **News & Updates** - Add/edit/delete news items
- **Research Projects** - Manage research project descriptions
- **Publications** - Add new publications with full metadata
- **Team Members** - Add/edit team member profiles
- **Social Media Links** - Update Facebook, Instagram, LinkedIn URLs
- **Contact Information** - Update email, phone, address

## Editing Content

1. Go to `https://your-site-name.netlify.app/admin/`
2. Log in with Netlify Identity
3. Select the collection you want to edit (News, Research, People, etc.)
4. Click "New [Item]" or edit existing items
5. Make your changes
6. Click "Publish" - changes go live immediately!

## Need Help?

- Netlify Docs: https://docs.netlify.com/
- Netlify CMS Docs: https://www.netlifycms.org/docs/
- Contact: [Your email/contact info]

## Current Site Structure

```
TechPolicySite/
├── index.html (Home)
├── research.html
├── people.html
├── publications.html
├── about.html
├── styles.css
├── admin/
│   ├── index.html (CMS interface)
│   └── config.yml (CMS configuration)
├── netlify.toml (Netlify settings)
└── tech-pr-policy-decisions.png (Hero background)
```

## Social Media Links

Currently set to placeholder URLs. Update these through the CMS:
- Facebook: https://www.facebook.com
- Instagram: https://www.instagram.com
- LinkedIn: https://www.linkedin.com

Navigate to **Settings** → **Social Media** in the CMS to update these.
