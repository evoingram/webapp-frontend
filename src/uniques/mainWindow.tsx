import React from 'react';
import logo from '../logo.svg';
import '../css/App.css';
import MenuBar from './menuBar';


function MainWindow() {
	
  	let helloWorld: string;
  	let learnReact: string;
  	helloWorld = 'Hello World!';
	learnReact = 'Learn React';
	
	return (
		<div>
			<div className="App">
				<img src={logo} className="App-logo" alt="logo" />
				<p>{helloWorld}</p>
				<p>MAIN WINDOW</p>
			</div>
		</div>
	);
}

export default MainWindow;
