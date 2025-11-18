# Getting Started: Updating the Tech Policy Lab Website

This guide will help you set up your computer to update the website using Claude Code.

## What You'll Need

1. **VS Code** - Free code editor from Microsoft
2. **Claude Code** - AI assistant that edits the website for you
3. **GitHub access** - Permission to push changes to the repository

## One-Time Setup (15-20 minutes)

### Step 1: Install VS Code

1. Go to https://code.visualstudio.com/
2. Download for your operating system (Windows/Mac)
3. Run the installer with default settings

### Step 2: Install Claude Code Extension

1. Open VS Code
2. Click the Extensions icon in the left sidebar (or press `Ctrl+Shift+X`)
3. Search for "Claude Code"
4. Click "Install" on the Anthropic Claude Code extension
5. After installation, you'll need to sign in with an Anthropic account
   - If you don't have one, create one at https://claude.ai

### Step 3: Install Git

Git tracks changes and syncs with GitHub.

**Windows:**
1. Download from https://git-scm.com/download/win
2. Run installer with default settings
3. Restart VS Code after installation

**Mac:**
1. Open Terminal
2. Type `git --version`
3. If not installed, follow the prompt to install Xcode Command Line Tools

### Step 4: Configure Git (First time only)

Open VS Code's terminal (`Ctrl+`` or View → Terminal) and run:

```bash
git config --global user.name "Your Name"
git config --global user.email "your-email@virginia.edu"
```

### Step 5: Clone the Repository

1. Open VS Code
2. Press `Ctrl+Shift+P` (or `Cmd+Shift+P` on Mac)
3. Type "Git: Clone" and select it
4. Paste this URL: `https://github.com/BattenIT/uva-tech-policy-lab.git`
5. Choose a folder to save the project (e.g., Documents)
6. Click "Open" when prompted

You now have the website files on your computer!

## Daily Use: Making Updates

### Opening the Project

1. Open VS Code
2. File → Open Folder
3. Navigate to where you saved the project (e.g., Documents/uva-tech-policy-lab)
4. Click "Select Folder"

### Using Claude Code

1. Open Claude Code panel:
   - Click the Claude icon in the left sidebar, OR
   - Press `Ctrl+Shift+P` and type "Claude Code"

2. **Ask Claude to make changes in plain English.** Examples:

   **Adding a team member:**
   > "Add a new faculty affiliate named Dr. Jane Smith. She's an Assistant Professor of Computer Science who specializes in cybersecurity policy. Her email is js4ab@virginia.edu. Use a placeholder for now since we don't have her photo yet."

   **Updating content:**
   > "Change the first research project title from 'AI Governance Frameworks' to 'Responsible AI Implementation'"

   **Adding news:**
   > "Add a news item dated December 2024 announcing that we received a $500,000 grant from the NSF for our digital privacy research"

   **Adding a photo:**
   > "Update Dr. Jane Smith's entry to use the photo jane-smith.jpg"

   (Make sure you've added the photo file to the project folder first)

3. Claude will:
   - Edit the necessary files
   - Show you what changed
   - Commit and push to GitHub when you approve

4. **That's it!** Changes go live on the website within 30 seconds.

### Adding Photos

1. Save the photo to the project folder (the main folder, not a subfolder)
2. Use JPG format, any reasonable size (will be displayed at 150px round)
3. Name it something simple like `jane-smith.jpg`
4. Tell Claude to use it: "Update Jane Smith's entry to use jane-smith.jpg as her photo"

## Common Requests - Copy & Paste These

### Add a Team Member
```
Add a new [category] named [Full Name].
Title: [Job Title]
Bio: [2-3 sentence biography]
Email: [email@virginia.edu]
Photo: [filename.jpg or "no photo yet"]
```

Categories: Faculty Affiliate, Research Staff, Graduate Research Fellow

### Add a Research Project
```
Add a new research project:
Title: [Project Name]
Principal Investigators: [Names]
Description: [2-3 sentence description]
Funding: [Funding source]
Status: Active
```

### Add a News Item
```
Add a news item:
Date: [Month Year]
Headline: [News headline]
Description: [1-2 sentence summary]
```

### Update Existing Content
```
On the [page name] page, change [current text] to [new text]
```

### Remove Content
```
Remove [person name/project name/news item] from the website
```

## Troubleshooting

### "Permission denied" when pushing
- Contact Batten IT to be added as a collaborator on the GitHub repository

### Changes not appearing on live site
- Wait 30 seconds and refresh
- Check https://app.netlify.com for deploy status
- Clear your browser cache (`Ctrl+Shift+R`)

### Claude isn't responding
- Make sure you're signed into the Claude Code extension
- Check your internet connection
- Try closing and reopening VS Code

### "Merge conflict" error
- This happens if someone else made changes at the same time
- Ask Claude: "Help me resolve this merge conflict"

## Getting Help

- **Technical issues:** Contact Batten IT
- **Claude Code questions:** Ask Claude itself! It can explain how to do things.
- **GitHub access:** Contact the repository administrator

## Quick Reference

| Task | What to Tell Claude |
|------|---------------------|
| Add person | "Add a new faculty affiliate named..." |
| Remove person | "Remove Dr. Smith from the people page" |
| Update bio | "Update Dr. Smith's bio to say..." |
| Add photo | "Use photo.jpg for Dr. Smith" |
| Add project | "Add a research project about..." |
| Add news | "Add a news item about..." |
| Change text | "On the about page, change X to Y" |
| Fix typo | "Fix the typo on the research page where it says..." |

---

**Website URL:** https://eloquent-eclair-5aa7e1.netlify.app
**GitHub Repository:** https://github.com/BattenIT/uva-tech-policy-lab
