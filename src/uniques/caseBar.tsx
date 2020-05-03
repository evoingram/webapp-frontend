import React from 'react';
import logo from '../logo.svg';
import '../css/App.css';


function CaseBar() {
  let helloWorld: string;
  let learnReact: string;
  helloWorld = 'CASE BAR FULL OF CASE INFO';
  learnReact = 'Learn React';
  return (
		<div className="App">
			<header className="App-header">
				<p>{helloWorld}</p>
				<a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
					{learnReact}
				</a>
			</header>
		</div>
  );
}

export default CaseBar;
