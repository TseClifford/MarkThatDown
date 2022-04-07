MarkThatDown
=========

MarkThatDown is a simple notebook SPA that allows users to create, maintain and manage their notes in markdown.\
Built with React, Node, Express, Postgres, and Tailwind CSS.

https://markthatdown.netlify.app/ \
(Please use `TseClifford@gmail.com` as login email for demo, password authentication is disabled)

[![Netlify Status](https://api.netlify.com/api/v1/badges/92537b8d-d0c6-4052-8a44-bf68427f0f86/deploy-status)](https://app.netlify.com/sites/markthatdown/deploys)

## Team
[<img src='https://img.shields.io/badge/Github-TseClifford-blue?style=flat-square&logo=github'>](https://github.com/TseClifford)
[<img src='https://img.shields.io/badge/Github-dotubutis-blue?style=flat-square&logo=github'>](https://github.com/dotubutis)[<img src='https://img.shields.io/badge/Github-alparslanustaa-blue?style=flat-square&logo=github'>](https://github.com/alparslanustaa)

## Final Product

### Desktop
!["Desktop"](./frontend/public/screenshots/desktop-demo.gif)
### Mobile
!["Mobile"](./frontend/public/screenshots/mobile-demo.gif)

## Features

* Users are able to:
    * Create new notebooks and notes
    * Edit notebook and note names
    * Delete notebook and notes.
    * Update and save note contents

* Interface:
  * Optimized for mobile view-port, a single section is rendered with the ability to toggle between notebooks/note lists and editor
  * Editor component view can toggle between editor, preview or split mode
  * Notes are saved automatically when selecting a different note within the same notebook

## Setup

### Backend - Running Express Server

1. Enter backend subdirectory `cd backend`
2. Create `.env` based on `.env.example` with database credentials
3. Install dependencies with `npm install`.
4. Reset database schema and seed data with `npm run db:reset`
5. Start server `npm start`

### Frontend - Running React Client

1. Enter frontend subdirectory `cd frontend`
2. Install dependencies with `npm install`.
3. Start client `npm start`

## Dependencies

- Node 14.x or above
- NPM 5.x or above