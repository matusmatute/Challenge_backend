"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteMovie = exports.updateMovie = exports.getMovieById = exports.listMovies = exports.createMovie = exports.movieValidate = exports.getMovies = void 0;
const movie_1 = __importDefault(require("../models/movie"));
const schema = __importStar(require("yup"));
/**
 ** Retrieves a list of all movies from the database and returns them in the response.
 */
const getMovies = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const movies = yield movie_1.default.find().exec();
        res.status(200).json(movies);
    }
    catch (error) {
        next(error);
    }
});
exports.getMovies = getMovies;
/**
 ** Validates and creates a new movie in the database.
 */
exports.movieValidate = schema.object({
    title: schema.string().required(),
    author: schema.string().required(),
    genre: schema.string().required(),
    synopsis: schema.string().optional(),
    picture: schema.string().optional(),
});
/**
 ** Creates a new movie and adds it to the database.
 */
const createMovie = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { title, author, genre, synopsis, picture } = req.body;
    try {
        yield exports.movieValidate.validate(req.body);
        const newMovie = yield movie_1.default.create(exports.movieValidate.cast({ title, author, genre, synopsis, picture }));
        res.status(201).json(newMovie);
    }
    catch (error) {
        next(error);
    }
    ;
});
exports.createMovie = createMovie;
/**
 ** Retrieves a list of movies from the database based on the provided search criteria and returns them in the response.
 */
const listMovies = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { title, author, genre } = req.query;
        const query = Object.assign(Object.assign(Object.assign({}, (title && { title: new RegExp(title.toString(), 'i') })), (author && { author: new RegExp(author.toString(), 'i') })), (genre && { genre: new RegExp(genre.toString(), 'i') }));
        const movies = yield movie_1.default.find(query).exec();
        res.status(200).json(movies);
    }
    catch (error) {
        next(error);
    }
});
exports.listMovies = listMovies;
/**
 ** Retrieves a single movie from the database based on the provided id and returns it in the response.
 */
const getMovieById = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    try {
        const movie = yield movie_1.default.findById(id).exec();
        if (!movie)
            throw new Error("Movie not found");
        res.status(200).json(movie);
    }
    catch (error) {
        next(error);
    }
});
exports.getMovieById = getMovieById;
/**
 * *Updates a single movie in the database with the provided information and returns the updated movie in the response.
 */
const updateMovie = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const { title, author, genre, synopsis, picture } = req.body;
    try {
        yield exports.movieValidate.validate(req.body);
        const movie = yield movie_1.default.findById(id).exec();
        if (!movie)
            throw new Error("Movie not found");
        movie.title = title;
        movie.author = author;
        movie.genre = genre;
        movie.synopsis = synopsis;
        movie.picture = picture;
        const updatedMovie = yield movie.save();
        res.status(200).json(updatedMovie);
    }
    catch (error) {
        next(error);
    }
});
exports.updateMovie = updateMovie;
/**
 * *Deletes a single movie from the database based on the provided id and returns the deleted movie in the response.
 */
const deleteMovie = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    try {
        const movie = yield movie_1.default.findById(id).exec();
        if (!movie)
            throw new Error("Movie not found");
        yield movie.deleteOne();
        res.status(200).json(movie);
    }
    catch (error) {
        next(error);
    }
});
exports.deleteMovie = deleteMovie;
