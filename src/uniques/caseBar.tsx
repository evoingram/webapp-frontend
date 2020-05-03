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
		</div>
  );
}

export default CaseBar;
