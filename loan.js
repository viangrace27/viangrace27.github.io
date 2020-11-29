function doPayment() {

	// Get user input from the text field that has the id.
	let principal = parseFloat(document.getElementById('principal').value);
	let annual = parseFloat(document.getElementById('annualInterestRate').value);
	let numberOfyears = parseFloat(document.getElementById('years').value);
	let payment = parseFloat(document.getElementById('payment').value);
	
	// Call the function computeFutureValue(principal, annualRate, years, periodsPerYear)
	// and store the value returned by function in a variable
	let p = computePayment(principal, annualRate, years, periodsPerYear);
	
	// Display the result
	document.getElementById('outputDiv').innerHTML = 'Future Value is $ ' + p;
}
 

 function computePayment(principal, annualRate, years, periodsPerYear) {

// Get the user's input from the input elements.
// Convert interest from a percentage to a decimal, and convert from
// an annual rate to a monthly rate. Convert payment period in years
// to the number of monthly payments.
let principal = parseFloat(amount.value);
let interest = parseFloat(apr.value) / 100 / 12;
let payments = parseFloat(years.value) * 12;

// compute the monthly payment 
let x = Math.pow(1 + interest, payments);
let  monthly = (principal*x*interest)/(x-1);
	return p.toFixed(2);
 
    

}


	// Reset the form
function reset() {
	document.getElementById("resetForm").reset();
}