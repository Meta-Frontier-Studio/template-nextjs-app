function getEnvVariable(key: string, fallback?: string): string {
  const value = process.env[key];

  if (!value && !fallback) {
    throw new Error(`Missing required environment variable: ${key}`);
  }

  return value || fallback!;
}

export const env = {
  appUrl: getEnvVariable('NEXT_PUBLIC_APP_URL', 'http://localhost:3000'),
  appName: getEnvVariable('NEXT_PUBLIC_APP_NAME', 'Template Test App'),
  appDescription: getEnvVariable('NEXT_PUBLIC_APP_DESCRIPTION', 'A Next.js template application with clean architecture'),
} as const;
