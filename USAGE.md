# Quick Start Guide

## Running the Investor Deck

### Development Mode

```bash
npm install      # Install dependencies (first time only)
npm run dev      # Start dev server at http://localhost:3000
```

Open your browser to `http://localhost:3000` to view the deck.

### Production Build

```bash
npm run build    # Build optimized production version
npm start        # Serve production build
```

## Navigation

- **Keyboard**: Use Left/Right arrow keys to navigate between slides
- **Mouse**: Click "Prev" or "Next" buttons at the bottom
- **Progress**: Watch the blue bar at the top and slide counter at the bottom
- **Speaker Notes**: Click the blue circular button (bottom-right) on slides that have notes

## Slide Overview

The deck contains 16 slides:

### Part 1: Introduction & Credibility (Slides 1-3)
- **Slide 1**: Title slide — "Forex CRM Delivery Plan"
- **Slide 2**: Transparency model — No black box development (has speaker notes)
- **Slide 3**: Proof of capability — Beacon52 & Bunker Suite (has speaker notes)

### Part 2: What & Why (Slides 4-5)
- **Slide 4**: What we're building — Plain English CRM description
- **Slide 5**: Why Forex is different — Security requirements

### Part 3: Delivery Timeline (Slides 6-7)
- **Slide 6**: MVP at 6 months — Core deliverables (has speaker notes)
- **Slide 7**: Post-MVP expansion — Month 6-12 roadmap

### Part 4: Security & Technology (Slides 8-10)
- **Slide 8**: Security from day one — RBAC, audit logs, monitoring (has speaker notes)
- **Slide 9**: Why Azure — Business reasons for cloud platform
- **Slide 10**: Tech stack — Modern, proven technologies

### Part 5: Process & Costs (Slides 11-13)
- **Slide 11**: How we work — Sprints, demos, transparency
- **Slide 12**: Cost transparency — Infrastructure breakdown (has speaker notes)
- **Slide 13**: Risk & controls — Managing delivery risks

### Part 6: Commercial & Next Steps (Slides 14-16)
- **Slide 14**: Commercial model — Team structure & pricing
- **Slide 15**: Next steps — Path to Sprint 1 (has speaker notes)
- **Slide 16**: Appendix — Cost drivers explained

## Customization

### Edit Content

All slide content is in `components/slides/`. Each slide is a React component:

```
components/slides/
├── Slide01Title.tsx
├── Slide02Transparency.tsx
├── ...
└── Slide16Appendix.tsx
```

Edit any `.tsx` file to update content.

### Add/Remove Slides

1. Create a new component in `components/slides/`
2. Import and add to the `slides` array in `components/slides/index.ts`
3. Optionally add speaker notes

### Change Theme

Edit `tailwind.config.ts` to change colors:

```typescript
colors: {
  navy: "#1B2A4A",        // Primary accent
  darkGreen: "#1A5632",   // Secondary accent
  // ... customize as needed
}
```

## Speaker Notes

6 slides include detailed speaker notes for the presenter:
- Slide 2: Why transparency matters
- Slide 3: Explaining credibility proof points
- Slide 6: MVP deliverables context
- Slide 8: Security as business value
- Slide 12: Cost control messaging
- Slide 15: Next steps rationale

Click the blue "Notes" button (bottom-right) to view during presentation.

## Responsive Design

The deck is optimized for:
- Desktop (recommended for presentation)
- Tablet (landscape/portrait)
- Mobile (emergency viewing, not ideal for presenting)

## Troubleshooting

### Dev server won't start
- Check if port 3000 is in use: `netstat -ano | findstr :3000`
- Kill the process or use a different port: `npm run dev -- -p 3001`

### Build errors
- Clear cache: `Remove-Item -Recurse -Force .next`
- Reinstall: `Remove-Item -Recurse -Force node_modules; npm install`

### Keyboard navigation not working
- Click anywhere on the slide to focus the page
- Ensure no input fields are focused
- Some browsers may require clicking the page first

## Deployment

### Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Static Export (for hosting on any server)
Add to `next.config.ts`:
```typescript
const nextConfig: NextConfig = {
  output: 'export',
};
```

Then build:
```bash
npm run build
```

The static files will be in the `out` directory.

## Questions?

See `README.md` for full project documentation.
