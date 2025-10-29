# Deployment Guide

## Step 1: Push Code to GitHub

Your code has been committed locally. Now you need to:

1. Go to https://github.com/new
2. Create a new repository (e.g., `send-tech-company`)
3. **DO NOT** initialize with README, .gitignore, or license (we already have these)
4. Copy the repository URL (e.g., `https://github.com/YOUR_USERNAME/send-tech-company.git`)

Then run:
```bash
git remote add origin YOUR_REPOSITORY_URL
git branch -M main
git push -u origin main
```

## Step 2: Set Up Resend Account

1. Go to https://resend.com and create an account (or sign in)
2. Navigate to **API Keys** in the dashboard
3. Click **Create API Key**
4. Name it (e.g., "Vercel Production")
5. Copy the API key (you'll need it for Step 4)
6. **Important**: For production emails, you'll need to verify your domain in Resend. For now, you can use Resend's test domain or verify `sendtechcompany.com` in the Resend dashboard under **Domains**.

## Step 3: Deploy to Vercel

You can deploy in one of two ways:

### Option A: Via Vercel Dashboard (Recommended for first deployment)
1. Go to https://vercel.com and sign in with GitHub
2. Click **Add New Project**
3. Import your GitHub repository
4. Configure project:
   - Framework Preset: Next.js (should be auto-detected)
   - Root Directory: `./` (default)
   - Build Command: `npm run build` (default)
   - Output Directory: `.next` (default)
   - Install Command: `npm install` (default)
5. Add environment variable:
   - Name: `RESEND_API_KEY`
   - Value: [Your Resend API key from Step 2]
   - Add to: Production, Preview, and Development
6. Click **Deploy**

### Option B: Via Vercel CLI
Run these commands:
```bash
cd /Users/mabinazinga/send-tech-company
vercel login
vercel
```

When prompted:
- Set up and deploy? **Yes**
- Which scope? Select your account
- Link to existing project? **No** (for first deployment)
- Project name? `send-tech-company` (or your preference)
- In which directory is your code located? `./`

After deployment, add the environment variable:
```bash
vercel env add RESEND_API_KEY
```
- Select all environments (Production, Preview, Development)
- Paste your Resend API key

Then redeploy:
```bash
vercel --prod
```

## Step 4: Verify Deployment

1. Visit your Vercel deployment URL (provided after deployment)
2. Test the contact form at `/contact`
3. Check that emails are being received

## Troubleshooting

- **Contact form not working**: Make sure `RESEND_API_KEY` is set in Vercel environment variables
- **Email domain errors**: You may need to verify your domain in Resend or use their test domain initially
- **Build errors**: Check Vercel deployment logs for specific errors

