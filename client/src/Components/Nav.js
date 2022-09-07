import React from 'react';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';
import './Styles.css';

class Nav extends React.Component {
  
  render() {
    return (
      <nav className="navbar navbar-expand-lg" id='navbar'>
        <div className="container-fluid">
          <Link 
            className="navbar-brand " 
            to="/">Khaffou Mohamed
          </Link>
          <button 
            className="navbar-toggler" 
            type="button" 
            data-bs-toggle="collapse" 
            data-bs-target="#navbarNavAltMarkup" 
            aria-controls="navbarNavAltMarkup" 
            aria-expanded="false" 
            aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="flex justify-content-center collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav align-items-center">
              <CustomLink className="nav-link" aria-current="page" to="/">Home</CustomLink>
              <CustomLink className="nav-link" to="/skills">Skills</CustomLink>
              <CustomLink className="nav-link" to="/projects">Projects</CustomLink>
              <CustomLink className="nav-link" to='/contact'>Contact</CustomLink>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

function CustomLink({to, children, ...props}) {
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({ path: resolvedPath.pathname})
  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  )
  
}

export default Nav;

