var Person = function(firstname, lastname) {
    
    this.firstname = firstname;
    this.lastname = lastname;
    
}

function logPerson1() {
    var john = new Person('John', 'Doe');
    console.log(john);
}

logPerson1();

//DEPENDENCY INJECTION - GIVING A FUNCTION AN OBJECT AS A PARAMETER
function logPerson(obj) {
    console.log(obj);
}

var john = new Person('John', 'Doe');
logPerson(john);