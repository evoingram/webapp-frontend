import React from 'react';
import logo from '../logo.svg';
import '../css/App.css';
import '../css/mainWindow.css';
import MenuBar from './menuBar';
import CaseInfo from "../repeatables/caseInfo";
import CourtDate from "../repeatables/courtdate";
import CaseActions from './caseActions';


function MainWindow() {
	
  	let helloWorld: string;
  	helloWorld = 'MAIN WINDOW SHOWING INDIVIDUAL DATES (TRANSCRIPTS) FOR EACH CASE';
	
	return (
		<div className="mainWindow">
			<div className="border">
				<CaseInfo />
				<CaseActions />
			</div>
			<div className="border">
				<CourtDate />
			</div>
		</div>
	);
}

export default MainWindow;
