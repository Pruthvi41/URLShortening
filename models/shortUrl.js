const mongoose = require('mongoose')

const id = require('shortid') 

const shortenedUrlSchema = new mongoose.Schema({
  regular: {
    type: String,
    required: true
  },
  short: {
    type: String,
    required: true,
    default: id.generate //shortid used to generate random short url's
  },
})

module.exports = mongoose.model('UrlShort', shortenedUrlSchema)