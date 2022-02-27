// Import stylesheets
import './style.css';

// 1

// const hinanshi = {
//   name: 'rekha',
//   age: 20,
// };

// const devanshi = {
//   ...hinanshi,
//   age: hinanshi.age + 2,
// };

// console.log(devanshi);
// console.log(hinanshi === devanshi);

//2

// let arrayOfColors = ['red', 'pink', 'green', 'yellow', 'blue'];

// let NewArrayOfColors = [...arrayOfColors, 'black', 'grey'];
// console.log(NewArrayOfColors);

// console.log(arrayOfColors === NewArrayOfColors);

//3

// const birthday = (hinanshi) => ({ ...hinanshi, age: hinanshi.age + 1 });

// const hinanshi = {
//   name: 'hinanshi',
//   age: 20,
// };

// const hinanshiAfterBirthday = birthday(hinanshi);
// console.log(hinanshiAfterBirthday);

//array-filter

// const words = ['hello', 'hey', 'coocoo', 'bonjour'];
// console.log(words.filter((word) => word.length > 4));

// const numbers = [1, 4, 20, 83, 35, 14];
// const checkNumber = (num) => num > 10;

// console.log(numbers.filter(checkNumber));

// console.log(numbers.map((num) => num + 2));

// console.log(
//   numbers.map((num) => {
//     num;
//   })
// );

// const numbers = [1, 3, 5, 2, 22, 1, 9];
// const oddNums = numbers.filter((num) => num % 2 !== 0);
// console.log(oddNums);
// const evenNums = numbers.filter((num) => num % 2 === 0);
// console.log(evenNums);

// const sumOfOdds = oddNums.reduce(
//   (previousValue, currentValue) => previousValue + currentValue
// );
// console.log(sumOfOdds);

// const sumOfEvens = evenNums.reduce(
//   (previousValue, currentValue) => previousValue + currentValue
// );
// console.log(sumOfEvens);

// const evenOddObject = (sumOfOdds, sumOfEvens) => ({
//   oddSum: sumOfOdds,
//   evenSum: sumOfEvens,
// });

// console.log(evenOddObject);

// log in with id and name
// const logWithName = (msg) => `hinanshi says ${msg}`;
// const logWithId = (msg) => `ID: 34567 :: ${msg}`;
// const logWithIdAndName = (msg) => logWithId(logWithName(msg));

// console.log(logWithIdAndName('she is a star'));

//hw

//given an array of integers
// const numbers = [1, 3, 6, 33, 73, 13, 10, 34, 9, 0, 20];

//1 find the sum of all odd numbers
// const oddNums = numbers.filter((num) => num % 2 !== 0);
// const oddSum = oddNums.reduce(
//   (previousVal, currentVal) => previousVal + currentVal
// );

//2 find the sum of all numbers at odd indices
// const numsAtOddIndices = numbers.filter((num, index) => index % 2 !== 0);
// console.log(numsAtOddIndices);

//3 find the biggest number in the array
// const biggestNumber = numbers.reduce((previousVal, currentVal) =>
//   previousVal > currentVal ? previousVal : currentVal
// );

// console.log(biggestNumber);

//4 find the numbers divisible by 10
// const theNum = numbers.filter((num) => num % 10 === 0);
// console.log(theNum);

//5 oddNums++ and evenNums--
// console.log(
//   numbers.map((num) => {
//     if (num % 2 === 0) {
//       return num--;
//     } else {
//       return num++;
//     }
//   })
// );

// given an array of strings
// const stringsArr = ['apple', 'orange', 'mango', 'papaya', 'mng'];

//1 find the number of strings with similar no.of chars

//2 strings with vowels
// const stringsWithVowels = stringsArr.filter((str) =>
//   str.includes('a', 'e', 'i', 'o', 'u')
// );
// console.log(stringsWithVowels);

//3 array of objects with key: item and value: no of chars in that string
// [{apple: 5}, {orange: 6}, {mango: 5}, {papaya: 6}, {mng: 3}]

// const arrOfObjs = stringsArr.map((str) => ({ name: str, length: str.length }));
// console.log(arrOfObjs);

//THE ONE HOMEWORK

// const add = (num1) => (num2) => num1 + num2;
// console.log(add(2)(3));

// const compose =
//   (...funcs) =>
//   (value) =>
//     f2(f1(value));

// const increment = (num) => num + 1;
// const square = (num) => num * num;
// const incrementThenSquare = (num) => compose(increment(square(num)));

// console.log(compose(2));
