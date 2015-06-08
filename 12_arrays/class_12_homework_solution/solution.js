// Turn the following statements into javascript statements and functions. 
// These are not in context to any html or css.


// 1. Write a statement that makes the background of a div with the 
// id colorMe <div id="colorMe"> red.

document.getElementById('colorMe').onclick = makeItRed;

//2. Write a function that logs in the console 7 as a string. Take the same string 
// and make it a number - also log the result. Finally, add them together and log 
// the result.

function sevenString(){
    var seven = '7';
    console.log(seven); 
    var numSeven = parseInt(seven);
    console.log(numSeven);
    var addBoth = seven + numSeven;
    console.log(addBoth);
}

sevenString();

//3. Write a function that returns the string "foo".

function foo(){
    return('foo');
}

// 4. Write a function that logs to the console "Today is" and a day of the week that 
// is passed to your function in an argument (dayName). Call your function and make 
// it run.

function dayOfTheWeek(dayName){
    console.log("Today is " + dayName);
}

dayOfTheWeek('Saturday');

// 5. Write a function that takes two number arguments (num1 and num2). The function 
// should add those 2 numbers and return the result.

function sumAndPrint(num1,num2) {
    var total = num1 + num2;
    return total;
}

sumAndPrint(2, 4);

// 6. Write a function that takes two number arguments (num1 and num2). The function 
// should multiply those 2 numbers and return the result.

function multiply(num1,num2) {
    var total = num1 * num2;
    return total;
}

multiply(2, 4);

// BONUS: Write a function that takes one argument (num). 
// Make the function return true if that number is even and 
// return false if it's odd.

function checkNum(num){
    if (num % 2 == 0){
        return "True";}
    else {
        return "false";
    }
}

//If you finish all of the above, work on your final project!