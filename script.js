/*Input:Enter a number in pounds to be converted to kilograms.
	Processing: Convert pounds to kilograms
	Round the distance to one digit after the decimal
	Output: rounded kilograms*/
	function convertpoundsTokilograms() {
		//Input a number from the user.
		let number1 = parseFloat(document.getElementById('number1').value);

		//Convert pounds to kilograms.
		let kilograms = number1 / 2.20406;

		//Round off answers in kilograms to one digit after the decimal
		let digits = 1;
		let multiplier = Math.pow(10, digits);
		kilograms= Math.round(kilograms * multiplier) / multiplier;

		//Display the kilograms to the user.
	    document.getElementById('output').innerHTML =  number1 + " " + "Pounds"+ " " +"equals"+ " "+ kilograms +" " +"Kilograms";
	}