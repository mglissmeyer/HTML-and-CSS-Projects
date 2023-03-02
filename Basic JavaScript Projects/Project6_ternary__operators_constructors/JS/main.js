function Ride_function () {  //Created a function for ternary operators
    var Height, can_ride;  //Defined a variable
    Height = document.getElementById("Height").ariaValueMax; //Finding an element with the id Height
    can_ride = (Height < 52) ? "You are too short":"You are tall enough"; //Return you are too short or you are tall enough depending on height
    document.getElementById("Ride").innerHTML = can_ride + " to ride.";
}

function Vehicle (Make, Model, Year, Color) { //Created a function
    this.Vehicle_Make = Make; //Used keyword this to get values of new car objects
    this.Vehicle_Model = Model; //Used keyword this to get values of new car objects
    this.Vehicle_Year = Year; //Used keyword this to get values of new car objects
    this.Vehicle_Color = Color; //Used keyword this to get values of new car objects
}

var Jack = new Vehicle("Dodge", "Viper", 2020, "Red"); //Created a new object 
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black"); //Created a new object
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard"); //Created a new object
function myFunction() { //Created a new function
    document.getElementById("New_and_This").innerHTML =  //using the getelementbyid with new and this
    "Erik drives a " + Erik.Vehicle_Color + "-colored " + Erik.Vehicle_Model +
    " manufactured in " + Erik.Vehicle_Year;
}

function count_Function() {  //Created a new function
    document.getElementById("Counting").innerHTML = Count ();  //Using the getelementbyid with Counting
    function Count() {  //using the count function to return +1 to a starting number
        var Starting_point = 9; //defining a number
        function Plus_one() {Starting_point += 1;}
        Plus_one();
        return Starting_point;
    }
}