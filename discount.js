

/* Defining table
 INPUT:  Customer's subtotal.
 PROCESSING: Solve for the discount, subtract the discount from the subtotal then add tax and program compute for amount due
 OUTPUT: Display amount due to the user.
*/ 

//Get input from computer's clock.

function salesDiscount() {

    let dayOfWeek = new Date().getDay();
    // Take customer's subtotal amount
    let subTotal = parseFloat(document.getElementById('number1').value);
    let discount = 0;
    let discountedTotal = subTotal - (subTotal * discount);
    let taxRate = 0.06;
    let tax = subTotal * taxRate;
    let totalAmountDue = subTotal + tax;
    //Processing:
    //Solve for discount and total amount due.
    
    if (subTotal > 50 && dayOfWeek == 'Tuesday' || dayOfWeek =='Wednesday') {
        // There is a 10% discount every Tuesday and Wednesday
        discount = 0.10;
        totalAmountDue = discountedTotal + tax;
    
    }
    else {
         discount = 0;    
         totalAmountDue = discountedTotal + tax;
    }
        

	//OUTPUT
     document.getElementById('output').innerHTML = "The amount due is"+ "  " + totalAmountDue + "!";
    
}