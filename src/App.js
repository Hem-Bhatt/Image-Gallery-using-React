import React, { Component } from 'react';
import {
  BrowserRouter,
  Route
} from 'react-router-dom';
import axios from 'axios';
import NavMenu from './NavMenu.js';
import PhotoContainer from './PhotoContainer.js';
import apiKey from './config.js'
import SearchForm from './SearchForm.js'



class App extends Component {
  constructor(){
    super();
    this.state = {
      pics:[]
    };
  }

componentDidMount(){
  // Make a request for a user with a given ID
  axios.get('https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=40df3b0344ab79234ed7a6d417fa3233&tags=dogs&per_page=24&format=json&nojsoncallback=1')
    .then(response=> {
      console.log(response.data.photos.photo);
      this.setState({
        pics: response.data.photos,
      });
    })
    .catch(error=> {
      console.log("Error Fetching & parsing data",error);
    });
}

componentWillReceiveProps(nextProps){


}

  render() {
    return (
    <div className="container">
       <SearchForm/>
       <NavMenu/>
       <PhotoContainer/>
    </div>
    );
  }
}

export default App;
