import React from 'react';
import '../css/App.css';
import '../css/mainWindow.css';

function TStatus() {
	let helloWorld: string;
	helloWorld = 'transcript status';

	return (
		<div className="mainWindow">
			<div className="App">
				<p>{helloWorld}</p>
			</div>
		</div>
	);
}

export default TStatus;
