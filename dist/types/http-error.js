export class HttpError extends Error {
    statusCode;
    status;
    constructor(message, statusCode, status) {
        super(message);
        this.statusCode = statusCode;
        this.status = status;
        this.name = 'HttpError';
    }
}
