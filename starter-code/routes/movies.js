const express = require('express');
const Movie = require("../models/Movie.model")
// require the  model here

const router = express.Router();
//Movie

router.get('/movies', (req, res, next) => {
    Movie.find()
    .then(moviesDB=>{
        console.log("Movies shown",moviesDB);
    res.render('movies/movies',{movies: moviesDB});
    }).catch(e=> console.log("DB error",e))
    })
 //get movie id   
    router.get("/movie/:id", (req, res, next) => {
        const { id } = req.params;
        Movie.findById(id)
          .then((moviebyId) => {
            console.log("Movie Chosen", moviebyId);
            res.render("movies/movie-details", { movie: moviebyId });
          })
          .catch((error) => {
            console.log("Error while showing movie details", error);
          });
      });


//Movie Create

router.get('/movie/new', (req, res, next) => {
  // ... your code here
  res.render("movie/new")
  
});

router.post('/movie/new', (req, res, next) => {
  // ... your code here 
    // console.log(req.body);
    const { title, director , stars,image, description, showtimes } = req.body;
   
    Movie.create({title, director , stars,image, description, showtimes})
      .then(FromDB =>{ 
        console.log(`New created: ${FromDB.title}.`)
        res.redirect("/movies")
      })
      .catch(error => {
        console.log(`Error while creating a new Celeb:`, error)
        res.render("movie/new")
      });
  });
 
//Celebrities delete 


router.post('/movies/:id/delete', (req, res, next) => {
  // Iteration #5: Delete the drone
  // ... your code here
  const { id } = req.params
  Movie.findByIdAndDelete(id)
    .then(deletedCB => {
      res.redirect(`/movies`)
      console.log('deleted:', deletedCD)
    })
    .catch(e => console.log('There was an error while deleting'))
});
//Celebrities edit

router.get('/movies/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  // ... your code here
  const { id } = req.params
  Movie.findById(id)
    .then((ToEdit => {
      console.log('edited', ToEdit)
      res.render('movies/update-form', { Movie: ToEdit })
    }))
    .catch(e => next(e))
});

router.post('/movies/:id/edit', (req, res, next) => {
// Iteration #4: Update the drone
// ... your code here
const { id } = req.params
const {title, director , stars,image, description, showtimes } = req.body
Movie.findByIdAndUpdate(id, { title, director , stars,image, description, showtimes},{new: true})
  .then(updated => {
    res.redirect(`/movies`)
    console.log('update:', updated)
  })
  .catch(e => console.log('There was an error while updating'))
});


module.exports=router;