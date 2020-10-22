/* Defining Table
 INPUT:  Get two numbers from two different input boxes - x and y
 PROCESSING: Add the two numbers together store in sum
 OUTPUT: Display sum on the document
*/ 

    
    function addNumbers() {
        //Input two numbers.
         let x = parseFloat(document.getElementById('number1').value);
         let y = parseFloat(document.getElementById('number2').value);
        
        //OUTPUT
         document.getElementById('output').innerHTML = "The sum of " + x + " and " + y + " equals " + sum + "!";

    //PROCESSING
    let result;

        switch(operator){
                   
            case '+':
                result = x + y;
                break;

            case '-':
                result = x - y;
                break;

            case '*':
                result = x * y;
                break;

            case '/':
                result = x / y;
                break;

            // operator doesn't match any case constant (+, -, *, /)
            default:
                print("Error! operator is not correct");
                return;
        }

        //OUTPUT
        document.getElementById('output').innerHTML = result + "The sum of " + x + " and " + y + " equals " + sum + "!";
    }


                 
       