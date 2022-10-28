class AppError {
    message;
    statusCode;

    constructor(message, statusCode = 400) {
        if (error) {
            this.message = message;
            this.statusCode = statusCode;
        }
    }
}

module.exports = AppError;