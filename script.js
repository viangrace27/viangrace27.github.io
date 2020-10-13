/* Defining Table
 INPUT:  Input the number of pounds in box x
 PROCESSING: Convert pounds to kilograms and store in quotient
 OUTPUT: Display kilograms on the document
*/ 

function poundsTokilogramsConverter() {
	//INPUT
	 let x = parseFloat(document.getElementById('numberofpounds').value);
	 
	//PROCESSING
	 let quotient = ( x*1 ) / 2.20406;
	//OUTPUT
	 document.getElementById('output').innerHTML =  x + " pounds " + "is" + " equals " + qoutient + "kilograms" + "!";
}