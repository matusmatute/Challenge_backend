import express from "express";
import { routes } from "./routes";
import mongoose from "mongoose";
import "dotenv/config";
import { errorMiddleware, routeNotFoundHandler } from "./middleware/middleware";
import http from "http";
import { Server } from "socket.io";
import cors from "cors";

const app = express();
app.use(cors());
const server = http.createServer(app);

export const io = new Server(server, {
  cors: {
    origin: "http://localhost:5001",
    methods: ["GET", "POST"],
  },
})

io.on("connection", (socket) => {
  console.log("a user connected");
  socket.on("disconnect", () => {
    console.log("user disconnected");
  });
});


const url: string = process.env.MONGO_CONNECTION || "";
const port: string | number = process.env.PORT || 5000;
routes(app);
app.use(express.json());
app.use(routeNotFoundHandler);
app.use(errorMiddleware);



server.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
mongoose.connect(url).then(() => {
  console.log("Connected to MongoDB");
});

export default app;
