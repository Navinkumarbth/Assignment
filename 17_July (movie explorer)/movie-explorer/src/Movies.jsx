import axios from "axios"
import './index.css'
import { useState, useEffect } from "react"

function Movies() {
  const [movie, setMovie] = useState(null)

  useEffect(() => {
    axios.get('http://www.omdbapi.com/?i=tt3896198&apikey=216cc519')
      .then(res => setMovie(res.data))
      .catch(err => console.error(err))
  }, [])

  return (
    <>
      <div>
        {movie ? (
          <>
            <div className="Card">
              <div>
                <img src={movie.Poster} style={{ width: "180px" }} alt="" />
              </div>
              <div className="right-nav">
                <h4>{movie.Title}</h4>
                <p>{movie.Genre}</p>
                <p>{movie.Actors}</p>
                <p>{movie.Director}</p>
                <p>Year:{movie.Year}</p>
              </div>
            </div>
          </>
        ) : (
          <h4><i class="fa-solid fa-spinner"></i></h4>
        )}
      </div>


    </>
  )
}
export default Movies;