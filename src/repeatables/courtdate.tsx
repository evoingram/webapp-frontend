import React from 'react';
import '../css/App.css';
import '../css/mainWindow.css';
import CommHistory from "./courtdate/commHistory";
import CourtdateInfo from "./courtdate/courtdateInfo";
import FilesComp from "./courtdate/files";
import InvoiceComp from "./courtdate/invoice";
import TStatus from "./courtdate/tStatus";

function CourtDate() {
	let helloWorld: string;
	helloWorld = 'CourtDate';

	return (
		<div className="mainWindow border">
			<div className="App">
				<p>{helloWorld}</p>
			</div>
			<CommHistory />
			<CourtdateInfo />
			<FilesComp />
			<InvoiceComp />
			<TStatus />
		</div>
	);
}

export default CourtDate;
