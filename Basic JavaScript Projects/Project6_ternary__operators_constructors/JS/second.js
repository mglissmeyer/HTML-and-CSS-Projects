function Age_function () {
   var Age , Can_vote;
   Age = document.getElementById("Age").ariaValueMax;
    Can_vote = (Age < 18) ? "You are too young":"You can vote";
    document.getElementById=("Vote").innerHTML = Can_vote + " you can vote";
}