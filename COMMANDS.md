# 🚀 Quick Command Reference

## Local Development

```bash
# Install dependencies
npm install

# Start dev server (opens at http://localhost:5173)
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview
```

## Git & GitHub

```bash
# Check status
git status

# Stage all changes
git add -A

# Commit changes
git commit -m "Your message"

# Push to GitHub
git push origin main

# View commit history
git log --oneline
```

## After Deployment

```bash
# Check live performance with curl
curl -I https://your-vercel-url.vercel.app

# View Vercel deployment logs
# Go to: https://vercel.com/dashboard → Select project → Deployments
```

---

## 📋 Pre-Deployment Checklist

### Code Quality
```bash
# Ensure no errors
npm run build

# Fix any build issues before pushing
```

### Git Push Steps
```bash
# 1. Check what's ready to commit
git status

# 2. Stage all files
git add -A

# 3. Commit with clear message
git commit -m "Portfolio production build - ready for Vercel"

# 4. Push to GitHub
git push origin main
```

### After Push
- Monitor GitHub Actions/CI if configured
- Visit Vercel dashboard to watch deployment
- Wait for "Production" status
- Copy your live URL

---

## 🎯 Submission

### Required Information
1. **Live URL**: `https://your-portfolio.vercel.app`
2. **GitHub URL**: `https://github.com/your-username/portfolio-website`
3. **README.md**: Present in repo root (already done)

### Verification Steps
```bash
# Verify repo is public
# Go to GitHub > Settings > scroll down to verify "Public"

# Verify all files are pushed
git log -1 --name-status
# Should show recently updated files

# Verify deployment succeeded
# Visit your live URL in browser
# Test all sections and links
```

---

## ⚡ Common Issues & Fixes

### Port Already in Use
```bash
# Kill process on port 5173
# Then restart
npm run dev
```

### Build Fails
```bash
# Clear cache and reinstall
rm -r node_modules package-lock.json
npm install
npm run build
```

### Deployment Fails on Vercel
1. Push failed build locally first: `npm run build`
2. Fix errors shown in build output
3. Commit and push again
4. Vercel will auto-retry

---

## 📊 After Going Live

### Monitor
- Vercel Dashboard: https://vercel.com/dashboard
- GitHub: https://github.com/your-repo
- Live Site: Your Vercel production URL

### Share
- LinkedIn profile link to portfolio
- Resume with portfolio URL
- Portfolio showcase platforms
- Email signature

### Future Updates
Any change locally:
```bash
git add -A
git commit -m "Updated [section/feature]"
git push origin main
# Vercel auto-deploys!
```

---

**You're all set! 🎉**
