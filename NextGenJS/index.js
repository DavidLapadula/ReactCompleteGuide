// Arrow fns
const myFunc = () => {
    console.log("My function", this);
}; 

myFunc(); 

// Exports
const me = {
    name: "David"
}; 

export default me; 

export const notMe = {
    name: "John"
}; 

// Classes
class Human {
    constructor(gender) {
        this.gender = gender; 
    }
    printGender() {
        console.log(`I am a ${this.gender}`);
    }
}; 

// ES6
class Person extends Human {
    constructor(name, gender) {
        super(gender)
        this.name = name;
    }
    call() {
        console.log(`Calling ${this.name}`);
    }
};

const johnDoe = new Person("John Doe", "Male"); 

// Es7
class Animal {
    type = "Dog";
    action = () => {
        console.log("Bark");
    }; 
};

// Spread and Rest Operator
const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5];

const filter = (...args) => {
    return args.filter(el => el === 1);
}; 

// Destructuring
[a, b] = ["David", "Coding"];
[c, d, ...rest] = [1, 2, 3, 4, 5]; 

const { name } = {name: "David", job: "Coding"}; 

// Reference and Primitive Type
const num1 = 1; 
const num2 = num2; 

const developer1 = {
    language: "JS"
}; 

const developer2 = developer1; 
developer2.language = "Python"; 

const developer3 = {
    ...developer1
}; 

// Array Functions
const numbers = [1, 2, 3, 4, 5]; 
const doubleNums = numbers.map(num => num * 2); 





