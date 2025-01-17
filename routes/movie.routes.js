const express = require('express');
const Movie = require('../models/Movie.model');
const router = express.Router();

/* GET home page */
router.get('/movies', async (req, res, next) => {
    try
    {
        const movies = await Movie.find();
        console.log("movies from db", movies);
        res.render('movies/movies-list', {movies});
    }catch(err) {
        res.send(err)
    }
});
router.get('/movie/:id', async (req, res, next) => {
    try
    {
        const movie = await Movie.findById(req.params.id);
        console.log("movie", movie);
        res.render('movies/movie-details', movie);
    }catch(err) {
        res.send(err)
    }
});
module.exports = router;
