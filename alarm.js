/*Get input from my computer's clock.
	Get date, month, day of month and day of week.
    */
    
	function myAlarm() {
   //Get inputs from my computer. 
  
  let today = new Date();
  let month = today.getMonth();
  let dayOfMonth = today.getDate();
  let dayOfWeek = today.getDay();
  let holiday = ['January 1','July 4', 'December 25'];
  // Processing: Determine whether the user should get-up or sleep in.

  
  let message;

  if (today == "Monday" || today =='Tuesday' || today == 'Wednesday' || today =='Thursday' || today == 'Friday' && today !='holiday'){
       message = "Get-up!";   
  }
  else {
       message = 'Sleep in!'; 
  }

 
//OUTPUT
   document.getElementById('output').innerHTML = message;
   

}
    


  