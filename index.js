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
