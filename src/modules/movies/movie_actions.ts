import { Movie, MovieAPI } from "./movie_model";
import { handleErrors } from "../../utils/errorHandling";

export const getMovies = () => handleErrors(Movie.find());

export const createMovie = (data: MovieAPI) => handleErrors(Movie.create(data));

export const getMovieById = (id: string) => handleErrors(Movie.findById(id));

export const updateMovie = (id: string, data: MovieAPI) =>
  handleErrors(Movie.findByIdAndUpdate({ _id: id }, data, { new: true }));

export const deleteMovie = (id: string) =>
  handleErrors(Movie.findByIdAndDelete(id));
