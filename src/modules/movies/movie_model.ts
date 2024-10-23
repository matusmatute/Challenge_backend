import { Schema, model } from "mongoose";

interface Movie {
  _id: string;
  title: string;
  author: string;
  genre: string;
  synopsis: string;
  picture: string;
}
export interface MovieAPI {
  title: string;
  author: string;
  genre: string;
  synopsis: string;
  picture: string;
}

const movieSchema = new Schema<Movie>(
  {
    title: { type: String, required: true },
    author: { type: String, required: true },
    genre: { type: String, required: true },
    synopsis: { type: String, required: true },
    picture: { type: String, required: true },
  },
  { timestamps: true }
);

export const Movie = model<Movie>("Movie", movieSchema); 

