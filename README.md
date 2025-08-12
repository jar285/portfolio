# Jesus A. R. Vargas — AI Portfolio Monorepo

This monorepo hosts an advanced, AI-powered personal portfolio.

## Apps & Packages
- `apps/web`: Next.js 14 App Router web app (UI + API routes)
- `packages/ui`: Shared design system (shadcn/ui + Tailwind tokens)
- `packages/db`: Prisma schema & client
- `packages/ai`: LLM clients, prompts, RAG utilities, moderation
- `packages/config`: Shared ESLint/Prettier/tsconfig

## Getting Started
1. Copy `.env.example` to `.env` and set values.
2. Install deps: `npm install`.
3. Create the web app: `npx create-next-app@latest apps/web --ts --eslint --tailwind --app --use-npm --no-git` (already scripted in Sprint 0).
4. Run dev: `npm run dev`.

## Decisions
- Auth: Supabase Auth (email/password at launch)
- AI: OpenAI (LLM + embeddings) with moderation filters
- DB: Postgres + pgvector (Supabase)
- Hosting: Vercel (app) + Supabase (DB/Auth/Storage)

## Owner
Jesus Adonis Rosario Vargas
