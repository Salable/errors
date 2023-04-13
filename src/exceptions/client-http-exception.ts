import {IErrorBody} from './types';

enum ClientStatusCode {
  'BAD_REQUEST' = 400,
  'UNAUTHORIZED' = 401,
  'PAYMENT_REQUIRED' = 402,
  'FORBIDDEN' = 403,
  'NOT_FOUND' = 404,
  'METHOD_NOT_ALLOWED' = 405,
  'NOT_ACCEPTABLE' = 406,
  'REQUEST_TIMEOUT' = 408,
  'CONFLICT' = 409,
  'GONE' = 410,
  'LENGTH_REQUIRED' = 411,
  'PRECONDITION_FAILED' = 412,
  'PAYLOAD_TOO_LARD' = 413,
  'URI_TOO_LONG' = 414,
  'UNSUPPORTED_MEDIA_TYPE' = 415,
  'RANGE_NOT_SATISFIABLE' = 416,
  'EXPECTATION_FAILED' = 417,
  'I_AM_A_TEAPOT' = 418,
  'MISDIRECTED_REQUEST' = 421,
  'UNPROCESSABLE_CONTENT' = 422,
  'LOCKED' = 423,
  'FAILED_DEPENDENCY' = 424,
  'TOO_EARLY' = 425,
  'UPGRADE_REQUIRED' = 426,
  'PRECONDITION_REQUIRED' = 428,
  'TOO_MANY_REQUESTS' = 429,
  'REQUEST_HEADER_FIELDS_TOO_LARGE' = 431,
  'UNAVAILABLE_FOR_LEGAL_REASONS' = 451,
}
type StatusType = keyof typeof ClientStatusCode;
export class HTTPClientException extends Error {
  statusCode: number;
  description?: string;
  constructor(statusCode: StatusType, message: string, body?: IErrorBody) {
    super(message);
    this.statusCode = ClientStatusCode[statusCode];
    this.description = body?.description;
  }
}
