function My_First_Function() {     //Created a function
    var str = "This is the button text!"; //Defining a variable with a button text
    document.getElementById("Button_Text").innerHTML = str;  //Using getelementbyID to call a function
}

function myFunction() { //Created a function
    var sentence = "The Tech Academy"; //defining a variable to concatenate a string
    sentence += " is a great place to learn how to code!";
    document.getElementById("Concatenate").innerHTML = sentence;
}