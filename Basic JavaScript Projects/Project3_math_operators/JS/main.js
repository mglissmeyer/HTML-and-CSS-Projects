function addition_Function() {  //Created a function for addition
    var addition = 5 + 5;  //Defining a variable
    document.getElementById("Math").innerHTML = "5 + 5 = " + addition;  //Calling my addition function
}

function subtraction_Function() {  //Created a function for subtraction
    var Subtraction = 10 - 5;  //Defining a variable
    document.getElementById("Math").innerHTML = "10 - 5 = " + Subtraction;  //Calling my subtraction function
}

function multiplication() {  //Created a multiplication function
    var Multiply = 7 * 7;  //Defining a variable
    document.getElementById("Math").innerHTML = "7 * 7 = " + Multiply;  //Called my function
}

function division() {  //Created a division function
    var divide = 81 / 9;  //Defined a variable
    document.getElementById("Math").innerHTML = "81 / 9 = " + divide; //Called my function
}

function more_Math() {  //Created a funtion for multiple operators
    var simple_Math = (4 + 5) * 5 / 5 - 3;  //Defining my variable
    document.getElementById("Math").innerHTML = "4 plus 5, multiplied by 5,divided by 5 and then subtracted by 3 equals " + simple_Math;  //Called my function
}

function modulous_Operator() {  //Created a funtion for division with remainders
    var extra_Math = 15 % 6; //Defined my variable
    document.getElementById("Math").innerHTML = "15 / 6 = 2 and a remainder of: " + extra_Math;  //Called my funtion
}

function negation_Operator() {  //Created a funtion for opposite numbers
    var x = 15;  //Defined a variable
    document.getElementById("Math").innerHTML = -x;  //Called the funtion
}

var g = 8;  //Defined a variable
g++;  //Variable g will add 1 to it
document.write (g);  //Display the answer 9 

var f = 10;  //Defined a variable
f--;  //Variable f will subtract 1 from it
document.write (f);  //Displays the answer 9

window.alert(Math.random() * 100);  //Alert message will come up with a random number between 0 and 100


