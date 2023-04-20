export class HttpClient {
  async get(path: string) {
    const response = await fetch(path);
    if (!response.ok) {
      throw new Error(`HTTP ${response.status} - ${response.statusText}`);
    }
    return response.json();
  }
}
