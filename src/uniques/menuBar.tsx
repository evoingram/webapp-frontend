import React from 'react';
import aqcLogo from '../img/RectLogo.webp';
import '../css/App.css';
import '../css/menuBar.css';


//open one of the hidden pages and close all others
function openForm() {
	(document.getElementById('priceQuote') as HTMLInputElement).style.display = 'block';
}


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
				  <a href="#priceQuote" className="navLink" onClick={openForm}>
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
