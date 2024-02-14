import Movie from "../models/Movie";

export const addMovie = async (re,res,next) => {
    const extractedToken = req.headers.authorization;
    if (!extractedToken && extractedToken.trim() === " ") {
        return res.status(404).json({message: "Token Not Found"});
    }

    console.log(extractedToken);


    let movie;
    try{
        movie = new Movie ({
            title,
            description,
            releaseDate: new Date (`${releaseDate}`),
            featured,
            actors,
            admin,
        });
        movie = await movie.save();
    } catch (err) {
        console.log(err);
    }

     if (!movie) {
        return res.status(500).json({message: "Request Failed"})
     }

     return res.status(201).json({movie});
};

export const getAllMovies = async (req,res,next) => {
    let movies;

    try {
        movies = await Movie.find();
        
    } catch (err) {
        return console.log(err)
    }

    if(!movies) {
        return res.status(500).json({message: "Request Failed"});
    }
    return res.status(200).json({movies});
};

export const getMovieById = async (req,res,next) => {
    const id = req.params.id;
    

    let movie;
    try {
        movie = await Movie.findById(id)
    } catch (err) {
        return console.log(err)
    }

    if (!movie) {
        return res.status(404).json({message: "Invalid Movie Id"});
    }

    return res.status(200).json({movie});
};