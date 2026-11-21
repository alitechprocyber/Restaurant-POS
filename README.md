# RestoPOS

Customizable, offline-first restaurant POS for the web (PC, tablet, phone). Built to be sold to many restaurants:
every restaurant has its own branding, features, halls, payment methods, receipt text and users.

## Stack
React + TypeScript + Vite + Tailwind (PWA) · Supabase (PostgreSQL, Auth, Realtime, Storage) · Dexie (offline storage) · i18next (English / Urdu)

## First-time setup (about 20 minutes)
1. Install Node.js 20 or newer from nodejs.org.
2. Create a free project at supabase.com.
3. In Supabase open **SQL Editor** and run, in this order:
   - `supabase/schema.sql`
   - `supabase/seed_kings_pizza_hut.sql` (demo restaurant with your menu, 2 halls, 20 tables)
4. In Supabase go to **Authentication > Users > Add user**, create your login, copy the user's UUID, then run the `insert into profiles ...` lines at the bottom of the seed file.
5. In Supabase go to **Project Settings > API**, copy the URL and anon key into a new file `.env` (copy `.env.example`).
6. In this folder run:
   ```
   npm install
   npm run dev
   ```
   Open the address it prints (usually http://localhost:5173) and sign in.

## What works now (Phase 1)
Login, roles and per-page permissions, English/Urdu with right-to-left layout, orange/black theme driven by per-restaurant settings, offline write queue with auto-sync, online/offline indicator, sidebar and phone/tablet bottom bar. Other pages show "coming soon" until their phase is built.

## Folder map
- `supabase/` database schema and demo data
- `src/config/nav.ts` add a page here and it appears in the menu
- `src/lib/permissions.ts` roles and what each can open
- `src/lib/db.ts` offline queue and sync
- `src/store/session.ts` loads the user and restaurant settings, applies the theme
- `src/i18n/` English and Urdu texts

See `HANDOFF.md` for decisions and the build plan.
