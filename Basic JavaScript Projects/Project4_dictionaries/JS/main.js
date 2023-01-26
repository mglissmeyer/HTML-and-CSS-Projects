function my_Dictionary() {  //Created a function
    var Animal = {  //Defined a variable
        Species:"Cat",  //Created a KVP
        Color:"White",  //Created a KVP
        Breed:"British Shorthair",  //Created a KVP
        Age:10,  //Created a KVP
        Sound:"Meow!"  //Created a KVP
    };
    delete Animal.Sound;  //Deleted the animal sound so the value would come back undefined
    document.getElementById("Dictionary").innerHTML = Animal.Sound;
}