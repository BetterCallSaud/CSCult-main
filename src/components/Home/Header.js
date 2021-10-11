import React from "react";
import "./Header.css";
import logo from "../../image/NewLogo.png";
import { Link } from "react-router-dom";

function Header() {
	return (
		<div className="header">
			<Link to="/">
				<div className="header__left">
					<img src={logo} alt="CSCult's Logo" />
					<span>CSCult</span>
				</div>
			</Link>
			<div className="header__right">
				<a href="/#about">
					<div className="header__option">About</div>
				</a>
				<a href="/#community">
					<div className="header__option">Community</div>
				</a>
				<a href="/#events">
					<div className="header__option">Events</div>
				</a>
				<a href="/#products">
					<div className="header__option">Products</div>
				</a>
				<Link to="/team">
					<div className="header__option">Team</div>
				</Link>
			</div>
		</div>
	);
}

export default Header;
