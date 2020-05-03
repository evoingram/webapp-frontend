import React from 'react';
import '../css/App.css';
import '../css/mainWindow.css';

function FilesComp() {
	let helloWorld: string;
	helloWorld = 'Files';

	return (
		<div className="mainWindow">
			<div className="App">
				<p>{helloWorld}</p>
			</div>
		</div>
	);
}

export default FilesComp;
