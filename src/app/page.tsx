import type { Metadata } from 'next';
import { env } from '@/config/env';

import { HomePage } from './home-page';

export function generateMetadata(): Metadata {
  return {
    title: env.appName,
    description: env.appDescription,
    metadataBase: new URL(env.appUrl),
    openGraph: {
      title: env.appName,
      description: env.appDescription,
      url: env.appUrl,
      siteName: env.appName,
      type: 'website',
    },
  };
}

export default function Home() {
  return <HomePage />;
}
