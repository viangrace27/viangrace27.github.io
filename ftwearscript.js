/*Input: Select a weather from combobox.
	Processing: Return to user the shoes suggested for the weather
	
	Output: Shoes for the weather*/

    function footWear() {
		//Input: Select weather from combobox.
		let weather = document.getElementById('weather').value;

		//Analyze user's input.
		let shoes;

		if (weather =='Hot') {
			shoes = 'You got to wear your sandals!';
		} else if ( weather =='Snow') {
			shoes = 'You need to wear boots!';
		} else if (weather == 'Rain') {
			shoes = 'Wear galoshes!';
	    } else if (weather =='Unknown') {
			shoes = 'Choose any pair of shoes!';
		}
		//Display the shoes to the user.
		let output = shoes;
	    document.getElementById('output').innerHTML = shoes;
	}