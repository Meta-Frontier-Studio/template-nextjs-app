export interface ApiResponse<T = unknown> {
  data: T;
}

export interface ApiClient {
  get<T>(endpoint: string): Promise<ApiResponse<T>>;
}
