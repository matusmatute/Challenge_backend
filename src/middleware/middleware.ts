import { NextFunction, Request, RequestHandler, Response } from "express";

const errorMiddleware = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.error(err);
  let errorMessage = "Something went wrong";
  if (err instanceof Error) {
    errorMessage = err.message;
    res.status(500).json(errorMessage);
  }

  next(err);
};

const routeNotFoundHandler = (req: Request, res: Response) => {
  const statusCode = req.method === "GET" ? 404 : 405;
  res.status(statusCode).json({
    error: statusCode === 404 ? "Not Found" : "Method Not Allowed",
  });
};


const errorHandling = (fn: RequestHandler) => {
    return async (req: Request, res: Response, next: NextFunction) => {
        try {
            await fn(req, res, next);
        } catch (error) {
            res.status(400).json(error);
            next(error);
        }
    }
}

export { errorMiddleware, routeNotFoundHandler, errorHandling };
