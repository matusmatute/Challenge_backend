import "dotenv/config";
import mongoose from "mongoose";
import app from "./app";

const port = 5000;

const url: string =
  process.env.MONGO_CONNECTION || "mongodb://localhost:27017/movies";

mongoose
  .connect(url)
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(port, () => {
      console.log(`Server listening at http://localhost:${port}`);
    });
  })
  .catch(console.error);
