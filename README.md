This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

Added features in this workspace:
- Light/dark theme toggle (persisted) via `ThemeProvider` and `ThemeToggle`.
- Social icons in the navbar and footer linking Facebook and WhatsApp.
- Placeholder media assets at `public/assets/media/` for photos and video posters.

To connect Instagram later, update the `href` in `src/components/ui/social-icons.tsx`.

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

Deploying to Cloudflare Pages (quick guide)
- Recommended: connect this Git repository to Cloudflare Pages via the Pages dashboard — Cloudflare will run the build and provide a URL automatically.
- If you prefer CI-based deploys, a GitHub Actions template was added at `.github/workflows/deploy-cloudflare-pages.yml`.

Steps to deploy with the provided GitHub Action:
1. Create a Cloudflare Pages project in the dashboard or via the API.
2. Add these repository secrets in GitHub: `CLOUDFLARE_API_TOKEN`, `CLOUDFLARE_ACCOUNT_ID`, and `CLOUDFLARE_PROJECT_NAME`.
3. Push to `main` (or `master`) — GitHub Actions will build and deploy. The Pages URL will be shown in the Cloudflare Pages project dashboard.

Notes:
- Next.js may require special Pages integration (e.g., Cloudflare's Next.js adapter) for SSR/edge functions. If your site uses advanced SSR features, follow Cloudflare Pages docs for Next.js: https://developers.cloudflare.com/pages/framework-guides/deploy-a-nextjs-site/
- I cannot deploy the site to Cloudflare directly from here because deployment requires your Cloudflare account credentials and repository secrets. If you authorize me with access to your GitHub/Cloudflare, I can help automate further.

Other quick deploy options

- Netlify (Git-backed): connect your GitHub repo to Netlify or use the supplied GitHub Action at `.github/workflows/deploy-netlify.yml`. Add `NETLIFY_AUTH_TOKEN` and `NETLIFY_SITE_ID` to GitHub Secrets, then push to `main`.

- Vercel: the fastest path is to import this repository into Vercel (vercel.com) and let Vercel handle builds and automatic previews. Vercel will provide a URL after deploy.

The project now includes `vercel.json` and a GitHub Action workflow at `.github/workflows/deploy-vercel.yml` for automatic deployment.

If you want, I can also help you configure the required GitHub secrets (`VERCEL_TOKEN`, `VERCEL_ORG_ID`, `VERCEL_PROJECT_ID`) and validate the Vercel setup.
