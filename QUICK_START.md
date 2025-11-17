# Quick Start - Strapi CMS

## Your New CMS is Ready!

Strapi has been installed and is currently running. Here's what to do next:

## Step 1: Access the Admin Panel

Open your browser and go to:
```
http://localhost:1337/admin
```

## Step 2: Create Your Admin Account (First Time Only)

You'll see a welcome screen. Fill in:
- First name
- Last name
- Email (use your UVA email or techpolicylab@virginia.edu)
- Password (minimum 8 characters)

Click **"Let's start"**

## Step 3: Create Content Types

Follow the detailed instructions in **[STRAPI_SETUP.md](./STRAPI_SETUP.md)** to create:
- Person (team members)
- Research Project
- Publication
- News Item
- Global Settings

This takes about 15 minutes.

## Step 4: Configure API Permissions

1. Settings → Users & Permissions → Roles → Public
2. Check `find` and `findOne` for all content types
3. Save

## Step 5: Start Adding Content!

1. Click **Content Manager**
2. Select a content type
3. Click **+ Create new entry**
4. Fill in the fields
5. Click **Save** then **Publish**

## Need Help?

- **Setup Instructions**: See [STRAPI_SETUP.md](./STRAPI_SETUP.md)
- **User Guide**: See [CMS_USER_GUIDE.md](./CMS_USER_GUIDE.md)
- **Migration Info**: See [STRAPI_MIGRATION_SUMMARY.md](./STRAPI_MIGRATION_SUMMARY.md)

## Running Strapi

### To Start Strapi:
```bash
cd cms
npm run develop
```

### To Stop Strapi:
Press `Ctrl+C` in the terminal

## Cost

- **Self-hosted (current setup)**: FREE
- **Hosting options**: $5-9/month when ready to deploy

---

**You're all set!** Open http://localhost:1337/admin to get started.
