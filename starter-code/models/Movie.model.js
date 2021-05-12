// models/Book.model.js
//Importaciones
const mongoose = require('mongoose');
const { Schema, model } = mongoose;


//Schema
const movieSchema = new Schema(
  {
    title: String,
    director: String,
    stars: [String],
    image: String,
    description: String,
    showtimes: [String]
  },
  {
    timestamps: true
  }
);
//modelo
//????????????????

//Exportacione
module.exports =model("Movie",movieSchema)
title, director , stars,image, description, showtimes