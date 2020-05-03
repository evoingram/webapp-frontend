import React from 'react';
import logo from './logo.svg';
import './css/App.css';
import './css/mainWindow.css';
import MenuBar from './uniques/menuBar';
import MainWindow from './uniques/mainWindow';
import CaseBar from './uniques/caseBar';
import PriceCalculator from './uniques/priceCalculator';


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
			<PriceCalculator />
		</div>
	);
}

export default App;
