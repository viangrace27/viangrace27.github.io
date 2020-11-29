
 /*The first function (doFV) does the following:

 Takes no parameters.
 Is called from the onclick attribute.
 Gets input from the user.
 Calls the computeFutureValue function.
 Displays the result to the user.*/

function doPayment() {
    let principal = parseFloat(document.getElementById("principal").value);
    let rate = parseFloat(document.getElementById("rate").value);
    let years = parseFloat(document.getElementById("years").value);
    let periods = parseFloat(document.getElementById("periods").value);
    let message1 = "";
    let p = computePayment(principal, rate, years, periods);
    message1 = "Your payment will be $"+ p;
    document.getElementById('outputDiv1').innerHTML = message1
}

/*computes and returns the monthly payment for a loan with a fixed annual interest rate. 
The formula for computing a loan payment is:
  p =  ar / 1 − (1 + r)^−n
  a = the loan amount
  r = rate per period
  n = total # of periods throughout the life of the loan 
  y = number of years*/

 function computePayment(a, r, y, n) {
    return (a * (r/n) / (1 - ((1 + (r/n))**(-n*y)))).toFixed(2);
}

function doBalance() {
    let principal = parseFloat(document.getElementById("principal").value);
    let rate = parseFloat(document.getElementById("rate").value);
    let numberOfPayments = parseFloat(document.getElementById("payments").value);
    let periods = parseFloat(document.getElementById("periods").value);
    let years = parseFloat(document.getElementById("years").value);
    let message2 = "";
    let balance = computeBalance(principal, rate, years, periods, numberOfPayments);
    message2 = "Your balance is $" + balance;
    document.getElementById('outputDiv2').innerHTML = message2
}

/*Formula: b = a (1 + r)^d − [ p ( (1 + r)^d − 1 ) /r]
   a = loan amount
   r = rate per period
   d = number of payments
   y = number of years*/

function computeBalance(a, r, y, n, d) {
    let monthly = a * (r/n) / (1 - ((1 + (r/n))**(-n*y)));
    return (a * Math.pow(1 + (r/n),d) - (monthly * (Math.pow(1 + (r/12),d) - 1)) / (r/n)).toFixed(2);
}



// Reset
function reset() {
	document.getElementById("resetForm").reset();
}