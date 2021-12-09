import React from "react";
import "./Header.css";
import logo from "../../image/NewLogo.png";
import { Link } from "react-router-dom";

function Header() {
	return (

		<div className="container-fluid">
			<nav className="navbar navbar-expand-lg navbar-light">
      			<a href="" className="navbar-brand"><img src={logo} alt="CSCult's Logo" className="nav-logo"/> CSCult</a>
      			<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
          			<span className="navbar-toggler-icon"></span>
     	 		</button>
      			<div className="collapse navbar-collapse" id="navbarTogglerDemo01">
          			<ul className="navbar-nav ms-auto">
              			<li className="nav-item">
                  			<a href="/#about" className="nav-link">About</a>
              			</li>
              			<li className="nav-item">
                  			<a href="/#community" className="nav-link">Community</a>
              			</li>
              			<li className="nav-item">
                  			<a href="/#events" className="nav-link">Events</a>
              			</li>
						  <li className="nav-item">
                  			<a href="/#products" className="nav-link">Products</a>
              			</li>
						<li className="nav-item">
                  			<a href="/team" className="nav-link">Team</a>
              			</li>
        			</ul>
				</div>
    		</nav>
		</div>
	);
}

export default Header;
