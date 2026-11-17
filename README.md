# Kätälyst: Band Website & Ticketing

Official website and ticketing system for **Kätälyst**, a Finnish rock/metal band. Built for a real client as a freelance project. **Work in progress.**


## Tech stack

- **Frontend:** React, Vite, React Router, Material UI
- **Backend:** Node.js, Express, MongoDB Atlas
- **Payments:** Stripe Checkout (test mode)
- **Deployment:** Render, single service (Express serves the React build)

## Run locally

```bash
git clone https://github.com/gundiok/concert-ticket-site.git
cd concert-ticket-site
npm install
npm install --prefix backend
npm install --prefix frontend
npm run dev
```

Needs a `.env` with your MongoDB URI, JWT secret and Stripe test key.

## Status

- [x] Band and event pages, responsive layout
- [x] REST API with MongoDB, deployed on Render
- [x] Stripe checkout and order flow
- [x] QR-code tickets
- [x] Admin login (JWT) and sales overview
- [ ] Door check-in by scanning QR codes