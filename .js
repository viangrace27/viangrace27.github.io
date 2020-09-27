/* Defining Table
 INPUT:  Get two numbers from two different input boxes - x and y
 PROCESSING: Add the two numbers together store in sum
 OUTPUT: Display sum on the document
*/ 

function addNumbers() {
	//INPUT
	 let x = parseFloat(document.getElementById('number1').value);
	 let y = parseFloat(document.getElementById('number2').value);
	//PROCESSING
	 let sum = x + y;
	//OUTPUT
	 document.getElementById('output').innerHTML = "The sum of " + x + " and " + y + " equals " + sum + "!";
}