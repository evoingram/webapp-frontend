import React from 'react';
import '../css/App.css';
import '../css/mainWindow.css';

function ProfileInfo() {
	let helloWorld: string;
	helloWorld = 'Profile Info';
	let inputEmail: string;
	inputEmail = 'evoingram@aquoco.onmicrosoft.com';
	let inputNameFirst: string;
	inputNameFirst = 'Erica';
	let inputNameLast: string;
	inputNameLast = 'Ingram';
	let inputCompany: string;
	inputCompany = 'A Quo Co.';
	let inputAddress1: string;
	inputAddress1 = '320 W Republican';
	let inputAddress2: string;
	inputAddress2 = 'Apt 207';
	let inputCity: string;
	inputCity = 'Seattle';
	let inputState: string;
	inputState = 'WA';
	let inputZip: string;
	inputZip = '98119';

	return (
		<div className="mainWindow border">
			<div className="App">
				<p>{helloWorld}</p>
				<p>
					{inputNameFirst} {inputNameLast}
				</p>
				<p>{inputEmail}</p>
				<p>{inputCompany}</p>
				<p>{inputAddress1}</p>
				<p>{inputAddress2}</p>
				<p>
					{inputCity}, {inputState} {inputZip}
				</p>
			</div>
		</div>
	);
}

export default ProfileInfo;
