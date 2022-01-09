export class ResponseError extends Error {
  public response: Response;

  constructor(response: Response) {
    super(response.statusText);
    this.response = response;
  }
}
/**
 * Parses the JSON returned by a network request
 *
 * @param  {object} response A response from a network request
 *
 * @return {object}          The parsed JSON from the request
 */
function parseJSON(response: Response) {
  if (
    response.status === 202 ||
    response.status === 204 ||
    response.status === 205
  ) {
    return null;
  }
  return response.json();
}

/**
 * Checks if a network request came back fine, and throws an error if not
 *
 * @param  {object} response   A response from a network request
 *
 * @return {object|undefined} Returns either the response, or throws an error
 */
function checkStatus(response: Response) {
  const contentType: string | null = response.headers.get('content-type');
  if (response.status >= 200 && response.status < 300 && response.ok) {
    return response;
  }
  if (response.status === 401) {
    localStorage.setItem('user', '{}');
    window.location.replace('/auth/login');
  }
  if (!response.ok) {
    if ((contentType || '').includes('application/json')) {
      return response.json().then(d => {
        // Response field error to render in field
        const newError = new Error(
          JSON.parse(d)?._error?.message || d?.message?.message || d?.message,
        );
        return Promise.reject(newError);
      });
    }
  }
  const error = new ResponseError(response);

  error.response = response;
  throw error;
}

/**
 * Requests a URL, returning a promise
 *
 * @param  {string} url       The URL we want to request
 * @param  {object} [options] The options we want to pass to "fetch"
 *
 * @return {object}           The response data
 */
export async function request(
  url: string,
  options?: RequestInit,
): Promise<{} | { err: ResponseError }> {
  const fetchResponse = await fetch(url, options)
    .then(checkStatus)
    .then(parseJSON);

  return fetchResponse;
}
