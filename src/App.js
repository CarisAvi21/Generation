import React, { Component } from 'react';
import Login from './Login/Login';

import Mapa from './Home/Map';
import Favorites from './Home/Favorites'
//import Search from './Home/Search'
import Home from './Home/Home'

class App extends Component {
  render() {
    return (
      <div>
        <Login />
        <Mapa />
        <Favorites />
        <Home />
      </div>
      
    );
  }
}

export default App;
