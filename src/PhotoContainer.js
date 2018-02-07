import React from 'react';
import Notfound from './Notfound.js';
import ImageComponent from './ImageComponent.js';
const PhotoContainer = props =>
    <div className="photo-container">
      <h2>Results</h2>
         <ul>
              <ImageComponent/>
              <Notfound/>
            </ul>
       </div>


export default PhotoContainer;
