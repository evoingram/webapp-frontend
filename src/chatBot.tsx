import React from 'react';
import '../../css/App.css';
import '../../css/mainWindow.css';

function ChatBot() {
	let helloWorld: string;
	helloWorld = 'chat bot';

	return (
		<div className="mainWindow border">
			<div className="App">
				<p>{helloWorld}</p>
			</div>
		</div>
	);
}

export default ChatBot;
