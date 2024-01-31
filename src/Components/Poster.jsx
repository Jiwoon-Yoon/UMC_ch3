//import React from 'react'

import { useNavigate } from 'react-router-dom'

const IMG_BASE_URL ="https://image.tmdb.org/t/p/w1280/";
function Poster(props) {
  const navigate = useNavigate();

  const onClickMovieItem=()=>{
    navigate(`/movie/${props.title}`, {
      state: props,
    })
  };

    return (
      <div className="movie_container" onClick={onClickMovieItem}>
        <img src={IMG_BASE_URL+ props.poster_path} alt="포스터"></img>
        <div className="movie-info">
            <h4>{props.title}</h4>
            <span>{props.vote_average}</span>
            
        </div>
        <div className="inner-content">
              <span>{props.title}</span>
              {props.overview}
        </div>
      </div>
    
    )
  }
  

  export default Poster

  //react에서 Component를 만든 뒤에 export를 해주어야, 외부 파일에 사용할 수 있다.