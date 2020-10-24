function simpleCalculator() {
  ///Input two numbers,operator and the user answer
  

  let x = parseFloat(document.getElementById('number1').value);
  let y= parseFloat(document.getElementById('number2').value);
  let answer = parseFloat(document.getElementById('number3').value);
  let operator = document.getElementById('symbol').value;

  //Solve the problem using switch operator
  
  
  let answerKey;
  
  switch (operator) {

      case '+':
          answerKey = parseFloat(x + y);
          break;

      case '-':
          answerKey = pareseFloat(x - y);
          break;

      case '*':
          answerKey = parseFloat(x * y);
          break;

      case '/':
          answerKey = parseFloat(x / y);
          break;   
  }
 
  //Output:
  //User check if answer is correct.
  let message;
  if (answer == answerKey) {
      message = "Your answer is Correct!.";
  } 
  else {
      message = "Your answer is Incorrect.Try again.";
  }
  
  document.getElementById('output').innerHTML = message;
}
