import { APIError } from '../api/types/errors';

export function apiHasError(response: any): response is APIError {
  return response && response.reason;
}
