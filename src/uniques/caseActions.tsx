import React from 'react';
import '../css/App.css';
import '../css/mainWindow.css';

function CaseActions() {
	let helloWorld: string;
	helloWorld = 'case actions';

	return (
		<div className="mainWindow border">
			<div className="App">
				<p>{helloWorld}</p>
			</div>
		</div>
	);
}

export default CaseActions;
