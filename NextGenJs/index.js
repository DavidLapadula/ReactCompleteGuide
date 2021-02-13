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

// Modern syntax
class Human2 {
    gender = 'male';

    printGender = () => {
        console.log(this.gender);
    }
}

// Spread
const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5];

// Rest
function sort(...args){
    return args.filter(el => el === 1);
}

// Destructuring
const numbers = [1, 2, 3];
[num1, num2] = numbers; // order matters

const obj3 = {lName: 'smith'};
{lName} = obj3;

// Reference types 
const testPerson = {
    name: 'john'
};

const testPerson2 = {
    ...person
};

person.name = 'jane'; // testPerson2 untouched because spread makes deep copy

// Array functions


