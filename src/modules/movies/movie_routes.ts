
import {  validateData } from "../../middleware/middleware";
import * as ControllerMovie from "./movie_controller";
import express from "express";
import { movieSchema } from "./movies_validates";

const router = express.Router();

router.get("/", ControllerMovie.getMovies);

router.post("/create", validateData(movieSchema) ,ControllerMovie.addMovie);

 router.get("/:id",  ControllerMovie.getMovieById);

 router.put("/:id",  validateData(movieSchema), ControllerMovie.updateMovie);

 router.delete("/:id", ControllerMovie.deleteMovie);

export default router;
