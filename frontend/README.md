# FlowSync

> Modern workflow automation platform inspired by enterprise integration systems.

![Dashboard Preview](https://via.placeholder.com/1200x600?text=FlowSync+Dashboard)

---

## Overview

FlowSync is a SaaS-inspired platform designed to simulate how modern integration and automation systems work in real-world enterprise environments.

The project focuses on:
- API integrations
- workflow automation
- real-time monitoring
- scalable frontend architecture
- modern product-oriented UI/UX

Built to demonstrate full-stack engineering skills using modern technologies and clean software architecture patterns.

---

# Features

## Dashboard Analytics
- Active integrations overview
- Requests monitoring
- Success rate tracking
- Workflow metrics
- Interactive charts using Recharts

---

## Integrations Management

Monitor integrations such as:
- GitHub API
- OpenAI API
- Stripe
- Slack

Features:
- Connection status
- Sync state
- Last activity tracking

---

## Workflow Builder

Simple automation workflow system with:
- Triggers
- Actions
- Workflow visualization

Example:

```txt
Trigger:
New User Registered

Actions:
→ Send Webhook
→ Notify Slack
→ Generate AI Summary
```

---

## Live Logs

Simulated real-time activity feed:

```txt
[12:01] Webhook received
[12:02] AI processed request
[12:02] CRM synchronized
```

---

# Tech Stack

## Frontend
- React
- TypeScript
- Tailwind CSS
- TanStack Query
- Zustand
- Framer Motion
- Recharts

---

## Backend
- Node.js
- Express
- Prisma ORM
- SQLite

---

# Architecture

```txt
frontend/
├── components/
├── pages/
├── hooks/
├── services/
├── store/
└── types/

backend/
├── controllers/
├── services/
├── routes/
├── prisma/
└── lib/
```

---

# UI/UX Focus

FlowSync was designed with strong emphasis on:
- modern SaaS aesthetics
- responsive layouts
- smooth animations
- scalable component architecture
- polished user experience
- enterprise dashboard design patterns

---

# Installation

## Clone repository

```bash
git clone https://github.com/your-username/flowsync.git
```

---

## Frontend setup

```bash
cd frontend
npm install
npm run dev
```

---

## Backend setup

```bash
cd backend
npm install
npx prisma migrate dev
npm run dev
```

---

# Environment Variables

## Backend `.env`

```env
DATABASE_URL="file:./dev.db"
PORT=3000
```

---

# Future Improvements

- Real WebSocket communication
- Authentication system
- Multi-tenant architecture
- GraphQL support
- AI Agents integration
- Drag-and-drop workflow builder
- Advanced monitoring system

---

# Inspiration

Inspired by modern workflow automation and integration platforms such as:
- Zapier
- n8n
- Make
- Enterprise API orchestration systems

---

# Deployment

## Frontend
- Vercel

## Backend
- Railway

---

# Goals

This project was created to demonstrate:
- modern frontend engineering
- API integration patterns
- scalable architecture
- clean UI/UX implementation
- product-oriented development mindset

---

# Author

Lucas Flach Borges

- GitHub: https://github.com/iamdevlucas123
- LinkedIn: https://www.linkedin.com/in/lucas-borges-1a723b180/