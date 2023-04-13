import {IErrorBody} from './types';

enum ServerStatusCode {
  'INTERNAL_SERVER_ERROR' = 500,
  'NOT_IMPLEMENTED' = 501,
  'BAD_GATEWAY' = 502,
  'SERVICE_UNAVAILABLE' = 503,
  'GATEWAY_TIMEOUT' = 504,
  'HTTP_VERSION_NOT_SUPPORTED' = 505,
  'VARIANT_ALSO_NEGOTIATES' = 506,
  'INSUFFICIENT_STORAGE' = 507,
  'LOOP_DETECTED' = 508,
  'NOT_EXTENDED' = 510,
  'NETWORK_AUTHENTICATION_REQUIRED' = 511,
}
export class HTTPServerException extends Error {
  statusCode: number;
  description?: string;
  constructor(statusCode: keyof typeof ServerStatusCode, message: string, body?: IErrorBody) {
    super(message);
    this.statusCode = ServerStatusCode[statusCode];
    this.description = body?.description;
  }
}
