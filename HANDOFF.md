# RestoPOS handoff

Read this first if you are continuing the project in a new chat or with another developer. Paste this file into the new chat.

## Product
Customizable restaurant POS and back-office, to be sold to many restaurants. First customer: Kings Pizza Hut, Swat, Pakistan. The design is based on a "Naseem Restaurant Pakpattan" POS demo video (20 pages), with extra features added.

## Decisions made (by the owner)
- Architecture: **hybrid, offline-first**: cloud database (Supabase) plus local storage on each device that syncs when online. Both online and offline must work.
- Multi-tenant: one system, many restaurants. Manual on/off switch per restaurant (`restaurants.status`); no billing in v1.
- Everything customizable per restaurant: branding, features, halls and tables, payment methods and account numbers, receipt text, delivery rule, roles and page permissions.
- Language: English and Urdu (Urdu for screens only, not on receipts). Currency Rs. (PKR). No tax.
- Theme: orange / black / yellow fast-food flyer style, demo logo for now.
- Devices: PC, Android tablet, Android phones (waiters take orders on phone and tablet). Printer: SpeedX SP-90A 80mm thermal, connected by USB to the PC. Cash drawer plugs into the printer. Kitchen uses a screen (no kitchen printer).
- Floor: General Hall and Family Hall, 10 tables each.
- Delivery: own riders on fixed salary, live tracker. Free inside 1 KM; Rs. 100 charge outside, chosen by the cashier per order (editable in settings).
- Payments: cash, JazzCash, Easypaisa, bank transfer, recorded manually with a reference (no automatic integration in v1).
- Receipt (English only): logo and brand name, short description, bold thank-you line, items with quantity and amount, total, discount, grand total, payment method and account numbers, restaurant order number and rider phone number, two end notes (Rs. 100 outside 1 KM; contact us for errors), restaurant address last. Date/time and order type are small optional lines.

## Status
- [x] Phase 1 foundation (this folder): database schema, demo data, login, roles, themes, i18n, offline queue, layout
- [ ] Phase 2: menu management (categories, items with size variants, add-ons, deals, images), halls and tables screens
- [ ] Phase 3: POS and checkout, orders list, receipt printing (80mm, browser print), cash drawer, kitchen display, waiter flow on phone/tablet, split payments
- [ ] Phase 4: delivery, riders, live GPS tracker (OpenStreetMap), cashier shifts, expenses
- [ ] Phase 5: dashboard and reports (sales, financial, print/PDF/CSV), audit log, voids and refunds with reason
- [ ] Phase 6: Super Admin panel (create restaurants, feature switches, on/off), settings screens (branding, receipt designer), polish, PWA install, deployment
- [ ] Optional modules (feature flags already in settings): inventory with recipes, suppliers and ledger, customer credit (Udhaar), loyalty, rider salary, online ordering link

## Open items
- Extra Large "Lazania Tikka 1700" on the menu is unclear; cold drink prices and sizes are unclear. Not seeded yet.
- Restaurant address for the receipt footer is empty.
- Silent printing from the browser (no dialog) needs a small print helper or WebUSB; start with the browser print dialog, set Chrome to use the SP-90A and 80mm paper.
- Offline order numbers use a per-device prefix (for example A-0042) so two devices never clash.

## Known limits
- This code was written without being run (the build environment could not install packages). Expect small fixes on first `npm install` / `npm run dev`; send the error text to Claude to fix.
