/*Get input from my computer's clock.
	Get date, month, day of month and day of week.
    */
    
	
  
  function myAlarm() {

 //Get inputs from my computer. 
  let now = new Date();
  let month = now.getMonth();
  let dayOfMonth = now.getDate();
  let dayOfWeek = now.getDay();
  let message;
  // Processing: Determine whether the user should get-up or sleep in.
    
  if (dayOfWeek == 0 || dayOfWeek == 6){
       message = "Sleep in!";   
  }
  else if (month ==11 && dayOfMonth ==25){
       message = 'Sleep in!'; 
  }
  else if (month == 6 && dayOfMonth == 4){
       message ="Sleep in!";
  } else {
       message = "Get-up!";
  }

 
//OUTPUT
   document.getElementById('output').innerHTML = message;
   

}
    


  