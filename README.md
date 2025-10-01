This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

## Features

This template includes:

- **Interactive API Testing**: The main page includes buttons to test the API routes directly from the browser
- **API Routes**: Example API endpoints demonstrating both static and dynamic routes
- **Modern UI**: Clean, responsive design with dark mode support

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## API Routes

This project includes example API routes that demonstrate Next.js API functionality:

### Available Endpoints

- **`GET /api`** - Returns a simple "Hello world!" message
  - Example: `http://localhost:3000/api`
  - Response: `{"message": "Hello world!"}`

- **`GET /api/[slug]`** - Dynamic route that accepts a slug parameter
  - Example: `http://localhost:3000/api/world`
  - Response: `{"message": "Hello world!"}`
  - Example: `http://localhost:3000/api/john`
  - Response: `{"message": "Hello john!"}`

### Testing the APIs

You can test these API routes in several ways:

1. **Using the Web Interface**: Visit the main page at `http://localhost:3000` and use the "Test API Routes" buttons
2. **Direct Browser Access**: Navigate directly to the API endpoints in your browser
3. **Using curl**:

   ```bash
   curl http://localhost:3000/api
   curl http://localhost:3000/api/world
   ```

### API Route Files

- `src/app/api/route.ts` - Basic API route
- `src/app/api/[slug]/route.ts` - Dynamic API route with slug parameter

For more details about Next.js API routes, see the [official documentation](https://nextjs.org/docs/app/building-your-application/routing/route-handlers).
