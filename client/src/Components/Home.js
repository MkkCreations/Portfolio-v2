import React from 'react';
import { Link } from 'react-router-dom';
import './Styles.css';

class Home extends React.Component {
  render() {
    return (
      <div className='divcontainer'>
        <p>Welcome to my website</p>
        <h1>Mohamed Khaffou</h1>
        <h2>I love creating websites.</h2>
        <p> Hi! I'm a web developer, I love coding but what I love more is challenge myself in order to improve my programming skills. Working smart is my passion.</p>
        <Link to='/projects' type="button" className="btn btn-outline-light">Check out my projects!</Link>
      </div>
    );
  }

}

export default Home;