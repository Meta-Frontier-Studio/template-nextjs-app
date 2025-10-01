import { ApiClient, ApiResponse } from './types';

export class FetchApiClient implements ApiClient {
  async get<T>(endpoint: string): Promise<ApiResponse<T>> {
    const response = await fetch(endpoint);
    const data = await response.json();
    return { data };
  }
}
