import express from "express";
import { addMovie, getAllMovies, getMovieById } from "../controllers/movie.controller";
import Movie from "../models/Movie";
const movieRouter = express.Router();

movieRouter.get("/", getAllMovies);
movieRouter.post("/:id", getMovieById);
movieRouter.post("/", addMovie);

export default movieRouter;
