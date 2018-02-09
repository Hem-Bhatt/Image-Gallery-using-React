import React from 'react';

import ImageComponent from './ImageComponent.js';
const PhotoContainer = props => {

  let pics = props.data.map(data=>
    <ImageComponent url = {data}/>
  )

    return(
    <div className="photo-container">
      <h2>Results</h2>
         <ul>
              {pics}

          </ul>
       </div>
     );
   }

export default PhotoContainer;
