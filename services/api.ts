type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE';

interface FetchOptions {
  method?: HttpMethod;
  headers?: HeadersInit;
  body?: any | null;
}

const base_url = process.env.NEXT_PUBLIC_BASE_URL

async function apiFetch<T>(url: string, options: FetchOptions = {}): Promise<T> {
  const { method = 'GET', headers = {}, body = null } = options;

  const api_url = `${base_url}/${url}`

  const response = await fetch(api_url, {
    method,
    cache:'no-cache',
    headers: {
      Authorization:`${process.env.NEXT_PUBLIC_BASIC_AUTH}`,
      'Content-Type': 'application/json',
      ...headers,
    },
    body: method !== 'GET' ? body : null,
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || 'Something went wrong');
  }

  return response.json();
}

export default apiFetch;