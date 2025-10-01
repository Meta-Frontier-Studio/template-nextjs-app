"use client";

import { Button } from './button';
import { BUTTON_STYLES } from '@/config/constants';

interface ApiTestPanelProps {
  onTestApi: (endpoint: string) => void;
  isLoading: boolean;
  response: string;
  endpoints: Array<{ path: string; label: string }>;
}

export function ApiTestPanel({ onTestApi, isLoading, response, endpoints }: ApiTestPanelProps) {
  return (
    <div className="w-full max-w-lg space-y-4 border border-gray-200 dark:border-gray-700 rounded-lg p-6 bg-white/50 dark:bg-black/20">
      <h2 className="text-xl font-semibold text-center mb-4">Test API Routes</h2>

      <div className="flex gap-4 items-center flex-col sm:flex-row">
        {endpoints.map(({ path, label }) => (
          <Button
            key={path}
            onClick={() => onTestApi(path)}
            disabled={isLoading}
            className={BUTTON_STYLES.SECONDARY}
          >
            {isLoading ? 'Loading...' : label}
          </Button>
        ))}
      </div>

      {response && (
        <div className="mt-4 p-4 bg-black/[.05] dark:bg-white/[.06] rounded-lg border">
          <p className="text-sm font-mono text-gray-800 dark:text-gray-200 break-words">{response}</p>
        </div>
      )}
    </div>
  );
}
