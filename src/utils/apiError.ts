export class ApiError extends Error {
  statusCode: number;
  rawErrors: string[] = [];
  constructor(statusCode: number, message: string, rawErrors?: string[]) {
    super(message);
    this.statusCode = statusCode;
    if (rawErrors) this.rawErrors = rawErrors;
    Error.captureStackTrace(this, this.constructor);
  }
}

// new optional class for bad requests
export class BadRequestError extends ApiError {
  constructor(message: string, errors: string[]) {
    super(400, message, errors);
  }
}