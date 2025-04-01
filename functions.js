// Assignments and Exercises


// returns a number added to 7
function add7 (x) {
    return x + 7;
}


// function multiplies to numbers and returns them
function multiply (y, z) {
    return y*z;
}


// function capializes a string
function capitalize(inputStr){
    if (typeof inputStr === 'string'){
        return inputStr.toUpperCase();
    } else {
        return "Invalid input: Input must be a string.";
    }

}


// function returns last letter of given string
function lastletter (userString){
    if (typeof userString === 'string'){
        return userString.charAt(userString.length - 1);
    } else {
        return 'Invalid entry: entry must be a string.';
    }
}

console.log(add7(4));
console.log(multiply(5, 6));
console.log(capitalize('carti'));
console.log(lastletter('slatt'));