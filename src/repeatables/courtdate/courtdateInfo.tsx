import React from 'react';
import '../../css/App.css';
import '../../css/mainWindow.css';

function CourtdateInfo() {
	let helloWorld: string;
	helloWorld = 'COURTDATE INFO';
	let judgeName: string;
	judgeName = 'John H. Doe';
	let judgeTitle: string;
	judgeTitle = 'King County Superior Court Judge';
	let hDate: string;
	hDate = new Date().toLocaleString();
	let hStartTime: string;
	hStartTime = new Date().toLocaleString();
	let hEndTime: string;
	hEndTime = new Date().toLocaleString();
	let apps: string;
	apps = 'apps';

	return (
		<div className="mainWindow border">
			<div className="App">
				<p>{helloWorld}</p>
				<p>Judge:  {judgeName}</p>
				<p>{judgeTitle}</p>
				<p>Hearing Date: {hDate}</p>
				<p>Start Time:  {hStartTime}</p>
				<p>End Time:  {hEndTime}</p>
				<p>Appearances:  {apps}</p>
			</div>
		</div>
	);
}

export default CourtdateInfo;
