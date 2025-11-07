// // Hàm tính tổng các số hợp lệ
// function sum(...nums) {
// 	return nums.reduce((acc, val) => {
// 		if (typeof val === 'number' && !isNaN(val)) {
// 			return acc + val;
// 		}
// 		return acc;
// 	}, 0);
// }

// // Hàm tính trung bình các số hợp lệ, làm tròn 2 chữ số thập phân
// function avg(...nums) {
// 	const validNums = nums.reduce((arr, val) => {
// 		if (typeof val === 'number' && !isNaN(val)) {
// 			arr.push(val);
// 		}
// 		return arr;
// 	}, []);
// 	if (validNums.length === 0) return 0;
// 	const total = validNums.reduce((acc, val) => acc + val, 0);
// 	return Number((total / validNums.length).toFixed(2));
// }

// console.log(sum(1,2,3));           // 6
// console.log(sum(1,'x',4));         // 5
// console.log(avg(1,2,3,4));         // 2.5
// console.log(avg());                // 0


//fix
let numbers = [1, 2, 3, 4, 5];
const OddNumbers = numbers.filter(n => n % 2 !== 0);
console.log(OddNumbers); // [1, 3, 5]
OddNumbers.forEach(num => console.log(num));
const sum1 = (...nums) => nums
.filter(num => typeof num === 'number' && !isNaN(num))
.reduce((acc, num) => acc + num, 0);
console.log(sum1(1, 2, 3, "abc", 4));
