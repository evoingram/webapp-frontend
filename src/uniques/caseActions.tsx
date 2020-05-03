import React from 'react';
import '../css/App.css';
import '../css/mainWindow.css';

function CaseActions() {
	let helloWorld: string;
	helloWorld = 'case actions';
	let addHDate: string;
	addHDate = 'Add Hearing Date';
	let addApp: string;
	addApp = 'Add Appearance';
	let contactUs: string;
	contactUs = 'Contact us about this case';

	return (
		<div className="mainWindow border">
			<div className="App">
				<p>{helloWorld}</p>
				<button>{addHDate}</button>
				<button>{addApp}</button>
				<button>{contactUs}</button>
				<p>&nbsp;</p>
			</div>
		</div>
	);
}

export default CaseActions;
