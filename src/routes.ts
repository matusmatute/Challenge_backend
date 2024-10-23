import moviesRoutes from "./modules/movies/movie_routes";
import { Express } from "express";

export const routes = (app: Express) => {
    app.use("/api/movies", moviesRoutes);
};
