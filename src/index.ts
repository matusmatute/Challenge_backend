import express from "express";
import { routes } from "./routes";
import mongoose from "mongoose";
import "dotenv/config";
import { errorMiddleware, routeNotFoundHandler } from "./middleware/middleware";

const app = express();
const url: string = process.env.MONGO_CONNECTION || "";
const port: string | number = process.env.PORT || 5000;

routes(app);
app.use(express.json());
app.use(routeNotFoundHandler);
app.use(errorMiddleware);
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
mongoose.connect(url).then(() => {
  console.log("Connected to MongoDB");
});

export default app;
