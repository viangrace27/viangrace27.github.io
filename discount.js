

/* Defining table
 INPUT:  Customer's subtotal.
 PROCESSING: Solve for the discount, subtract the discount from the subtotal then add tax and program compute for amount due
 OUTPUT: Display amount due to the user.
*/ 



function salesDiscount() {

     // Take customer's subtotal amount
    let subTotal = parseFloat(document.getElementById('number1').value);

    //Get input from computer's clock.
    let now = new Date();
    let month = now.getMonth();
    let dayOfMonth = now.getDay();
    let dayOfWeek = 3;
    
    
    //Processing:
    //Solve for discount and total amount due.
    
    if (dayOfWeek === 2 || 3 && subTotal > 50 ) {
        // There is a 10% discount every Tuesday and Wednesday

        subTotal = subTotal- subTotal* 0.1;
    
    }
        
     let totalAmountDue = subTotal + subTotal* 0.06;
     let digits = 2;
     let multiplier = Math.pow (10, digits);
     totalAmountDue = Math.round (totalAmountDue * multiplier) / multiplier;
     totalAmountDue = totalAmountDue.toFixed(2);
        

	//OUTPUT
     document.getElementById('output').innerHTML = "The amount due is"+ " $ " + totalAmountDue + "!";
    
}