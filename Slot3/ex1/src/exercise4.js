const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

// Destructuring: lấy first, bỏ qua phần tử 2, lấy third (mặc định 0), còn lại là restAges
const [first, , third = 0, ...restAges] = ages;

console.log(first);
console.log(third);
console.log(restAges);  // [16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32]
const sumRest = (...num) => num.filter(n => n %2 === 0).reduce((acc, n) => acc + n, 0);
console.log(sumRest(...restAges));