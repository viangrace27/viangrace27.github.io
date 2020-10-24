function simpleCalculator() {

    //INPUT Input two numbers from the user and select operator from combo box.
        
    let number1 = parseFloat(document.getElementById('number1').value);
    let operator = document.getElementById('operator').value;
    let number2 = parseFloat(document.getElementById('number2').value);
    let answer = parseFloat(document.getElementById('answer').value);
    let answerKey;
    let message;
    
    /*PROCESS: Use switch statement to solve basic arithmetic.
      Use if block to check if  user's answer is correct or not */
    switch (operator) {
        case '+':
            answerKey = number1 + number2;
            break;
        case '-':
            answerKey = number1 - number2;
            break;
        case '*':
            answerKey = number1 * number2;
            break;
        case '/':
            answerKey = number1 / number2;
    }
    if (answer == answerKey) {
        message = "Your answer is Correct!"
    }
    else {
        message = "Your answer is Incorrect!"
    }
//OUTPUT: Message whether answer is correct or not.
document.getElementById('output').innerHTML = message;
}