let age: number = 12;
let userName: string = "12";
let isGood: boolean = true;

let hobbies: string[] = ["1", "2"];

// Alias
type Person = {
  name: string;
  age: number;
};
let person: Person;
person = {
  name: "john",
  age: 12,
};

// Union types
let course: string | number = "123";

// Function & types
function add(a: number, b: number): string | number {
  return a + b;
}

function printValue(value: any) {
  console.log(value);
}

//Generics
function insertAtBeginning<T>(array: T[], value: T) {
  const newArray = [value, ...array];
  return newArray;
}
