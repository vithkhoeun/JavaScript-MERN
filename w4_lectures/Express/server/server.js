const express = require("express");

const app = express();
const port = 8000;

app.use( express.json() );
app.use( express.urlencoded({extended:true}));

const movies = [
    { id: 1, title: "Mean Girls", year: 2004 },
    { id: 2, title: "White Chicks", year: 2008 },
    { id: 3, title: "Fight Club", year: 2001 },
    { id: 4, title: "The Devil Wears Prada", year: 2005 }
];

app.get("/movie/allMovies", (req, res) => {
    res.json(movies);
});

app.get("/movie/:id", (req, res) => {
    const movie = movies.find(movie => movie.id === parseInt(req.params.id));
    res.json(movie);
});

app.post("/movie/newMovie", (req, res) => {
    movies.push(req.body);
    res.json({ msg: "ok"});
});

app.listen( port, () => console.log(`Listening on port: ${port}`) );