import React from 'react'
import {dummy} from "../movieDummy";
import Poster from "../Components/Poster";

export default function Movies() {
  return (
    <div className="movies-container">
        { 
            dummy.results.map((item)=>{
            return(
                <Poster
                title={item.title}
                poster_path={item.poster_path}
                vote_average={item.vote_average} 
                overview={item.overview}
                />
            )
            })
            //movie_Dummy에서 Movie로 정보 가져오는 코드.
        }   
    </div>
  )
}
