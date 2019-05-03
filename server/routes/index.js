const express = require('express');
const router  = express.Router();
const Movie = require("../models/Movie");


router.get('/all', (req, res, next) => {
  Movie.find({}).then(data => {
    res.json({data});
  })
  .catch((err)=>{
    console.log(err)
  })
});

module.exports = router;
