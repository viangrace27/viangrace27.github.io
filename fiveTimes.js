/* Defining Table
 INPUT:  User input an interger.
 PROCESSING: Add odd numbers and store in sum
 OUTPUT: Display sum of all odd numbers on the document
*/ 



function fiveTimes() {
     
//Multiply number by five using a for loop
//Counting starts at 1 and the condition is i is equal to or less than 12.
//Increment number by 1

let message = " ";
let table = 5;
    for (let i = 1; i <=12; i++) {
         message += table + " x " + i + " = "+ table * i +"<br>";

}

//OUTPUT
document.getElementById('output').innerHTML = message;
}