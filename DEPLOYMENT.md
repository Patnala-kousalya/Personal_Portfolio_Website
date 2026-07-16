# Vercel Deployment Guide

## 🚀 Deploy Your Portfolio to Vercel in 3 Minutes

### What is Vercel?
Vercel is a cloud platform optimized for Next.js and Vite React apps. It offers:
- **Free hosting** with auto-deployment from GitHub
- **Custom domains** support
- **Automatic HTTPS**
- **Edge caching** for fast global delivery
- **Serverless functions** (if needed later)

---

## ✅ Prerequisites

1. **GitHub Account**: Repository pushed to GitHub public repo
2. **Vercel Account**: Sign up at https://vercel.com (free)

---

## 📋 Deployment Steps

### Step 1: Prepare Your GitHub Repository

```bash
# Ensure all changes are committed
git status

# Add all files
git add .

# Commit with a clear message
git commit -m "Final portfolio ready for deployment"

# Push to main branch
git push origin main
```

**Verify your repository is PUBLIC:**
- Go to GitHub repo Settings
- Scroll to "Danger Zone"
- Verify "Make this repository public" (or it's already public)

---

### Step 2: Sign Up / Log In to Vercel

1. Go to https://vercel.com
2. Click **"Sign Up"** (or **"Log In"** if you have an account)
3. Choose **"Continue with GitHub"**
4. Authorize Vercel to access your GitHub account

---

### Step 3: Create New Project on Vercel

1. After logging in, click **"New Project"**
2. Under "Import Git Repository," search for **"portfolio-website"** (or your repo name)
3. Click the repository to select it
4. Vercel auto-detects **React** and **Vite** framework

---

### Step 4: Configure Build Settings

Vercel auto-detects most settings, but verify:

| Setting | Value |
|---------|-------|
| **Framework** | React |
| **Build Command** | `npm run build` |
| **Output Directory** | `dist` |
| **Install Command** | `npm install` |
| **Node Version** | 18.x (or latest) |

**Environment Variables:** (Leave empty — not needed for this project)

---

### Step 5: Deploy

1. Click **"Deploy"** button
2. Vercel will:
   - Clone your repository
   - Install dependencies (`npm install`)
   - Build your project (`npm run build`)
   - Deploy to a live URL
3. Wait for deployment to complete (2-5 minutes)

---

### Step 6: Get Your Live URL

After deployment succeeds, you'll see:

```
✅ Production Deployment Ready

Visit Your Site:
🔗 https://portfolio-website-abc123.vercel.app
```

**Copy this URL** — This is your live portfolio!

---

## 🎯 After Deployment

### 1. Update Your README

Edit `README.md` and replace:
```markdown
**[View Live Portfolio](https://your-live-url.vercel.app)**
```

With your actual Vercel URL.

### 2. Test Your Live Site

- Open your live URL in browser
- Test all sections (scroll through entire page)
- Click all navigation links
- Test contact form
- Verify animations work
- Check on mobile device

### 3. Run Lighthouse Audit

1. Open your live URL in Chrome
2. Press `F12` to open DevTools
3. Go to **Lighthouse** tab
4. Click **"Analyze page load"**
5. Wait for report

**Target Scores:**
- Performance: ≥ 80
- Accessibility: ≥ 90
- Best Practices: ≥ 90
- SEO: ≥ 85

---

## 🔄 Continuous Deployment

After initial deployment:

1. **Every time you push to main branch**, Vercel automatically:
   - Detects the new commit
   - Rebuilds your site
   - Deploys new version
   - Updates your live URL

2. **No manual steps needed!** Just:
   ```bash
   git add .
   git commit -m "Your changes"
   git push origin main
   ```

---

## 🛠️ Troubleshooting Deployment

### Build Failed
**Error:** "Build failed"

**Solution:**
```bash
# Run build locally to debug
npm install
npm run build

# Check for errors and fix them
# Then push again
git push origin main
```

### Site Not Loading
**Error:** Blank page or 404

**Solution:**
1. Check Vercel dashboard for build logs
2. Ensure `index.html` exists in root
3. Verify `src/main.jsx` is correct
4. Redeploy: In Vercel dashboard → **Deployments** → Click latest → **Redeploy**

### Slow Performance
**Solution:**
1. Verify Lighthouse scores
2. Optimize images (convert to WebP, reduce size)
3. Use lazy loading on images
4. Clear Vercel cache: **Settings** → **Git** → **Clear Cache** → **Rebuild**

---

## 📊 Monitor Your Deployment

After going live, you can:

### Analytics
- Vercel dashboard shows visit analytics
- Track page views, deployments, and performance

### Environment
- Vercel auto-handles HTTPS, caching, and CDN

### Custom Domain (Optional)
Go to **Project Settings** → **Domains** → Add your custom domain

Example: Instead of `portfolio.vercel.app`, use `kousalya.dev`

---

## 💾 Submission Package

Once live, submit:

1. **Live Portfolio URL**: Your Vercel URL from Step 6
   - Example: https://portfolio-website-abc123.vercel.app

2. **GitHub Repository URL**: Your public GitHub repo
   - Example: https://github.com/kousalya/portfolio-website

3. **README.md**: Already in repo with setup instructions

---

## ✨ Done! 🎉

Your portfolio is now live to the world!  
Share the URL with:
- ✅ Employers and recruiters
- ✅ Friends and colleagues
- ✅ LinkedIn profile link
- ✅ Portfolio review platforms

---

## 📞 Need Help?

- **Vercel Docs**: https://vercel.com/docs
- **GitHub Help**: https://docs.github.com
- **Vite Guide**: https://vitejs.dev
- **Tailwind Docs**: https://tailwindcss.com/docs

---

**Congratulations on your completed portfolio! 🚀**
