import express, { NextFunction, Request, Response } from "express";
import movieRoutes from "./routes/routes";
import cors from "cors";
const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/movies", movieRoutes);

app.use((req, res, next) => {
  next(Error("Route not found"));
});

// eslint-disable-next-line @typescript-eslint/no-unused-vars
app.use((error: unknown, req: Request, res: Response, next: NextFunction) => {
  console.error(error);
  let errorMessage = "Something went wrong";
  if (error instanceof Error) {
    errorMessage = error.message;
    res.status(500).json(errorMessage);
  }
});

export default app;
