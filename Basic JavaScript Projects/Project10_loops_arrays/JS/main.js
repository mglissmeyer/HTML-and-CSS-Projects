function Call_Loop() {
    var birthdays = "";
    var X = 0;
    while (X < 31) {
        birthdays += "<br>" + X;
        X++;
    }
    document.getElementById("Loop").innerHTML = birthdays;
}

function length_Function() {
let text = "My name is Mike.";
let length = text.length;
document.getElementById("demo").innerHTML = length;
}

var Instruments = ["Guitar", "Drums", "Piano", "Bass", "Violin", "Trumpet", "Flute"];
var Content = "";
var y;
function for_Loop() {
    for (y = 0; y < Instruments.length; y++) {
        Content += Instruments [y] + "<br>";
    }
    document.getElementById("List_of_Instruments").innerHTML = Content;
}

function array_Function() {
    var basketball_Players = [];
    basketball_Players[0] ="point guard";
    basketball_Players[1]= "shooting guard";
    basketball_Players[2] = "small forward";
    basketball_Players[3] = "power forward";
    basketball_Players[4] = "center";
    document.getElementById("Array").innerHTML = "My favorite position in basketball is " + basketball_Players[1] + ".";
}

function constant_function() {
    const Sport_Shoe = {type: "basketball shoe", brand:"Jordan", color:"black"};
    Sport_Shoe.color = "red";
    Sport_Shoe.price = "$200";
    document.getElementById("Constant").innerHTML = "The cost of the " + Sport_Shoe.color +" " + Sport_Shoe.brand + " " + Sport_Shoe.type + " is " + Sport_Shoe.price;
}

var X = 30;
document.write(X);
{
    let X = 34;
    document.write("<br>" + X);
}
document.write("<br>" + X);


function random_Function() {
    return Math.floor(Math.random() * 11);
}

function showrandom_Function() {
    document.getElementById("random").textContent = random_Function();
}

function car_Function() {
let car = {
    make: "Ford ",
    model: "F-150 ",
    year: "2022 ",
    color: "White ",
    description : function() {
        return "The car is a " + this.year + this.color + this.make + this.model;
    }
};
document.getElementById("Car_Object").innerHTML = car.description();
}
