type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE';

interface FetchOptions {
  method?: HttpMethod;
  headers?: HeadersInit;
  body?: any | null;
}

const base_url = process.env.NEXT_PUBLIC_API_BASE_URI

async function apiFetch<T>(url: string, options: FetchOptions = {}): Promise<T> {
  const { method = 'GET', headers = {}, body = null } = options;

  const api_url = `${base_url}${url}`


  console.log("request in=>>>>>>>>>>>>>>> ", {options, api_url})

  const response = await fetch(api_url, {
    method,
    cache:'no-cache',
    headers: {
      Authorization:`${process.env.NEXT_PUBLIC_API_BASIC_AUTH}`,
      'Content-Type': 'application/json',
      ...headers,
    },
    body: method !== 'GET' ? body : null,
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || 'Something went wrong');
  }


  console.log("response out=>>>>>>>>>>>>>>> ", {response})

  return response.json();
}

export default apiFetch;