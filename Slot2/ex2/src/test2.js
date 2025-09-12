//1
let lst = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
lst.map(num => {
    let doubled = num * 2;
    console.log(doubled);
    return doubled;
});

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
arr.forEach(num => {
    console.log(num * 2);
});

//2
let list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let evenNumbers = lst.filter(num => num % 2 == 0);
console.log(evenNumbers);

//3
let people = [
    {id: 1, name: "Bin", age: 21},
    {id: 2, name: "Nấm", age: 25},
    {id: 3, name: "Linh", age: 19},
    {id: 4, name: "Hùng", age: 15},
    {id: 5, name: "Trung", age: 18}
];
let over18 = people.reduce((result, person) => {
    if (person.age >= 18) {
        result.push(person);
    }
    return result;
}, []);
console.log(over18);