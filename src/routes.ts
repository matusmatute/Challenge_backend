import moviesRoutes from "./modules/movies/movie_routes";
import Express  from "express";


export const routes = (app : Express.Application) => {

    app.use(Express.json());
    app.use(Express.urlencoded({ extended: true }));
    app.use("/api/movies", moviesRoutes);
};
