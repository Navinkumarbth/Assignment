import axios from "axios"
import './index.css'
import { useState, useEffect } from "react"

function MovieLatest() {
  const [MovieLatest, setMovieLatest] = useState(null)

  useEffect(() => {
    axios.get('http://www.omdbapi.com/?i=tt3896198&apikey=216cc519')
      .then(res => setMovieLatest(res.data))
      .catch(err => console.error(err))
  }, [])

  return (
    <>
      <div>
        {MovieLatest ? (
          <>
            <div className="Card">
              <div>
                <img src={MovieLatest.Poster} style={{ width: "180px" }} alt="" />
              </div>
              <div className="right-nav">
                <h4>{MovieLatest.Title}</h4>
                <p>{MovieLatest.Genre}</p>
                <p>{MovieLatest.Actors}</p>
                <p>{MovieLatest.Director}</p>
                <p>Year:{MovieLatest.Year}</p>
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
export default MovieLatest;