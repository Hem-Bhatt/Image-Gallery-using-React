import React, { Component } from 'react';
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom';
import axios from 'axios';
import NavMenu from './Components/NavMenu.js';
import PhotoContainer from './Components/PhotoContainer.js';
import SearchForm from './Components/SearchForm.js';
import Container from './Components/Container.js';
import Notfound from './Components/Notfound.js';


class App extends Component {
  constructor(){
    super();
    this.state = {
      pics:[]
    };
  }



  render() {

    return (
      <BrowserRouter>
        <div className="container">
           <h1> Welcome to the React Gallery App!!</h1>
           <NavMenu/>
              <Switch>
                <Route exact path = "/" render={()=><Container data={'nature'}/>} />
                <Route path = "/cats" render={()=><Container data={'cats'}/>} />
                <Route path = "/dogs" render={()=><Container data={'dogs'}/>} />
                <Route path = "/cars" render={()=><Container data={'cars'}/>} />
                <Route path = "/Search" render={()=><SearchForm/>} />
                <Notfound/>
            </Switch>
        </div>
      </BrowserRouter>

    );
  }
}

export default App;
