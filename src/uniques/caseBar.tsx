import React from 'react';
import '../css/App.css';
import ProfileInfo from './profileInfo';
import CaseInfo from "../repeatables/caseInfo";


function CaseBar() {
  let helloWorld: string;
  let learnReact: string;
  helloWorld = 'CASE BAR FULL OF CASE INFO';
  learnReact = 'Learn React';
  return (
		<div className="App">
		  <ProfileInfo />
		  <button>Add a Case</button>
		  <CaseInfo />
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
