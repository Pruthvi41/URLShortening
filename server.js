const express = require('express')
const mongoose = require('mongoose')
const UrlShort = require('./models/shortUrl')
const app = express()

mongoose.connect('mongodb://localhost/urlShortener', {
  useNewUrlParser: true, useUnifiedTopology: true
})

app.listen(process.env.PORT || 5000);
app.set('views', './frontend');
app.set('view engine', 'ejs')
app.use(express.urlencoded({ extended: false }))

app.get('/', async (req, res) => {
  const urls = await UrlShort.find()
  res.render('index', { urls: urls })
})

app.post('/urls', async (req, res) => {
  await UrlShort.create({ regular: req.body.regularUrl })
  res.redirect('/')
})

app.get('/:shortUrl', async (req, res) => {
  const shortUrl = await UrlShort.findOne({ short: req.params.shortUrl })
  if (shortUrl == null) return res.sendStatus(404)
  res.redirect(shortUrl.regular)
})

