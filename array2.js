/* Defining Table
 * Input: no user input
 * Processing: Test the countEvens and multiply functions by calling them.
 * Output: The values returned from the countEvens and multiply functions.
 */
function test() {
    let list1 = [ 17, 8, 9, 5, 20 ];
    let list2 = [ 12, 4, 8, 15, 17, 5, 20, 11 ];

    // Test the countEvens function by calling it two times.
    let count1 = countEvens(list1);
    let count2 = countEvens(list2);

    // Test the multiply function by calling it two times.
    let mult1 = multiply(list1, 3);
    let mult2 = multiply(list2, 2);

    // Build a string to display to the user.
    let output =
            "The number of even numbers in count1 is " + " " + count1 + '<br>' +
            "The number of even numbers in count2 is" + " " + count2 + '<br>' +
            "The product of mult1 is " + " " + mult1 + '<br>' +
            "The product of mult2 is " + " " + mult2;

    // Display the output string for the user to see.
    document.getElementById('output').innerHTML = output;
}
function countEvens (list) {
    let totalEvens = 0
    for (let i = 0; i < list.length; i++) {
        if (list[i] % 2 == 0) {
            totalEvens++;
        }
    }
    return totalEvens;

}

function multiply(list, multiplier) {
    
    for (let i = 0; i < list.length; i++) {
        list[i] *= multiplier;
    }
    return list;
}


    

    