const express = require('express');
const router  = express.Router();
const Movie = require("../models/Movie");

/* GET home page */
router.get('/all', (req, res, next) => {
  Movie.find({}).then(data => {
    console.log(data)
    res.json({data});
  })
  .catch((err)=>{
    console.log(err)
  })
});

router.get('/one/:id', (req, res, next) => {
  Movie.findOne({id:req.body.id}).then(data => {
    console.log(data)
    res.json({data});
  })
  .catch((err)=>{
    console.log(err)
  })
});

router.get('/new', (req, res, next) => {
  const {title, year, duration, genre, rate, image_url} = req.body;
  const newMovie = {
    title: title,
    year: year,
    duration: duration,
    genre: genre,
    rate: rate,
    image_url: image_url
  }
  Movie.create(newMovie)
    .then(()=>{

    })
    .catch((err)=>{
      console.log(err)
    })
});


module.exports = router;
