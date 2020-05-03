import React from 'react';
import '../css/App.css';
import '../css/mainWindow.css';

function CaseInfo() {
	let helloWorld: string;
	helloWorld = 'case info';
	let inputCAttorney: string;
	inputCAttorney = 'John Doe, Esq.';
	let inputCCName: string;
	inputCCName = 'Mickey Mouse v. Donald Duck';
	let inputCCNumber: string;
	inputCCNumber = '021908324';
	let inputCJurisdiction: string;
	inputCJurisdiction = 'King County Superior Court';
	let inputCDueDate: string;
	inputCDueDate = new Date().toLocaleString();

	return (
		<div className="mainWindow border">
			<div className="App">
				<p>{helloWorld}</p>
				<p>{inputCAttorney}</p>
				<p>{inputCCName}</p>
				<p>{inputCCNumber}</p>
				<p>{inputCJurisdiction}</p>
				<p>{inputCDueDate}</p>
			</div>
		</div>
	);
}

export default CaseInfo;
