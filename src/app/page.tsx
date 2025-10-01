"use client";

import Image from "next/image";
import { FetchApiClient } from '@/lib/http-client/fetch-client';
import { useApiCall } from '@/hooks/use-api-call';
import { ApiTestPanel } from '@/components/api-test-panel';
import { Footer } from '@/components/footer';
import { API_ENDPOINTS, BUTTON_STYLES, EXTERNAL_LINKS } from '@/config/constants';

const apiClient = new FetchApiClient();

const API_TEST_ENDPOINTS = [
  { path: API_ENDPOINTS.ROOT, label: 'Test /api route' },
  { path: API_ENDPOINTS.WORLD, label: 'Test /api/world route' }
];

const LOGO_DIMENSIONS = { width: 180, height: 38 };
const VERCEL_ICON_SIZE = 20;

export default function Home() {
  const { response, isLoading, callApi } = useApiCall(apiClient);

  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={LOGO_DIMENSIONS.width}
          height={LOGO_DIMENSIONS.height}
          priority
        />
        <ol className="font-mono list-inside list-decimal text-sm/6 text-center sm:text-left">
          <li className="mb-2 tracking-[-.01em]">
            Get started by editing{" "}
            <code className="bg-black/[.05] dark:bg-white/[.06] font-mono font-semibold px-1 py-0.5 rounded">
              src/app/page.tsx
            </code>
            .
          </li>
          <li className="mb-2 tracking-[-.01em]">
            Try the API routes in{" "}
            <code className="bg-black/[.05] dark:bg-white/[.06] font-mono font-semibold px-1 py-0.5 rounded">
              src/app/api/
            </code>{" "}
            using the buttons below.
          </li>
          <li className="tracking-[-.01em]">
            Save and see your changes instantly.
          </li>
        </ol>

        <ApiTestPanel
          onTestApi={callApi}
          isLoading={isLoading}
          response={response}
          endpoints={API_TEST_ENDPOINTS}
        />

        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <a
            className={BUTTON_STYLES.PRIMARY}
            href={EXTERNAL_LINKS.DEPLOY}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="dark:invert"
              src="/vercel.svg"
              alt="Vercel logomark"
              width={VERCEL_ICON_SIZE}
              height={VERCEL_ICON_SIZE}
            />
            Deploy now
          </a>
          <a
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto md:w-[158px]"
            href={EXTERNAL_LINKS.DOCS}
            target="_blank"
            rel="noopener noreferrer"
          >
            Read our docs
          </a>
        </div>
      </main>
      <Footer />
    </div>
  );
}
