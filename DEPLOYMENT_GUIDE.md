# UVA Tech Policy Lab - Deployment Guide

This guide walks you through deploying the UVA Tech Policy Lab website and Strapi CMS to production.

## Architecture Overview

The website consists of two parts:
1. **Static Website** (HTML/CSS/JS) - Hosted on Netlify (Free)
2. **Strapi CMS** - Hosted on Railway ($5-7/month with PostgreSQL database)

The static website fetches content from the Strapi CMS API.

## Prerequisites

- GitHub account (for code repository)
- Railway account (https://railway.app - sign up with GitHub)
- Netlify account (https://netlify.com - sign up with GitHub)

## Part 1: Deploy Strapi CMS to Railway

### Step 1: Push Code to GitHub

1. The code should already be in a GitHub repository. If not:
   ```bash
   git init
   git add .
   git commit -m "Initial commit - UVA Tech Policy Lab CMS"
   git branch -M main
   git remote add origin YOUR_GITHUB_REPO_URL
   git push -u origin main
   ```

### Step 2: Create Railway Project

1. Go to https://railway.app and sign in with GitHub
2. Click "New Project"
3. Select "Deploy from GitHub repo"
4. Choose your repository (you may need to authorize Railway to access your repos)
5. Railway will detect it's a Node.js project

### Step 3: Configure Railway

1. Railway should auto-detect the `cms` directory. If not:
   - Click on your service
   - Go to "Settings" tab
   - Set "Root Directory" to `cms`

2. Add a PostgreSQL database:
   - Click "New" ’ "Database" ’ "Add PostgreSQL"
   - Railway will automatically create a DATABASE_URL environment variable

3. Set environment variables:
   - Click on your Strapi service
   - Go to "Variables" tab
   - Add the following variables (generate new secure values):

   ```
   NODE_ENV=production
   HOST=0.0.0.0
   PORT=443  (or leave empty, Railway will auto-assign)

   # Generate new secure random strings for these:
   APP_KEYS=generateRandomString1,generateRandomString2
   API_TOKEN_SALT=generateRandomString
   ADMIN_JWT_SECRET=generateRandomString
   TRANSFER_TOKEN_SALT=generateRandomString
   JWT_SECRET=generateRandomString
   ENCRYPTION_KEY=generateRandomString

   DATABASE_CLIENT=postgres
   # DATABASE_URL is automatically set by Railway's PostgreSQL
   ```

   **To generate secure random strings:** Use an online generator or run in terminal:
   ```bash
   node -e "console.log(require('crypto').randomBytes(32).toString('base64'))"
   ```

4. Configure build settings:
   - Go to "Settings" ’ "Build Command"
   - Set to: `npm run build`
   - Deploy Command should be: `npm run start`

### Step 4: Deploy and Verify

1. Railway will automatically deploy. Wait for it to complete.
2. Click on your service ’ "Settings" ’ "Networking" ’ "Generate Domain"
3. Your Strapi CMS will be available at: `https://your-project-name.up.railway.app`
4. Visit `https://your-project-name.up.railway.app/admin` and create your admin account

### Step 5: Set Up Content

1. Log in to the Strapi admin panel
2. Add team members, projects, publications, etc.
3. Make sure to configure public permissions:
   - Settings ’ Users & Permissions plugin ’ Roles ’ Public
   - Enable `find` and `findOne` for all content types

## Part 2: Deploy Website to Netlify

### Step 1: Update API URL in Website Files

1. Update the following files to use your Railway Strapi URL:
   - `people.html` - Change `const API_URL = 'http://localhost:1337'` to `const API_URL = 'https://your-project-name.up.railway.app'`
   - `research.html` - Same change
   - Any other files that fetch from API

2. Commit and push changes:
   ```bash
   git add people.html research.html
   git commit -m "Update API URL for production"
   git push
   ```

### Step 2: Deploy to Netlify

1. Go to https://netlify.com and sign in
2. Click "Add new site" ’ "Import an existing project"
3. Choose "Deploy with GitHub"
4. Select your repository
5. Configure build settings:
   - **Base directory:** Leave empty (root)
   - **Build command:** Leave empty (static site, no build needed)
   - **Publish directory:** `.` (current directory)
6. Click "Deploy site"

### Step 3: Configure Custom Domain (Optional)

1. In Netlify, go to "Domain settings"
2. Add your custom domain (e.g., techpolicylab.virginia.edu)
3. Follow DNS configuration instructions provided by Netlify
4. Enable HTTPS (automatic with Netlify)

## Part 3: Configure CORS for Strapi

If you encounter CORS errors when the website tries to fetch from Strapi:

1. In your Railway Strapi service, add an environment variable:
   ```
   CLIENT_URL=https://your-netlify-site.netlify.app
   ```

2. Update `cms/config/middlewares.ts` to allow your Netlify domain.

## Testing

1. Visit your Netlify site
2. Check that:
   - Team members load on the People page
   - Research projects load on the Research page
   - All images display correctly
3. Log in to Strapi admin panel and edit content
4. Verify changes appear on the website after refresh

## Cost Breakdown

- **Railway:** ~$5-7/month (PostgreSQL database + Strapi hosting)
- **Netlify:** Free (100GB bandwidth, HTTPS, global CDN)
- **Total:** ~$5-7/month

## Maintenance

### Adding Content
1. Log in to Strapi admin panel at `https://your-project-name.up.railway.app/admin`
2. Navigate to Content Manager
3. Add/edit team members, projects, publications, or articles
4. Changes appear immediately on the website

### Updating Website Code
1. Make changes to HTML/CSS/JS files locally
2. Test locally
3. Commit and push to GitHub
4. Netlify automatically redeploys

### Updating Strapi
1. Update content types or CMS settings in Strapi admin
2. For code changes to Strapi, push to GitHub
3. Railway automatically redeploys

## Troubleshooting

### Strapi won't start on Railway
- Check Railway logs: Click service ’ "Deployments" ’ Latest deployment ’ "View Logs"
- Verify all environment variables are set correctly
- Make sure DATABASE_CLIENT=postgres and DATABASE_URL is set

### Website not loading content
- Check browser console for errors (F12)
- Verify API URL is correct in people.html and research.html
- Check that Strapi public permissions are enabled
- Verify Strapi is accessible at its Railway URL

### Database migration issues
- Railway PostgreSQL is empty on first deploy
- Content must be re-entered in production Strapi admin panel
- Alternatively, export content from local Strapi and import to production

## Security Notes

1. **Never commit .env file** - It contains secrets
2. **Use strong passwords** for Strapi admin accounts
3. **Regularly update dependencies:** Run `npm update` in the cms folder
4. **Monitor Railway logs** for suspicious activity
5. **Backup your database** periodically (Railway provides backup options)

## Support Resources

- **Strapi Documentation:** https://docs.strapi.io
- **Railway Documentation:** https://docs.railway.app
- **Netlify Documentation:** https://docs.netlify.com

## Next Steps After Deployment

1. Add real content to Strapi (team members, projects, publications)
2. Test all website functionality
3. Set up custom domain for both Strapi and Netlify
4. Configure email notifications in Strapi (optional)
5. Set up automated backups for Railway database
6. Add analytics (Google Analytics or similar)
7. Train content editors on how to use Strapi
