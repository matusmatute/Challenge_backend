import * as ActionsMovie from "./movie_actions";
import { Request, Response } from "express";
import { Movie } from "./movie_model";
import { errorHandling } from "../../middleware/middleware";

export const addMovie = errorHandling(async (req: Request, res: Response) => {
  console.log(req.body);

  const { body } = req;
  const newMovie = new Movie(body);
  const createdMovie = await ActionsMovie.createMovie(newMovie);
  res.status(201).json(createdMovie);
});

export const getMovies = errorHandling(async (req: Request, res: Response) => {
  const movies = await ActionsMovie.getMovies();
  res.status(200).json(movies);
});

export const getMovieById = errorHandling(
  async (req: Request, res: Response) => {
    const movieId = req.params.id;
    const movie = await ActionsMovie.getMovieById(movieId);
    res.status(200).json(movie);
  }
);

export const updateMovie = errorHandling(
  async (req: Request, res: Response) => {
    const movieId = req.params.id;
    const updatedMovie = await ActionsMovie.updateMovie(movieId, req.body);
    res.status(200).json(updatedMovie);
  }
);

export const deleteMovie = errorHandling(
  async (req: Request, res: Response) => {
    const movieId = req.params.id;
    const deletedMovie = await ActionsMovie.deleteMovie(movieId);
    res.status(200).json(deletedMovie);
  }
);
