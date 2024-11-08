import { io } from "./../index";

export const notifyNewMovie = (movieData ) => {
io.emit("newMovie", movieData);
}

