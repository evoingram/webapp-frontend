import React from 'react';
import '../../css/App.css';
import '../../css/mainWindow.css';


// price quote calculator
function calculatePrice() {
	//Get selected data
    let audioLengthOriginal: string = (document.getElementById('p1i4') as HTMLInputElement).value;
	let turnaroundT: string = (document.getElementById('turnaround') as HTMLInputElement).value;

	var hours = 0;
    let audioLength: number;
    audioLength = parseInt(audioLengthOriginal);
    
    let pageRate: number = 2.65;

	if (audioLength >= 885) {
		if (turnaroundT == '30') {
			pageRate = 2.65;
		} else if (turnaroundT == '45') {
			pageRate = 2.5;
		} else if (turnaroundT == '14') {
			pageRate = 3.25;
		} else if (turnaroundT == '7') {
			pageRate = 3.75;
		} else if (turnaroundT == '3') {
			pageRate = 4.25;
		} else if (turnaroundT == '1') {
			pageRate = 5.25;
		}
	} else {
		if (turnaroundT == '30') {
			pageRate = 2.65;
		} else if (turnaroundT == '45') {
			pageRate = 2.5;
		} else if (turnaroundT == '14') {
			pageRate = 3.25;
		} else if (turnaroundT == '7') {
			pageRate = 3.75;
		} else if (turnaroundT == '3') {
			pageRate = 4.25;
		} else if (turnaroundT == '1') {
			pageRate = 5.25;
		}
	}

	//convert data to integers
	hours = audioLength / 60;

	//calculate total value
    let total: number;
    total = 45 * hours * pageRate;

	if (total < 50) {
		total = 50;
	}

	//print value to  tPrice
	var dollar = '$';
	let totalStr:string = total.toFixed(2);
	(document.getElementById('tPrice2') as HTMLInputElement).value = dollar.concat(totalStr);
}

//open one of the hidden pages and close all others
function openForm(hiddenFormID: any) {
	var allFormPopups = document.getElementsByClassName('form-popup');
	for (let x = 0; x < allFormPopups.length; x++) {
		(document.getElementsByClassName('form-popup')[x] as HTMLInputElement).style.display = 'none';
	}
	(document.getElementById(hiddenFormID) as HTMLInputElement).style.display = 'block';
}

// close one of the hidden pages
function closeForm(hiddenFormID: any) {
	(document.getElementById(hiddenFormID) as HTMLInputElement).style.display = 'none';
}


function TStatus() {
	let helloWorld: string;
	helloWorld = 'price calculator';

	return (
		<div id="priceQuote" className="form-popup">
			<div className="form-container">
				<section className="stackedRows">
                    <button type="button" className="btn cancel" onClick={() => { closeForm('priceQuote') }}>
						Close
					</button>
				</section>

				<section id="logoHolder" className="stackedRows">
					<img src="https://www.aquoco.co/img/RectLogo.webp" className="logo" alt="A Quo Co." />
				</section>

				<h1>
					<section id="pqChange1" className="stackedRows">
						Price Quote Calculator:
					</section>
				</h1>
				<br />
				<br />
				<h3>
					<section id="pqChange2" className="stackedRows">
						Get a price quote on your transcript:
					</section>
				</h3>
				<section className="stackedRows">
					<form id="orderForm" name="OrderForm">
						<div className="pqQuestion">
							<div className="left">
								<label htmlFor="p1i2" id="p1i2Label" className="labelPQ">
									Are we ordering audio?
								</label>
							</div>
							<div className="right">
								<input
									title="No, we are not ordering audio"
									id="p1i2"
									type="radio"
									name="p1i2"
									value="No"
									checked
									required
								/>
								No
								<input
									title="Yes, we are ordering audio"
									id="p1i2"
									type="radio"
									name="p1i2"
									value="Yes"
									required
								/>
								Yes
							</div>
						</div>
						<br />
						<br />
						<br />
						<div className="pqQuestion pq1">
							<div className="left">
								<label htmlFor="p1i3">Hard copy (extra charge, $0.25/page + $5/CD)?</label>
							</div>
							<div className="right">
								<input
									title="No hard copy"
									id="p1i3"
									type="radio"
									name="p1i3"
									value="No"
									checked
									required
								/>
								No
								<input title="Yes, hard copy" id="p1i3" type="radio" name="p1i3" value="Yes" required />
								Yes
							</div>
						</div>

						<br />
						<br />
						<br />
						<br />
						<div className="pqQuestion pq1">
							<div className="left">
								<label htmlFor="p1i4">How long is your audio in minutes?</label>
							</div>
							<div className="right">
								{' '}
								<input
									title="audio length in minutes"
									id="p1i4"
									name="p1i4"
                                    onChange={calculatePrice}
									required
								/>
							</div>
						</div>
						<br />
						<br />
						<br />
						<div id="turnaroundDiv" className="pqQuestion pq1">
							<div id="insideTAD" className="left">
								<label htmlFor="turnaround">
									What turnaround? 24-hour turnaround or less accepted on a case-by-case basis.
								</label>
                                <select name="turnaround" onChange={calculatePrice} id="turnaround" required>
									<option value="45" defaultChecked>45 calendar days</option>
									<option value="30">30 calendar days</option>
									<option value="14">14 calendar days</option>
									<option value="7">7 calendar days</option>
									<option value="3">3 calendar days</option>
									<option value="1">1 calendar day</option>
								</select>
							</div>
						</div>
					</form>
				</section>
			</div>
		</div>
	);
}

export default TStatus;

                                                                    