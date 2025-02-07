import { Request, Response, NextFunction } from "express";

const sendError = (err: any, req: Request, res: Response, next: NextFunction): void => {
    if (err.isOperational) {
        res.status(err.statusCode).json({
            status: err.status,
            message: err.message,
        });
    } else {
        console.error('ERROR 💥', err);

        res.status(err.statusCode || 500).json({
            status: "error",
            error: err,
            message: err.message,
            stack: err.stack,
        });
    }
};

export default sendError;