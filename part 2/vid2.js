// // Understanding Conditionals | DSA with JavaScript | Part 2
// // voters age
// let ans = Number(prompt("what is your age ?"));
// if (isNaN(ans)) {
//   console.log("please enter a valid number");
// } else if (ans >= 18) {
//   console.log("U can vote");
// } else {
//   console.log("you cant vote");
// }

// // Shop discount calculator: prompts user for the final amount and applies a discount if applicable
// let amount = Number(prompt(`what is the final amount?`));
// let discount = 0;
// if (amount > 0 && amount <= 5000) {
//   discount;
// } else if (amount > 5000 && amount <= 7000) {
//   discount = 5;
// } else if (amount > 7000 && amount <= 9000) {
//   discount = 10;
// } else if (amount > 9000) {
//   discount = 20;
// }
// console.log(amount - Math.floor((discount * amount) / 100));

// // Calculate electricity bill units price
// let unit = Number(prompt(`enter ur electricity units: `)); // 700 units
// let amount = 0;
// if (unit > 400) {
//   amount = (unit - 400) * 13;
//   unit = 400;
// }
// if (unit > 200 && unit <= 400) {
//   amount += (unit - 200) * 8;
//   unit = 200;
// }
// if (unit > 100 && unit <= 200) {
//   amount += (unit - 100) * 8;
//   unit = 100;
// }
// amount += unit * 4;
// console.log(amount);

// // currency denomination
// let currencyAmount = 6688;
// if (currencyAmount >= 5000) {
//   console.log(`Rs.5000 notes: ${Math.floor(currencyAmount / 5000)}`);
//   currencyAmount = currencyAmount % 5000;
// }
// if (currencyAmount >= 1000) {
//   console.log(`Rs.1000 notes: ${Math.floor(currencyAmount / 1000)}`);
//   currencyAmount = currencyAmount % 1000;
// }
// if (currencyAmount >= 500) {
//   console.log(`Rs.500 notes: ${Math.floor(currencyAmount / 500)}`);
//   currencyAmount = currencyAmount % 500;
// }
// if (currencyAmount >= 100) {
//   console.log(`Rs.100 notes: ${Math.floor(currencyAmount / 100)}`);
//   currencyAmount = currencyAmount % 100;
// }
// if (currencyAmount >= 50) {
//   console.log(`Rs.50 notes: ${Math.floor(currencyAmount / 50)}`);
//   currencyAmount = currencyAmount % 50;
// }
// if (currencyAmount >= 20) {
//   console.log(`Rs.20 notes: ${Math.floor(currencyAmount / 20)}`);
//   currencyAmount = currencyAmount % 20;
// }
// if (currencyAmount >= 10) {
//   console.log(`Rs.10 notes: ${Math.floor(currencyAmount / 10)}`);
//   currencyAmount = currencyAmount % 10;
// }
// if (currencyAmount >= 5) {
//   console.log(`Rs.5 coin: ${Math.floor(currencyAmount / 5)}`);
//   currencyAmount = currencyAmount % 5;
// }
// if (currencyAmount >= 2) {
//   console.log(`Rs.2 coin: ${Math.floor(currencyAmount / 2)}`);
//   currencyAmount = currencyAmount % 2;
// }
// if (currencyAmount === 1) {
//   console.log(`Rs.1 coin: ${currencyAmount}`);
// }

// Video 2: Conditional Statement
// Q8. Valid Voter
// Q9. Shop discount
// Qil. Bijli bill
// Q12. INR denomination
// —Ternary operator
// — Nested ternary operator
// 1
// switch and One case handling multiple values
// —switch case can't handle float value because its precision issues
