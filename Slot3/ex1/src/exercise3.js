// Đối tượng person mẫu
const person = {
	name: "Costas",
	address: {
		street: "Lalaland 12",
	}
};

// Destructuring để lấy street và city (city mặc định "Unknown City")
const { address: { street, city = "Unknown City" } } = person;

console.log(street);
console.log(city);
