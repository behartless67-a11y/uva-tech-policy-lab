# Strapi CMS Setup Guide

## Overview

Your UVA Tech Policy Lab website now uses **Strapi** - a modern, powerful headless CMS that will give your team a much better content management experience than Decap CMS.

## What Changed?

- **Old CMS**: Decap CMS (basic, limited features)
- **New CMS**: Strapi (modern, feature-rich, user-friendly)
- **Cost**: FREE (self-hosted) or $5-9/month for hosting

## Current Status

✅ Strapi is installed in the `/cms` directory
✅ Development server is running on http://localhost:1337
✅ Admin panel is ready for setup

## Next Steps

### 1. Create Your Admin Account

1. Open your browser and go to: **http://localhost:1337/admin**
2. You'll see a welcome screen to create the first administrator
3. Fill in:
   - **First name**: Your first name
   - **Last name**: Your last name
   - **Email**: Your UVA email (or techpolicylab@virginia.edu)
   - **Password**: Create a strong password (min 8 characters)
4. Click **"Let's start"**

### 2. Create Content Types

Once logged in, you need to create the content types for your site. Go to **Content-Type Builder** (in the left sidebar with the puzzle icon).

#### Create These Collection Types:

**A. Person (Team Members)**
1. Click "Create new collection type"
2. Display name: `Person`
3. Add these fields:
   - `name` (Text, required)
   - `role` (Text, required)
   - `category` (Enumeration, required)
     - Values: Director, Faculty, Research Staff, Graduate Fellows
   - `bio` (Text, required)
   - `email` (Email, optional)
   - `photo` (Media - Single, Images only, optional)
   - `order` (Number - integer, default: 0)
4. Click "Save"

**B. Research Project**
1. Click "Create new collection type"
2. Display name: `Research Project`
3. Add these fields:
   - `title` (Text, required)
   - `investigators` (Text, required)
   - `description` (Rich Text, required)
   - `funding` (Text, optional)
   - `icon` (Text, default: "microscope")
   - `order` (Number - integer, default: 0)
4. Click "Save"

**C. Publication**
1. Click "Create new collection type"
2. Display name: `Publication`
3. Add these fields:
   - `title` (Text, required)
   - `authors` (Text, required)
   - `venue` (Text, required)
   - `year` (Number - integer, required)
   - `type` (Enumeration, required)
     - Values: Journal Article, Conference Paper, Policy Report, White Paper, Working Paper
   - `abstract` (Long Text, required)
   - `link` (Text - URL, optional)
4. Click "Save"

**D. News Item**
1. Click "Create new collection type"
2. Display name: `News Item`
3. Add these fields:
   - `title` (Text, required)
   - `date` (DateTime, required)
   - `body` (Rich Text, required)
4. Click "Save"

#### Create This Single Type:

**E. Global Settings**
1. Click "Create new single type"
2. Display name: `Global Settings`
3. Add these fields:
   - `contactEmail` (Email, required)
   - `contactPhone` (Text)
   - `contactAddress` (Long Text)
   - `contactBuilding` (Text)
   - `socialFacebook` (Text - URL)
   - `socialInstagram` (Text - URL)
   - `socialLinkedin` (Text - URL)
   - `heroSubtitle` (Long Text)
   - `missionText` (Rich Text)
4. Click "Save"

### 3. Configure API Permissions

After creating content types:

1. Go to **Settings** → **Users & Permissions Plugin** → **Roles** → **Public**
2. For each content type (person, research-project, publication, news-item, global-settings), check:
   - ✅ `find`
   - ✅ `findOne`
3. Click "Save"

This allows your website to read the content via API (but not modify it).

### 4. Add Your Content

1. Go to **Content Manager** (in the left sidebar)
2. Select each content type and click "Create new entry"
3. Fill in the fields and click "Save"
4. **IMPORTANT**: Click "Publish" after saving to make it visible on your website

## For End Users - How to Update Content

### Adding/Editing Team Members
1. Log in to http://localhost:1337/admin
2. Click "Content Manager" → "Person"
3. Click "+ Create new entry" or click an existing person
4. Fill in the fields, upload a photo
5. Click "Save" then "Publish"

### Adding/Editing Research Projects
1. Content Manager → "Research Project"
2. Create/edit entries
3. Use the rich text editor for descriptions
4. Save and Publish

### Adding News Updates
1. Content Manager → "News Item"
2. Create new entry with title, date, and body
3. Save and Publish

### Editing Site Settings
1. Content Manager → "Global Settings"
2. Update contact info, social media links, mission text
3. Save (no need to publish for single types)

## Running the CMS

### Development (Local)
```bash
cd cms
npm run develop
```
Then open http://localhost:1337/admin

### Production
```bash
cd cms
npm run build
npm run start
```

## Deployment Options

### Option 1: Railway.app (Recommended - ~$5/month)
1. Create account at railway.app
2. Click "New Project" → "Deploy from GitHub repo"
3. Select your repo, set root directory to `/cms`
4. Add environment variables from `/cms/.env`
5. Deploy!

### Option 2: Render.com (~$7/month)
1. Create account at render.com
2. New Web Service → Connect GitHub repo
3. Root directory: `cms`
4. Build command: `npm install && npm run build`
5. Start command: `npm run start`
6. Add environment variables

### Option 3: Strapi Cloud ($9/month)
- Easiest but slightly more expensive
- Visit cloud.strapi.io
- Connect your GitHub repo
- One-click deploy

## Important Files

- `/cms/.env` - Environment variables and secrets (NEVER commit to git)
- `/cms/database/.tmp/data.db` - SQLite database (for development)
- `/cms/src/api/` - Content type definitions
- `/cms/config/` - Strapi configuration

## Next Phase: Connecting to Your Website

After setting up content in Strapi, the next step is to:
1. Update your HTML pages to fetch data from Strapi's API
2. Display the content dynamically
3. Remove the old Decap CMS configuration

This will be done in the next phase of the migration.

## Support

- Strapi Documentation: https://docs.strapi.io
- Community Forum: https://forum.strapi.io
- Discord: https://discord.strapi.io

## Security Notes

- Always use strong passwords for admin accounts
- Keep your `.env` file secure and never commit it to git
- Update Strapi regularly: `cd cms && npm run upgrade`
- For production, use PostgreSQL or MySQL instead of SQLite
