import React from 'react';
import '../css/App.css';
import '../css/mainWindow.css';

function CourtDate() {
	let helloWorld: string;
	helloWorld = 'CourtDate';

	return (
		<div className="mainWindow">
			<div className="App">
				<p>{helloWorld}</p>
			</div>
		</div>
	);
}

export default CourtDate;
