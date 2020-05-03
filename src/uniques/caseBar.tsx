import React from 'react';
import '../css/App.css';
import ProfileInfo from './profileInfo';
import CaseInfo from "../repeatables/caseInfo";


function CaseBar() {
  return (
		<div className="App">
		  <ProfileInfo />
		  <button>Add a Case</button>
		  <CaseInfo />
		</div>
  );
}

export default CaseBar;
