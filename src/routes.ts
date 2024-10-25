import moviesRoutes from "./modules/movies/movie_routes";
import Express  from "express";
import cors from "cors";

export const routes = (app : Express.Application) => {
    app.use(cors());
    app.use(Express.json());
    app.use(Express.urlencoded({ extended: true }));
    app.use("/api/movies", moviesRoutes);
};
