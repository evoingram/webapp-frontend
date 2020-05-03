import React from 'react';
import '../css/App.css';
import '../css/mainWindow.css';

function ProfileInfo() {
	let helloWorld: string;
	helloWorld = 'Profile Info';

	return (
		<div className="mainWindow">
			<div className="App">
				<p>{helloWorld}</p>
			</div>
		</div>
	);
}

export default ProfileInfo;
