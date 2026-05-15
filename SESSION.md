# Session Summary — May 15, 2026

## What Was Done

### Deployment
- [x] Created FTP deploy user on BabalHost
- [x] Manually deployed site to `/public_html/`
- [x] Set GitHub Secrets: `FTP_USERNAME`, `FTP_PASSWORD`
- [x] Auto-deploy via GitHub Actions on push to `main`
- [x] `.htaccess` with SPA fallback + www→non-www redirect
- [x] Updated `deploy.yml` (server, directory, main branch only)

### Domain & DNS
- [x] Added A record `newgalaxy.edu.np → 192.250.235.43`
- [x] Deleted old Odoo CNAME
- [x] Enabled Force HTTPS redirect in cPanel
- [ ] Still needs: CNAME for `www → newgalaxy.edu.np` in cPanel Zone Editor

### Technical SEO
- [x] `robots.txt` — allows all crawlers, points to sitemap
- [x] `sitemap.xml` — 8 pages indexed, submitted to Google Search Console
- [x] Fixed canonical URL (removed `www.`)
- [x] Made OG/Twitter image URLs absolute
- [x] Added `preconnect` for Google Fonts
- [x] Created `useSEO` hook — per-page title, description, canonical, OG tags
- [x] Unique meta descriptions on all 7 pages
- [x] Google Search Console verified via HTML file
- [x] Fixed weak alt text on 3 images

### GitHub Profile
- [x] Repo description, homepage URL, 8 topics set
- [x] Portfolio-grade README with badges, tech stack, structure
- [x] AI Collaboration credits added (OpenCode, Claude, Copilot)

---

## For Next Session

### High Priority
1. **Add CNAME for www** — cPanel Zone Editor: `www CNAME newgalaxy.edu.np`
2. **Google Analytics 4** — Create property, get G-ID, add to site

### Medium Priority
3. **Optimize Google Business Profile** — Add photos, posts, respond to reviews
4. **Nepal education directories** — Get listed on edusanjal, collegenp, meroshiksha, edunepal
5. **Backlinks from Pokhara websites** — Reach out to local news, education blogs
6. **Blog/news section** — Add fresh content pages for ongoing SEO
7. **Replace picsum.photos placeholders** with real school photos

### N
8. Social media integration
9. Student/parent portal
10. Online fee payment
