import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import data from './disney.json'

const port = process.env.PORT || 8084
const app = express()

// Add middlewares to enable cors and json body parsing
app.use(cors())
app.use(bodyParser.json())

// ROUTES

//welcome page
app.get('/', (req, res) => {
  res.send('DISNEY TIME')
})

// all movies
app.get('/movies', (req, res) => {
  res.json(data)
})

//movie name
app.get('/movies/:movie', (req, res) => {
  const movie = req.params.movie
  const oneMovie = data.filter((item) => item.movie_title === movie)

  res.json(oneMovie)
})

//genre 
app.get('/movies/:genre', (req, res) => {
  const genre = req.params.genre
  const oneGenre = data.filter((item) => item.genre === genre)

  res.json(oneGenre)
})


//full release date 
app.get('/movies/:release', (req, res) => {
  const release = req.params.release
  const realseDate = data.filter((item) => item.release_date === release)

  res.json(realseDate)
})





/*
app.get('/nominations/:year', (req, res) => {
  const year = req.params.year
  const showWon = req.query.won
  let  nominationsFromYear = data.filter((item) => item.year_award === +year)

  if (showWon) {
    nominationsFromYear = nominationsFromYear.filter((item) => item.win)
  }
  res.json(nominationsFromYear)
})

*/


// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`)
})




//////////

//app.get('/users', (req, res) => {
  //response.json(users)
//})

//app.get('/users/:id', (req, res) => {
  //const { id } = request.params;
  //const user = users.find(user => user.id === +id);
  //console.log(request.params.id)
  //response.json(user);
//})



// ADD A IF STATEMENT FOR EACH RESPONSE