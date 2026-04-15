# Project Name

Brief description of what this project does and who it's for.

Live: [https://project.pages.dev](https://project.pages.dev)

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Deployment**: Cloudflare Pages via GitHub Actions
- **Dev Environment**: Nix (optional) + Bun

## Getting Started

### With Nix (recommended)

```bash
git clone https://github.com/wezero-studio/project-name.git
cd project-name
nix develop          # drops you into a shell with bun, node, treefmt, lefthook
cp .env.example .env.local
bun install
bun run dev
```

### Without Nix

Ensure you have [bun](https://bun.sh) and [lefthook](https://github.com/evilmartians/lefthook) installed.

```bash
git clone https://github.com/wezero-studio/project-name.git
cd project-name
cp .env.example .env.local
bun install
lefthook install
bun run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Environment Variables

Copy `.env.example` to `.env.local` and fill in the values:

| Variable | Description | Where to get it |
|----------|-------------|-----------------|
| `NEXT_PUBLIC_APP_URL` | Public app URL | Your domain |

## Scripts

| Command | Description |
|---------|-------------|
| `bun run dev` | Start dev server with Turbopack |
| `bun run build` | Production build |
| `bun run lint` | Run ESLint |
| `bun run format` | Format with treefmt (prettier + nixfmt) |
| `bun run type-check` | TypeScript type checking |

## Deployment

Deployments are automated via GitHub Actions to Cloudflare Pages. Push to `main` to deploy to production. PRs get preview deployments with a URL comment.

See the [CI/CD SOP](https://github.com/wezero-studio/sop/blob/main/ci-cd.md) for setup details.

## Project Structure

```
src/
  app/          # Next.js App Router pages and layouts
  components/   # Reusable UI components
  lib/          # Utility functions and shared logic
public/         # Static assets (favicon, og-image, etc.)
flake.nix       # Nix dev environment
treefmt.nix     # treefmt config (nix-native)
treefmt.toml    # treefmt config (non-nix fallback)
lefthook.yml    # Git hooks (lint, format, type-check on commit)
```
