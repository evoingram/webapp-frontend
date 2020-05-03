import React from 'react';
import logo from './logo.svg';
import './css/App.css';
import './css/mainWindow.css';
import MenuBar from './uniques/menuBar';
import MainWindow from './uniques/mainWindow';
import CaseBar from './uniques/caseBar';


function App() {
  let helloWorld: string;
  let learnReact: string;
  helloWorld = 'Hello World!';
  learnReact = 'Learn React';
	return (
		<div className="App">
			<MenuBar />
			<div id="container">
				<div id="secondColumn">
					<CaseBar />
				</div>
				<div id="firstColumn">
					<MainWindow />
				</div>
			</div>
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p>{helloWorld}</p>
				<p>
					Edit <code>src/App.tsx</code> and save to reload.
				</p>
				<a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
					{learnReact}
				</a>
			</header>
		</div>
	);
}

export default App;
