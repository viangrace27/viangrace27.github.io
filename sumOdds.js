/* Defining Table
 INPUT:  User input an interger.
 PROCESSING: Add odd numbers and store in sum
 OUTPUT: Display sum of all odd numbers on the document
*/ 



function sumOddValue() {
     //INPUT: User input an interger n.
         

//Identify odd numbers within interger n and add them together.
//USe for loop in adding odd numbers
//Counting starts at 1 and the condition is i is equal to or less than the user input
//Increment number by 2 since I am just adding the odd numbers
let n = parseFloat(document.getElementById('number1').value);
let sum = 0;
for ( let i = 1; i <= n; i+=2) {
    sum += i;
     }   

     
	//OUTPUT
     document.getElementById('output').innerHTML = sum;
}