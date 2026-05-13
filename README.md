# Cybersecurity Portfolio — Next.js + Tailwind CSS

A premium dark-theme portfolio for cybersecurity analysts and penetration testers. Built for credibility, clarity, and recruiter readability.

## Tech Stack

- **Framework**: Next.js 14 (Pages Router)
- **Styling**: Tailwind CSS 3
- **Typography**: Syne (display) + JetBrains Mono (code/labels)
- **Icons**: Lucide React
- **Deployment**: Vercel (zero-config)

## Features

- **Hero** with animated typing effect and live status badge
- **About** with professional bio and career timeline
- **Skills** with animated progress bars (4 categories, 20 skills)
- **Certifications** with status, credential IDs, and learning roadmap
- **Labs** — TryHackMe + HackTheBox stats, paths, notable machines
- **Case Studies** — expandable cards with full pentest methodology:
  - Objective & scope
  - Step-by-step methodology
  - Tools used
  - Findings with CVSS severity badges
  - Remediation recommendations
  - Outcome
- **Resume** with download + preview, experience timeline
- **Contact** form + social links + PGP note
- Sticky navbar with scroll-spy active states
- Scroll-triggered reveal animations
- Responsive mobile layout
- Grid background + noise texture + scan-line effects
- Custom scrollbar, selection color

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Customization

1. **Edit your info**: Update `data/portfolio.js` with your real data
2. **Add your resume**: Place `resume-yourname.pdf` in `/public/`
3. **Update contact form**: Wire `components/Contact.jsx` to Formspree, Netlify Forms, or your API endpoint
4. **Profile photo**: Add an image to `/public/` and import in `About.jsx`

## Deploy to Vercel

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

Or connect your GitHub repo to Vercel for automatic deployments on push.

## Sections Reference

| Section | Component | Data Source |
|---|---|---|
| Hero | `Hero.jsx` | `personal` |
| About | `About.jsx` | `personal`, `timeline` |
| Skills | `Skills.jsx` | `skills` |
| Certifications | `Certifications.jsx` | `certifications` |
| Labs | `Labs.jsx` | `labProgress` |
| Case Studies | `CaseStudies.jsx` | `caseStudies` |
| Resume | `Resume.jsx` | `personal` |
| Contact | `Contact.jsx` | `personal` |

## Design Decisions

- **No hacker clichés** — no Matrix rain, no skull icons, no neon green on black
- **Monospace for metadata** — JetBrains Mono used for labels, IDs, stats
- **Teal restrained** — accent color used sparingly; backgrounds stay near-black
- **Credibility-first** — case studies use real pentest report structure
- **Accessible** — semantic HTML, proper heading hierarchy, aria labels, keyboard-navigable

## License

MIT — Free to use and adapt. Please replace placeholder data with your own.
