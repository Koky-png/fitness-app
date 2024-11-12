import React from 'react'
import { Link } from "react-router-dom";


function Navbar() {
  return (
    <div>

      <nav className="navbar navbar-expand-lg bg-light navbar-dark m-3 ">
        <div className="container-fluid">
          <h1 className="text-bold text-primary m-2">Welcome To FITFORMULA</h1>
          
          <div
            className="collapse navbar-collapse justify-content-center "
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav mx-auto">
              <div className=" m-5">
                <li className="nav-item " >
                  <Link to="/">
                    <h4>Home</h4>

                  </Link>
                </li>
                
              </div>
              <div className="m-5">
                <li className="nav-item">
                  <Link to="/train">
                    <h4>Train</h4>
                  </Link>
              </li>
              </div>
              <div className="m-5">
                <li className="nav-item">
                  <Link to="/workout">
                    <h4>Workout</h4>
                  </Link>
              </li>
              </div> 
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
export default Navbar;