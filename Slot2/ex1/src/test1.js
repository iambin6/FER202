let add = (a, b) => a + b;
console.log(add(10, 20));  
let greet = (name, timeOfDay) => {
    console.log(`Good ${timeOfDay}, ${name}!`);
};
greet("Alice", "morning");
greet("Bob", "evening");

let square = num => {
    return num * num;
};

console.log(square(5));
console.log(square(10));

let sayHello = () => {
    console.log("Hello, World!");
};

sayHello();

let person = {
    name: "Bin",
    age: 10000000000000,
    greet: function() {
        console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old.`);
    }
};
person.greet();