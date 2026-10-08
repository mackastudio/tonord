# Talga — website

A new website for [Talga Group](https://www.talgagroup.com/), the vertically
integrated battery anode and advanced materials company. Built with Next.js 16
(App Router), React 19 and Tailwind CSS v4.

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm run lint
```

## Structure

| Route                  | Content                                              |
| ---------------------- | ---------------------------------------------------- |
| `/`                    | Hero, latest news, intro, value chain, key figures   |
| `/about`               | Company, key figures, graphite projects, leadership  |
| `/operations/lulea`    | Luleå Anode Refinery & EVA Plant                     |
| `/operations/vittangi` | Nunasvaara South graphite mine                       |
| `/products`            | Talnode™ anodes, Talphite™ & Talphene™ materials      |
| `/markets`             | EV, electronics, storage, consumer goods, industrial |
| `/sustainability`      | Vision, CLIMB biodiversity, policies & reports       |
| `/news`                | Announcements (links to ASX releases)                |
| `/careers`             | Working at Talga, recruitment-scam notice            |
| `/contact`             | Offices in Sweden, Australia, UK and Germany         |

All copy, news, people and offices live in `src/data/site.ts`, so content can be
updated without touching the page components. Shared building blocks are in
`src/components/ui` and `src/components/sections`.

## Images

Imagery is currently loaded from Talga's existing media storage
(`talgagroup.eu-central-1.linodeobjects.com`, allowed in `next.config.ts`).
Before launch, move the assets into `public/` or a dedicated CDN.
