// Spread and Rest Operators

// Rest
function sum(...numbers) {
  return numbers.reduce((a, b) => a + b, 0);
}
console.log(sum(1, 2, 3, 4)); // 10

// Spread
const arr1 = [1, 2];
const arr2 = [3, 4];
const merged = [...arr1, ...arr2];
console.log(merged); // [1, 2, 3, 4]

const companies = [
    { name: "Company One", category: "Fiance", start: 1981, end: 2004},
    { name: "Company Eight", category: "Technology", start: 2011, end: 2016}
];


const company0New = { ...companies[0], start: companies[0].start +1 };
//Hàm concatAll
function concatAll(...arrays) {
    return [].concat(...arrays);
}
console.log("companies[0]:", companies[0]);
console.log("company0New:", company0New);
console.log("concatAll([1,2],[3],[4,5]):", concatAll([1,2],[3],[4,5]));

