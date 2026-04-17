# Fiscal Flow

A modern personal finance tracking application built with React, TypeScript, and Cloudflare Workers. Track expenses, manage budgets, and gain insights into your spending habits with a beautiful, responsive interface.

[![Deploy to Cloudflare](https://deploy.workers.cloudflare.com/button)](https://deploy.workers.cloudflare.com/?url=https://github.com/chokle/fiscal-flow)

## Features

- Real-time expense tracking and categorization
- Interactive dashboards with charts and analytics
- Dark/light theme support
- Mobile-responsive design
- Edge-deployed API with Cloudflare Workers
- Type-safe codebase with TypeScript

## Tech Stack

- **Frontend**: React 18, TypeScript, Tailwind CSS, Framer Motion
- **UI Components**: shadcn/ui (Radix UI primitives)
- **State Management**: Zustand, TanStack React Query
- **Charts**: Recharts
- **Backend**: Cloudflare Workers, Hono
- **Build Tool**: Vite
- **Runtime**: Bun

## Getting Started

### Prerequisites

- [Bun](https://bun.sh/) (v1.0+)
- [Wrangler CLI](https://developers.cloudflare.com/workers/wrangler/) for Cloudflare deployment

### Installation

```bash
git clone <repository-url>
cd fiscal-flow
bun install
```

### Development

```bash
bun run dev
```

The app will be available at `http://localhost:3000`.

### Build

```bash
bun run build
```

### Testing

```bash
bun run test
bun run test:watch
bun run test:coverage
```

### Linting

```bash
bun run lint
```

## Project Structure

```
src/
├── components/       # UI components and layouts
│   ├── ui/          # shadcn/ui base components
│   └── layout/      # Layout wrappers
├── hooks/           # Custom React hooks
├── lib/             # Utilities and helpers
├── pages/           # Page components
└── main.tsx         # App entry point

worker/
├── index.ts         # Worker entry point
├── userRoutes.ts    # API route definitions
└── types/           # Worker type definitions
```

## API

The backend runs on Cloudflare Workers with Hono. Add routes in `worker/userRoutes.ts`:

```typescript
app.get('/api/example', (c) => c.json({ success: true, data: {} }));
```

Built-in endpoints:

- `GET /api/health` — Health check
- `POST /api/client-errors` — Client error reporting

## Deployment

[![Deploy to Cloudflare](https://deploy.workers.cloudflare.com/button)](https://deploy.workers.cloudflare.com/?url=https://github.com/chokle/fiscal-flow)

### Manual Deployment

```bash
bun run deploy
```

This builds the frontend and deploys everything to Cloudflare Workers using Wrangler.

## License

MIT