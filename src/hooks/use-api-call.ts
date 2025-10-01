import { useState } from 'react';
import { ApiClient } from '@/lib/http-client/types';

export interface ApiCallResult {
  response: string;
  isLoading: boolean;
  callApi: (endpoint: string) => Promise<void>;
}

export function useApiCall(apiClient: ApiClient): ApiCallResult {
  const [response, setResponse] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const callApi = async (endpoint: string): Promise<void> => {
    setIsLoading(true);
    try {
      const result = await apiClient.get(endpoint);
      setResponse(formatApiResponse(endpoint, result.data));
    } catch (error) {
      setResponse(formatApiError(endpoint, error));
    } finally {
      setIsLoading(false);
    }
  };

  return { response, isLoading, callApi };
}

function formatApiResponse(endpoint: string, data: unknown): string {
  return `Response from ${endpoint}: ${JSON.stringify(data)}`;
}

function formatApiError(endpoint: string, error: unknown): string {
  return `Error calling ${endpoint}: ${error}`;
}
