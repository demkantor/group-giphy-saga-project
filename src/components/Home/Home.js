import React, {Component} from 'react';
import '../App/App.css';
import {HashRouter as Router, Link} from 'react-router-dom';

class Home extends Component {

  
  render() {
    // just keeping this as a reference for future use.. not doing anything in this particular project.
    return (
        <div className="home">
        <Router>
          <Link to='/search' className="otherLinks" ><h1>Click To Find Your Favorite Gif!</h1></Link>
        </Router>
      </div>
    );
  }
}

export default Home;