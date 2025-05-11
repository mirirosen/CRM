# CRM System

A modern Customer Relationship Management (CRM) system built with Next.js, TypeScript, and Prisma.

## Features

- **Leads Management**
  - Track potential customers
  - Convert leads to contacts
  - Status tracking and updates

- **Contacts Management**
  - Store and manage customer information
  - View contact history
  - Track interactions

- **Conversations**
  - View all customer conversations
  - Track communication history
  - Manage customer interactions

## Tech Stack

- **Frontend**: Next.js 14 with App Router
- **Styling**: Tailwind CSS
- **Database**: PostgreSQL with Prisma ORM
- **Language**: TypeScript

## Getting Started

### Prerequisites

- Node.js 18+ 
- PostgreSQL
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/mirirosen/CRM.git
   cd CRM
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Set up your environment variables:
   ```bash
   cp .env.example .env
   ```
   Update the `.env` file with your database credentials.

4. Set up the database:
   ```bash
   npx prisma migrate dev
   ```

5. Run the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

6. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
src/
├── app/              # Next.js app router pages
├── components/       # Reusable React components
├── types/           # TypeScript type definitions
└── prisma/          # Database schema and migrations
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
