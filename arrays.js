// Task 1: Adding and Removing Elements

let colors = ["red", "blue", "green", "yellow"];

colors.push('purple');
console.log(colors);

let finalColor = colors.pop();
console.log(finalColor);
console.log(colors);

// Task 2: Sorting Arrays

let numbers = [43, 3, 21, 90, 5];

numbers.sort((a, b) => a - b);
console.log(numbers);

// Task 3: Applying Array Methods

let numeros = [15, 23, 36, 48, 55];
let double = numeros.map(num => num * 2);
console.log(double);

let even = numeros.filter(numero => numero % 2 == 0);
console.log(even);

let total = numeros.reduce((acc, curr) => acc + curr, 0);
console.log(total);

