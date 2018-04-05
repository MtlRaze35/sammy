import React, { Component } from 'react';

import Acts from './Acts'
import Media from './Media'
import NavBar from './NavBar'

class Home extends Component {
  render() {
    return (
      <div >
        <Acts/>
        <Media/>
      </div>
    );
  }
}

export default Home;
