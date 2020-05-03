import React from 'react';
import '../css/App.css';
import '../css/mainWindow.css';

function CommHistory() {
	let helloWorld: string;
	helloWorld = 'COMM HISTORY';

	return (
		<div className="mainWindow">
			<div className="App">
				<p>{helloWorld}</p>
			</div>
		</div>
	);
}

export default CommHistory;
