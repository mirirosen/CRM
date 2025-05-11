# CRM System

A modern CRM system built with Next.js, TypeScript, and Prisma.

## Features

- Lead management with status tracking
- Lead to contact conversion
- Contact management
- Conversation history
- Real-time chat interface

## Tech Stack

- Next.js 14 (App Router)
- TypeScript
- Prisma (PostgreSQL)
- Tailwind CSS

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up your database:
   - Create a PostgreSQL database
   - Copy `.env.example` to `.env` and update the `DATABASE_URL`

4. Run database migrations:
   ```bash
   npx prisma migrate dev
   ```

5. Start the development server:
   ```bash
   npm run dev
   ```

## Project Structure

```
app/
├── leads/              # Lead management
├── contacts/           # Contact management
├── conversations/      # Chat interface
└── api/               # API routes
components/            # Reusable components
prisma/               # Database schema and migrations
```

## API Routes

### Leads
- `GET /api/leads` - List all leads
- `POST /api/leads` - Create a new lead
- `PATCH /api/leads/:id` - Update a lead
- `POST /api/leads/:id/convert` - Convert lead to contact

### Contacts
- `GET /api/contacts` - List all contacts
- `GET /api/contacts/:id` - Get contact details

### Conversations
- `GET /api/conversations/:id` - Get conversation messages
- `POST /api/conversations/:id` - Add a new message

## Development

- Run tests: `npm test`
- Build for production: `npm run build`
- Start production server: `npm start`

## License

MIT
