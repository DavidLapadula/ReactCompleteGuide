// Arrow fn syntax
const myFunc = (string) => {
    console.log(string)
}; 

// Exactly 1 argument syntax
const myFunc2 = string => {
    console.log(string)
}; 

// Just a one line return
const myFunc3 = number => number * 2; 

// Class
class Human {
    constructor() {
        this.gender = "Male";
    }
        
    printGender() {
        console.log(this.gender);
    }
    
}

class Person extends Human {
    constructor() {
        super();
        this.name = "David";
    }

    printName() {
        console.log(this.name);
    }
}

const david = new Person();
david.printName();
david.printGender();