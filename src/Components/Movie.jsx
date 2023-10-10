//import React from 'react'

const IMG_BASE_URL ="https://image.tmdb.org/t/p/w1280/";
function Movie({title, poster_path, vote_average}) {
    return (
      <div className="movie_container">
        <img src={IMG_BASE_URL+poster_path} alt="영화 포스터"></img>
        <div className="movie-info">
            <h4>{title}</h4>
            <span>{vote_average}</span>
        </div>
      </div>
    )
  }
  
  export default Movie

  //react에서 Component를 만든 뒤에 export를 해주어야, 외부 파일에 사용할 수 있다.