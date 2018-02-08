import React from 'react';
import Notfound from './Notfound.js';
import ImageComponent from './ImageComponent.js';
const PhotoContainer = props => {
  let pics = props.data.map(pic=>
    <ImageComponent url = {pic}/>
  )

    return(
    <div className="photo-container">
      <h2>Results</h2>
         <ul>
              {pics}
              <Notfound/>
          </ul>
       </div>
     );
   }

export default PhotoContainer;
