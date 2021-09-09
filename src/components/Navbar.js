import React, {useState} from 'react'
// import '../components/Navbar.css'
import {Link} from 'react-router-dom'
import logo from '../images/logo2.png'

const Navbar = () => {
  const [isActive, setActive] = useState(false);

  const toggleClass = () => {
    setActive(!isActive);
  };
    return (
      <div >
          {/* <nav>

          <ul>
            <Link to="/" className="links">
              <li>
                <a>Home</a>
              </li>
            </Link>
            <Link to="/About"className="links">
              <li>
                <a>About</a>
              </li>
            </Link>

            <Link to="/contact-us" className="links">
              <li>
                <a>Contact</a>
              </li>
            </Link>
            <Link to="/sign-up" className="no-hover">
               <li style={{float:'right', padding: 10}}><a className="active" href="#about">Sign Up</a></li>
            </Link>
              <li style={{float:'right', padding: 10}}><a className="active" href="#about">Login</a></li>
          </ul>



          </nav> */}

<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <Link to="/">
      <img style={{cursor:'pointer'}} height="50" width="50" class="navbar-brand"  src={logo} />
  </Link>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
    <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
      <Link to="/">
      <li class="nav-item">
        <a class="nav-link">Home <span class="sr-only">(current)</span></a>
      </li>
      </Link>
      <Link to="/About">
      <li class="nav-item">
        <a class="nav-link">About</a>
      </li>
      </Link>

      <Link to="/contact-us">
      <li class="nav-item">
        <a class="nav-link" tabindex="-1">Get Involed</a>
      </li>
      </Link>
    </ul>
    <Link to="/contact-us">
    <form class="form-inline my-2 my-lg-0">
      {/* <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button> */}
      <p>Contact</p>
    </form>
    </Link>
  </div>
</nav>

      </div>
    )
}

export default Navbar