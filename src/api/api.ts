import globalConfig from "./config";

const createApi = (config) => {
  const GET = (endpoint: string, query?: Record<string, string>) => {
    const queryParam = query ? `?${query}` : '';
    return fetch(`${config.apiPath}${endpoint}${queryParam}`).then((resolve) => resolve.json());
  };

  const POST = (endpoint: string, body: Record<string, any>) => {
    return fetch(`${config.apiPath}${endpoint}`, {
      method: 'POST',
      body: JSON.stringify(body),
      headers: config.apiHeaders
    }).then((resolve) => resolve.json());
  };

  const PUT = (endpoint: string, body: Record<string, any>) => {
    return fetch(`${config.apiPath}${endpoint}`, {
      method: 'PUT',
      body: JSON.stringify(body),
      headers: config.apiHeaders,
    })
      .then((response) => response.json());
  };

  const PATCH = (endpoint: string, body: Record<string, any>) => {
    return fetch(`${config.apiPath}${endpoint}`, {
      method: 'PATCH',
      body: JSON.stringify(body),
      headers: config.apiHeaders,
    })
      .then((response) => response.json());
  };

  const DELETE = (endpoint: string) => {
    return fetch(`${config.apiPath}${endpoint}`, {
      method: 'DELETE',
    });
  };

  return {
    GET,
    POST,
    PUT,
    PATCH,
    DELETE
  };
};

export const api = createApi(globalConfig);
