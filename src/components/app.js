import React from 'react';
import NavBar from './nav_bar';
import {Link} from 'react-router';

export default (props) => {
    return (
      <div>
        <NavBar title="CatBook" url="/" />
        <div className="container">
          <div className="cats-link">
            <Link to="/cats">See The Cats</Link>
          </div>
          <div className="dogs-link">
            <Link to="/dogs">See The Dogs</Link>
          </div>
          <div className="link-results">
            {props.children}
          </div>
        </div>
      </div>
    )
};
