export function Exercise2() {
    const numbers = [1, -3, 2, 8, -4, 5];
    const sum = numbers.reduce((acc, curr) => acc + curr, 0);
    const nameArray = ['Alice', 'Bob', 'Charlie', 'David', 'Bin', 'Nam', 'An', 'Long', 'Chu', 'Hoa'];
    const people = [
        {id: 1, name: 'Alice', age: 20 },
        {id: 2, name: 'Bob', age: 12 },
        {id: 3, name: 'Charlie', age: 19 },
        {id: 4, name: 'David', age: 15 },
        {id: 5, name: 'Bin', age: 20 },
        {id: 6, name: 'Nam', age: 19 },
        {id: 7, name: 'An', age: 18 },
        {id: 8, name: 'Long', age: 17 },
        {id: 9, name: 'Chu', age: 21 },
        {id: 10, name: 'Hoa', age: 22 },
    ];
    const isTeen = person => person.age >= 13 && person.age <= 19;
    const teenList = people.filter(isTeen);
    console.log("Danh sach teen: ", teenList);
    const countTeen = teenList.length;
    console.log("So luong thanh nien: ", countTeen);
    const averageAge = people.reduce((acc, person) => acc + person.age, 0) / people.length;
    console.log("Tuoi trung binh: ", averageAge);
    return (
        <div>
            <p>Cac phan tu trong mang la: </p>
            <ul>
                {numbers.map((number, index) => (
                    <li key={index}>{number}</li>
                ))}
            </ul>
            <p>Tong cac phan tu trong mang la: <strong>{sum}</strong></p>
            <p>So luong phan tu la: {numbers.length}</p>
            <p>Hien thi danh sach ten tang dan</p>
            <ul>
                {nameArray.sort().map((name, index) => (
                    <li key={index}>{name}</li>
                ))}
            </ul>
            <p>Danh sach thanh nien (teen) trong mang: </p>
            <ul>
                {teenList.map(
                    (person) => (<li key={person.id}>{person.name} - {person.age} tuoi</li>)
                )}
            </ul>
            <p>So luong thanh nien la: {countTeen}</p>
            <p>Tuoi trung binh la: {averageAge}</p>
        </div>
    );
}