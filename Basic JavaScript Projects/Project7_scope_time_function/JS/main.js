var X = 20; //Defined a variable that is global
function Add_numbers_1() { //Created a function
    document.write(5 + X + "<br>"); //Display the answer
}
function Add_numbers_2() { //Created a function
    document.write(X + 50); //Display the answer
}
Add_numbers_1(); //Function 1
Add_numbers_2(); //Function 2

document.write("<br />"); //Go down a line

function Addition_numbers_1() { //Created a function
    var y = 15; //Defined a variable that is local
    document.write (40 + y + "<br>"); //Write the answer
}
function Addition_numbers_2() { //Created a function
    document.write(y + 60); //Display the answer
}
Addition_numbers_1();
Addition_numbers_2();

document.write("<br />");

function get_Date() { //Created a function
    if (new Date().getHours() < 18) {  //Using the if condition 
        document.getElementById("Greeting").innerHTML = "How are you today?"; //If it is less than 18 display "How are you today?"
    }
}

function old_Enough() {  //Created a function
    var age = 17; //Defined a variable
    if (age >= 16) {  //Using the if statement if you're younger than 16 you can't drive
        document.getElementById("Driving").innerHTML = "You are old enough to drive."; //Display You are old enough to drive if 16 or older
    }
}

function Adultstuff_Function() {  //Created a function
    Age = document.getElementById("Age").value;  //Created Age id to find the value of a persons age.
    if (Age >= 18) {  //If a person is 18 or older they can vote
        Vote = "You are old enough to vote!";
    }
    else {  //Using the else statement if they are too young
        Vote = "You are too young to vote."; 
    }
    document.getElementById("Are_you_old_enough_to_vote?").innerHTML = Vote; //Created id to see if someone is old enough to vote
}

function Clock_function() { //Created a function
    var Time = new Date().getHours(); //Defined a variable to get the date and time
    var Reply; //Defined a variable
    if (Time < 12 == Time > 0) {   //If it is before 12 noon display it is morning time
        Reply = "It is morning time!";  //Reply It is morning time
    }
    else if (Time >= 12 == Time < 18) {  //Using else if to say it is afternoon if it is between 12 and 6.
        Reply = "It is afternoon."; 
    }
    document.getElementById("Time_of_day").innerHTML = Reply;
}