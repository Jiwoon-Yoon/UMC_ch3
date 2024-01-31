import React from 'react'


export default function Ad(props) {

if (!props){
    return null;
}
    
 
  return (
    <div className="Ad-container">
        <img src='ad.svg' />
    </div>
  )

}
