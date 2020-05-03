import React from 'react';
import '../css/App.css';
import '../css/mainWindow.css';

function InvoiceComp() {
	let helloWorld: string;
	helloWorld = 'Invoices';

	return (
		<div className="mainWindow">
			<div className="App">
				<p>{helloWorld}</p>
			</div>
		</div>
	);
}

export default InvoiceComp;
