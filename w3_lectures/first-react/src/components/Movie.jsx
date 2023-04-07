import React, {useState} from 'react'

const Movie = () => {

    // const [movieTitle, setMovieTitle] = useState("")
    // const [genre, setGenre] = useState("")
    // const [releaseYear, setReleaseYear] = useState("")
    // const [ticketsSold, setTicketsSold] = useState("")

    const [movies, setMovies] = useState({
        movieTitle: "",
        genre: "",
        releaseYear: "",
        ticketsSold: "",
    })

    const [movieList, setMovieList] = useState([])

    const movieValidation = (e) => {
        let isValid = true
        if (movies.movieTitle.length < 3 || movies.genre.length < 3 || movies.releaseYear < 1900 || movies.ticketsSold <3) {
            isValid = false
            console.log("There is an error")
            return isValid
        }else{
            console.log("No Error")
            return isValid
        }
    }

    const changeHandler = (e) =>{
        setMovies({...movies, [e.target.name]: e.target.value})
    }
    const submitHandler = (e) => {
        e.preventDefault()
        let isValid = movieValidation()
        if(isValid){
            console.log('Movie: ${JSON.stringify(movies)}')
            setMovieList([...movieList, movies])
            setMovies({
                movieTitle: "",
                genre: "",
                releaseYear: "",
                ticketsSold: ""
            })
        }
    }
  return (
    <div>
        <div className="containter">
            <div className="row">
                <form action="" className="form col-4 offset-2" onSubmit={submitHandler}>
                    <div className="form-group">
                        <label htmlFor="" className="form-label">Movie Title: </label>
                        <input type="text" name="movieTitle" className="form-control" onChange={changeHandler} value={movies.movieTitle}/>
                        { // Ternary operator                   // true                                             // false
                            movies.movieTitle && movies.movieTitle.length < 3 ? <p className="text-danger">Movie Title is required and must be 3 ore more characters long</p>: ""
                        }
                    </div>
                    <div className="form-group">
                        <label htmlFor="" className="form-label">Genre: </label>
                        <input type="text" name="genre" className="form-control" onChange={changeHandler} value={movies.genre}/>
                        { // Ternary operator                   // true                                             // false
                            movies.genre && movies.genre.length < 3 ? <p className="text-danger">Genre is required and must be 3 or more characters long</p>: ""
                        }
                    </div>
                    <div className="form-group">
                        <label htmlFor="" className="form-label">Release Year: </label>
                        <input type="text" name="releaseYear" className="form-control" onChange={changeHandler} value={movies.releaseYear}/>
                    { // Ternary operator                   // true                                             // false
                            movies.releaseYear && movies.releaseYear < 1900 ? <p className="text-danger">Release Year must be after 1900</p>: null
                        }
                    </div>
                    <div className="form-group">
                        <label htmlFor="" className="form-label">Tickets Sold: </label>
                        <input type="text" name="ticketsSold" className="form-control" onChange={changeHandler} value={movies.ticketsSold}/>
                        { // Ternary operator                   // true                                             // false
                            movies.ticketsSold && movies.ticketsSold < 3 ? <p className="text-danger">No way at least 3 people didn't see it.</p>: ""
                        }
                    </div>
                    <button className="btn btn-primary mt-3">Add Movie</button>
                </form>
                <div className="col-4 offset-2">
                    {
                        movieList.map((movie, i) => (
                                <div className="card" key={i}>
                                    <div className="card-body">
                                        <h3 className="card-title">{movie.movieTitle}</h3>
                                        <p className="card-text">Genre: {movie.genre}</p>
                                        <p className="card-text">Release Year: {movie.releaseYear}</p>
                                        <p className="card-text">Tickets Sold: {movie.ticketsSold}</p>
                                    </div>
                                </div>
                            )
                        )
                    }
                </div>
            </div>
        </div>
    </div>
  )
}

export default Movie