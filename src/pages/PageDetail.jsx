import React from 'react'
import { useParams } from 'react-router-dom'
import { useLocation } from 'react-router-dom'

const IMG_BASE_URL ="https://image.tmdb.org/t/p/w1280/";

export default function PageDetail() {
    const {title} = useParams();
    const {state} = useLocation();

    console.log(title);
    console.log(state);

  return (
    <div className="page-container">
        <div style={{display:"flex", justifyContent:'center'}}>
            <img 
            style={{width:'300px',height:'450px'}}
            src={IMG_BASE_URL+ state.poster_path} 
            alt="포스터"/>
            <div>
                <span style={{fontSize:'32px',padding:'20px',fontWeight:'bold'}}>{state.title}</span>
                <p style={{padding:'20px'}}>{state.overview}</p>
            </div>
        </div>
    </div>
  )
}
