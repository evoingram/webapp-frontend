import React from 'react';
import '../css/App.css';
import '../css/mainWindow.css';

function CaseInfo() {
	let helloWorld: string;
	helloWorld = 'case info';

	return (
		<div className="mainWindow">
			<div className="App">
				<p>{helloWorld}</p>
			</div>
		</div>
	);
}

export default CaseInfo;
