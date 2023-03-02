function full_Sentence() {  //Created a function
    var part_1 = "This is ";  //Defined a variable
    var part_2 = "my Javascript ";  //Defined a variable
    var part_3 = "assignment for "; //Defined a variable
    var part_4 = "concatenate sentences."; //Defined a variable
    var whole_sentence = part_1.concat(part_2, part_3, part_4);  //Defined a variable
    document.getElementById("Concatenate").innerHTML = whole_sentence;  //Using concatenate function to put a sentence together with all of the variables.
}

function slice_Method() { //Created a function
    var Sentence = "I am learning JavaScript slice method at The Tech Academy."  //Defined a variable
    var Section = Sentence.slice(14,24);  //Defined a variable
    document.getElementById("Slice").innerHTML = Section;  //Using the slice method to display a section of the sentence
}

function caps_Method() { //Created a function
    var text = document.getElementById("Uppercase").innerHTML;  //Defined a variable
    document.getElementById("Uppercase").innerHTML = text.toUpperCase(); //Using the toUppercase method to capitalize all letters
}

var find = "I need to find this word here, in this text.";  //Defined a variable
var wordIndex = find.indexOf("word");  //Defined a variable
console.log(wordIndex);  //Check the console to see where "word" shows up.

function string_Method() { //Created a function
    var Y =182;  //Defined a variable
    document.getElementById("Numbers_to_string").innerHTML = Y.toString(); //Return 182 as a string
}

function precision_Method() {  //Created a function
    var X = 1234.9876355321;  //Defined a variable
    document.getElementById("Precision").innerHTML = X.toPrecision(10);  //Using the precision method to return the number with 10 digits 
}

function primitive_Method() {  //Created a function
    var prim = 20;  //Defined a variable
    var p = prim.valueOf();  //Defined a variable
    document.getElementById("Primitive").innerHTML = p;  //The valueOf method returned the primitive value which is 20
}