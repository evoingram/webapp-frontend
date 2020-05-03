import React from 'react';
import aqcLogo from '../img/RectLogo.webp';
import '../css/App.css';
import '../css/menuBar.css';


function MenuBar() {
  	let homeText: string;
  	let eCalcText: string;
  	let logoutText: string;
  	homeText = 'Home';
	eCalcText = 'Estimate Calculator';
	logoutText = 'Logout';
	
  return (
		<div className="menu">
			<nav className="navigation">
				<div className="navLinkContainer">
					<a href="index.html" className="navLink">
						{homeText}
					</a>
				</div>
				<div className="navLinkContainer">
					<a href="#about" className="navLink">
						{eCalcText}
					</a>
				</div>
				<div className="navLinkContainer">
					<a href="#rates" className="navLink">
						{logoutText}
					</a>
				</div>
				<div className="navLinkContainer">
					<img src={aqcLogo} alt="AQC logo" />
				</div>
			</nav>
		</div>
  );
}

export default MenuBar;
