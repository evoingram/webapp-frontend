import React from 'react';
import '../css/App.css';
import '../css/mainWindow.css';
import CaseInfo from "../repeatables/caseInfo";
import CourtDate from "../repeatables/courtdate";
import CaseActions from './caseActions';


function MainWindow() {
	
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
