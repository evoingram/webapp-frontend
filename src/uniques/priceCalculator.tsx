import React from 'react';
import '../css/App.css';
import '../css/mainWindow.css';


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
		if (turnaroundT === '30') {
			pageRate = 2.65;
		} else if (turnaroundT === '45') {
			pageRate = 2.5;
		} else if (turnaroundT === '14') {
			pageRate = 3.25;
		} else if (turnaroundT === '7') {
			pageRate = 3.75;
		} else if (turnaroundT === '3') {
			pageRate = 4.25;
		} else if (turnaroundT === '1') {
			pageRate = 5.25;
		}
	} else {
		if (turnaroundT === '30') {
			pageRate = 2.65;
		} else if (turnaroundT === '45') {
			pageRate = 2.5;
		} else if (turnaroundT === '14') {
			pageRate = 3.25;
		} else if (turnaroundT === '7') {
			pageRate = 3.75;
		} else if (turnaroundT === '3') {
			pageRate = 4.25;
		} else if (turnaroundT === '1') {
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


// close one of the hidden pages
function closeForm(hiddenFormID: any) {
	(document.getElementById(hiddenFormID) as HTMLInputElement).style.display = 'none';
}


function TStatus() {

	return (
		<div id="priceQuote" className="form-popup">
			<div className="form-container">
                        <div>&nbsp;</div>
                        <div>&nbsp;</div>
				<section className="stackedRows">
                    <button type="button" className="btn cancel" onClick={() => { closeForm('priceQuote') }}>
						Close
					</button>
                        <div>&nbsp;</div>
                        <div>&nbsp;</div>
				</section>

				<section id="logoHolder" className="stackedRows">
					<img src="https://www.aquoco.co/img/RectLogo.webp" className="logo" alt="A Quo Co." />
				</section>

				<h1>
					<section id="pqChange1" className="stackedRows">
						Price Quote Calculator
					</section>
				</h1>
				<section className="stackedRows">
					<form id="orderForm" name="OrderForm">
						<div className="pqQuestion">
                            <div className="left">
                                <p>Us ordering audio for you may or may not incur an extra charge.  A hard copy incurs an extra charge of $0.25/page + $5/CD burned.  These two possibilities are not accounted for in the calculator below.</p>

							</div>
						</div>

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
                        <div id="priceQuoteBox" className="pqQuestion pq1">
                        <div>&nbsp;</div>
                        <div>&nbsp;</div>
                            <label htmlFor="tPrice2">Total Price Estimate/Deposit:</label>
                            <input title="price estimate" id="tPrice2" name="tPrice2" />
                        </div>
                        <div>&nbsp;</div>
                        <div>&nbsp;</div>
				<section className="stackedRows">
                    <button type="button" className="btn cancel" onClick={() => { closeForm('priceQuote') }}>
						Close
					</button>
				</section>
                        <div>&nbsp;</div>
                        <div>&nbsp;</div>
					</form>
				</section>
			</div>
		</div>
	);
}

export default TStatus;

                                                                    