import { NextFunction, Request, RequestHandler, Response } from "express";
import { Schema } from "yup";

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
  };
};

const validateData =
  (schema: Schema) => (req: Request, res: Response, next: NextFunction) => {
    schema
      .validate(req.body)
      .then(() => next())
      .catch((validationError) => {
        const errors = validationError.inner.map((error: any) => ({
          field: error.path,
          message: error.message,
        }));

        res.status(400).json({
          message: "Validation Error",
          errors: errors,
        });
      });
  };

export { errorMiddleware, routeNotFoundHandler, errorHandling, validateData };
