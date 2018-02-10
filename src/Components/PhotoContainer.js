import React from 'react';
import ImageComponent from './ImageComponent.js';
import Notfound from './Notfound.js';
const PhotoContainer = props => {

  let pics = props.data.map((links,index)=>
    <ImageComponent url = {links} key={index}/>
  )
  if (pics.length === 0){
    return(<Notfound/ >)
  }
    else{
    return(
    <div className="photo-container">
      <h2>Results</h2>
         <ul>
              {pics}
          </ul>
       </div>
     );
   }
}
export default PhotoContainer;
