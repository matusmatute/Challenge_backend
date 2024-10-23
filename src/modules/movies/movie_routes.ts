
import * as ControllerMovie from "./movie_controller";
import express from "express";

const router = express.Router();

router.get("/", ControllerMovie.getMovies);

router.post("/create", ControllerMovie.addMovie);

 router.get("/:id",  ControllerMovie.getMovieById);

 router.put("/:id",  ControllerMovie.updateMovie);

 router.delete("/:id", ControllerMovie.deleteMovie);

export default router;
