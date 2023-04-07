import React from 'react'

const Display = ({movieList}) => {
  return (
    <div className="col-4 offset-4">
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
  )
}

export default Display