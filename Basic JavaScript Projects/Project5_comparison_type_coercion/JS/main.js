function my_Function() {  //Created a function
    document.getElementById("Test").innerHTML = 0/0;  //Checking to see if 0/0 is a number
}

function next_Function() {  //Created a function
    document.getElementById("Testing").innerHTML = isNaN('This is a string'); //Checking to see if its a number
}

function another_Function() {  //Created a function
    document.getElementById("Bond").innerHTML = isNaN('007'); //Checking to see if its a number
}

function fourth_Function() { //Created a function
    document.getElementById("Positive").innerHTML = 5E500; //Testing to see if it is a positive infinity
}
function fifth_Function() {  //Created a function
    document.getElementById("Negative").innerHTML = -5E500; //Testing to see if its a negative infinity
}

document.write(10 > 2); //Display if 10 is greater than 2 with a true or false answer

document.write("<br>"); // move down a line

document.write(10 < 2); //Display the answer with true or false
document.write("<br>"); // move down a line

console.log(5 + 5); //Use dev tools to see the answer

console.log(10 < 5); //Use dev tools to see the answer

document.write(10 == 10); //Checking to see if the data is the same on both sides
document.write("<br>"); // move down a line
document.write(10 == 5); //Checking to see if the data is the same on both sides
document.write("<br>"); // move down a line
x = 15; //Defined a variable
y = 15; //Defined a variable
document.write(x === y); //Checking if the data types and values are the same with true or false answers
document.write("<br>"); // move down a line
a = 10; //Defined a variable
b = "12"; //Defined a variable
document.write(a === b); //Checking if the data types and values are the same with true or false answers
document.write("<br>"); // move down a line
c = 1; //Defined a variable
d = "1"; //Defined a variable
document.write(c === d); //Checking if the data types and values are the same with true or false answers
document.write("<br>"); // move down a line
e  = 3; //Defined a variable
f = 4; //Defined a variable
document.write(e === f); //Checking if the data types and values are the same with true or false answers
document.write("<br>"); // move down a line
document.write(10 > 8 && 15 > 12); //Use AND to see if the values are the same to get true or false answer
document.write("<br>"); // move down a line
document.write(10 < 5 && 10 > 6); //Use AND to see if the values are the same to get true or false answer
document.write("<br>"); // move down a line
document.write(4 > 1 || 10 < 3); //Use OR to see if one or both values are true to get true or false answer
document.write("<br>"); // move down a line
document.write(2 > 8 || 8 > 23); //Use OR to see if one or both values are true to get true or false answer

function not_Function() { //Created a function
    document.getElementById("Not").innerHTML = !(20 > 10); //Use NOT to see if something is true
}

function reverse_Function() { //Created a function
    document.getElementById("Double").innerHTML = !(5 > 10); //Use NOT with a double negative to get the answer to be true
}