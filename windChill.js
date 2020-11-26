


/*INPUT: Temperature and Wind Speed 
 *PROCESSING: Get parameters from user input and store as variables.
 * Determine if both parameters meet specifications for  windChill function 
 *OUITPUT: Windchill to the user
 */

function doInputOutput() {
    
    let t = parseFloat(document.getElementById("temperature").value);
    let s = parseFloat(document.getElementById("windspeed").value);
//check if the specifications have been met to calculate windchill. 
    if (t < 50 && s > 3) {
        let windchill = windChill(t, s);

        document.getElementById("output").innerHTML = "The windchill is " + windchill + " Farenheit";
    } else {
 // if the specifications was not met.
        document.getElementById("output").innerHTML = "The temperature must be lower than 50 degrees Farenheit and the windspeed must be more that 3 mph."
    }
}
//Use the windChill function to calculate wind chill
function windChill(t, s) {
    let windchill = (35.74 + 0.6215 * t - 35.75 * Math.pow(s, 0.16) + 0.4275 * t * Math.pow(s, 0.16));
    windchill = windchill.toFixed(2);
    return windchill;
}

