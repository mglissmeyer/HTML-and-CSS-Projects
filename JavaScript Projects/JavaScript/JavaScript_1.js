function Sport_Function() {
    var Sport_Output;
    var Sports = document.getElementById("Sport_Input").value;
    var Sport_String = " is a great sport!";
    switch(Sports) {
        case "Basketball":
            Sport_Output = "Basketball" + Sport_String;
        break;
        case "Football":
            Sport_Output = "Football" + Sport_String;
        break;
        case "Soccer":
            Sport_Output = "Soccer" + Sport_String;
        break;
        case "Golf":
            Sport_Output = "Golf" + Sport_String;
        break;
        case "Tennis":
            Sport_Output = "Tennis" + Sport_String;
        break;
        default:
        Color_Output = "Please enter a sport exactly as written on the above list.";    
    }
    document.getElementById("Output").innerHTML = Sport_Output;
}

function Hello_World_Function() {
    var A = document.getElementsByClassName("Click");
    A[0].innerHTML = "The text has changed!";
}

var c = document.getElementById("ID_Name");
var ctx = c.getContext("2d");
// Create gradient
var grd = ctx.createLinearGradient(0,0,200,0);
grd.addColorStop(0,"blue");
grd.addColorStop(1,"white");
// Fill with gradient
ctx.fillStyle = grd;
ctx.fillRect(10,10,300,200);