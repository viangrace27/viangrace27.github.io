
    
/* Defining Table
 * Input: no user input
 * Processing: Test the addEnds and getMiddle functions by calling them.
 * Output: The values returned from the addEnds and getMiddle functions.
 */
function test() {
    let list1 = [ 17, 8, 9, 5, 20 ];
    let list2 = [ 12, 4, 8, 15, 17, 5, 20, 11 ];

    // Test the addEnds function by calling it two times.
    let sum1 = addEnds(list1);
    let sum2 = addEnds(list2);

    // Test the getMiddle function by calling it two times.
    let mid1 = getMiddle(list1);
    let mid2 = getMiddle(list2);

    // Build a string to display to the user.
    let output =
            "The sum of the end arrays of list1 is" + " " + sum1 + '<br>'+ 
            "The sum of the end arrays of list2 is" + " "+ sum2 + '<br>' +
            "The middle value of list1 is" + " " + mid1 + '<br>' +
            "The middle value of list2 is" + " " + mid2;

    // Display the output string for the user to see.
    document.getElementById('output').innerHTML = output;
}
function addEnds(list) {
    return list[0] + list[list.length-1];
}

function getMiddle(list) {
    if (list.length % 2 == 0) {
        return (list[list.length / 2] + list[list.length / 2 -1]) /2;
    
    } else {
}   
    return list[Math.floor((list.length - 1) / 2)];
}