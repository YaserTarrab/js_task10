// 1) Task

let numbers = [10, 15, 20, 25];
let sum = numbers.reduce((total, num) => total + num );
console.log("Sum of values:", sum);


// 2) Task

let sayilar = [2, 4, 6, 8];
let doubled = sayilar.map(num => num * 2);
console.log("dizinin karesi:", doubled);


// 3) Task
let sayilar_1 = [5, 3, 8, 1, 4];
let siralama = sayilar_1.sort((a, b) => a - b); 
console.log("Dizinin sonucu:", siralama);


// 4) Task

let array1 = [10, 25, 60];
let array2 = [5, 12, 60];
let birlesikArray = array1.concat(array2);
console.log("Dizinin sonucu:", birlesikArray);

// 5) Task

let sayilar_2 = [3, 7, 2, 9, 1, 10];
let max = Math.max(...sayilar_2);
let min = Math.min(...sayilar_2);
console.log("Max value:", max);
console.log("Min value:", min);


// 6) Task

let sayilar_3 = [1, 2, 3, 4, 5,];
let tersi = sayilar_3.reverse();
console.log("Reversed array:", tersi);





