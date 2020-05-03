import React from 'react';
import logo from '../logo.svg';
import '../css/App.css';
import '../css/mainWindow.css';
import MenuBar from './menuBar';


function MainWindow() {
	
  	let helloWorld: string;
  	helloWorld = 'MAIN WINDOW SHOWING INDIVIDUAL DATES (TRANSCRIPTS) FOR EACH CASE';
	
	return (
		<div className="mainWindow">
			<div className="App">
				<img src={logo} className="App-logo" alt="logo" />
				<p>{helloWorld}</p>
			</div>
		</div>
	);
}

export default MainWindow;
