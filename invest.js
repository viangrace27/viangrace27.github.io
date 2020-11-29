


function doFV() {

	// Get user input from the text field that has the id.
	let principal = parseFloat(document.getElementById('principal').value);
	let annualRate = parseFloat(document.getElementById('annualRate').value);
	let years = parseFloat(document.getElementById('years').value);
	let periodsPerYear = parseFloat(document.getElementById('periodsPerYear').value);
	
	// Call the function computeFutureValue(principal, annualRate, years, periodsPerYear)
	// and store the value returned by function in a variable
	let f = computeFutureValue(principal, annualRate, years, periodsPerYear);
	
	// Display the result
	document.getElementById('outputDiv').innerHTML = 'Future Value is $ ' + f;
}
 

 function computeFutureValue(principal, annualRate, years, periodsPerYear) {

	// Compute and return the future value of an investment.
	let f = principal * Math.pow(1 + annualRate / periodsPerYear, (years * periodsPerYear));
 
	return f.toFixed(2);
 
}


// Reset the form
function reset() {
	document.getElementById("resetForm").reset();
}