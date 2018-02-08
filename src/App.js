import React, { Component } from 'react';
import {
  BrowserRouter,
  Route
} from 'react-router-dom';
import axios from 'axios';
import NavMenu from './Components/NavMenu.js';
import PhotoContainer from './Components/PhotoContainer.js';
import apiKey from './config.js'
import SearchForm from './Components/SearchForm.js'



class App extends Component {
  constructor(){
    super();
    this.state = {
      pics:[]
    };
  }

componentWillMount(){
  axios.get('https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=f61852d3561fc798e108a8dd505f5a0d&tags=dogs&per_page=24&format=json&nojsoncallback=1')
    .then(response=> {
      var urlArray = response.data.photos.photo.map(pic=>`https://farm${pic.farm}.staticflickr.com/${pic.server}/${pic.id}_${pic.secret}.jpg`);
      // console.log(urlArray);

      this.setState({
        pics: urlArray,
      });
    })

    .catch(error=> {
      console.log("Error Fetching & parsing data",error);
    });
}

componentWillReceiveProps(nextProps){


}

  render() {
    console.log(this.state.pics);
    return (
    <div className="container">
       <SearchForm/>
       <NavMenu/>
       <PhotoContainer data={this.state.pics}/>
    </div>
    );
  }
}

export default App;
