import React from 'react';
import '../css/App.css';
import '../css/mainWindow.css';

function CourtdateInfo() {
	let helloWorld: string;
	helloWorld = 'Courtdate Info';

	return (
		<div className="mainWindow">
			<div className="App">
				<p>{helloWorld}</p>
			</div>
		</div>
	);
}

export default CourtdateInfo;
