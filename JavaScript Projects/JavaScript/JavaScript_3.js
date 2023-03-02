function displayType (character) {
    var characterType = character.getAttribute ("data-character-type");
    alert(characterType + " is the greatest of all time in " + character.innerHTML + " history!");
}