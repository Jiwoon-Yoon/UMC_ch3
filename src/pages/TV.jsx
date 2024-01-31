import React from 'react'
import {dummy} from "../tvDummy";
import Poster from "../Components/Poster";

export default function TV() {
  return (
    <div className='movies-container'>
      {
        dummy.results.map((item)=>{
          return(
            <Poster
            title={item.name}
            poster_path={item.poster_path}
            vote_average={item.vote_average} 
            overview={item.overview}
            />
          )
          
        })
      }
    </div>
  )
}
