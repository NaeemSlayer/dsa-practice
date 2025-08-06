// Video 3: Loop
// —Loop
// —For loop
// Q. print n hello worlds
// for (let index = 0; index < 10; index++) {
//   console.log("hello World");
// }
// Q. One to n number and vice versa
// for (let index = 1; index <= 10; index++) {
//   console.log(index);
// }
// for (let index = 10; index > 0; index--) {
//   console.log(index);
// }
// Q. Sum of n natural numbers and factorial of number
// let pr = prompt("till which number u want to sum?");
// if (pr === null) {
//   console.log("cancelled");
// } else {
//   let n = Number(pr);
//   if (isNaN(n)) {
//     console.log("invalid input");
//   } else {
//     if (n > 0) {
//       let sum = 0;
//       for (let i = 1; i <= n; i++) {
//         sum = sum + i;
//       }
//       console.log(sum);
//     } else {
//       console.log("enter positive or more than 0");
//     }
//   }
// }
// let pr = prompt("till which number u want factorial?");
// if (pr === null) {
//   console.log("cancelled");
// } else {
//   let n = Number(pr);
//   if (isNaN(n)) {
//     console.log("invalid input");
//   } else {
//     if (n > 0) {
//       let fact = 1;
//       for (let i = 1; i <= n; i++) {
//         fact = fact * i;
//       }
//       console.log(fact);
//     } else {
//       console.log("enter positive or more than 0");
//     }
//   }
// }
// // optimized factorial
// let n = +prompt("till which number you want factorial?");
// if (!n || n < 0 || isNaN(n)) {
//   console.log("invalid input");
// } else {
//   console.log([...Array(n).reduce((a, _, i) => a * (i + 1), 1)]);
// }
// Q. Factors of number
// let n = +prompt("till which number you want factor?");
// if (!n || n < 0 || isNaN(n)) {
//   console.log("invalid input");
// } else {
//   for (let i = 1; i <= Math.floor(n / 2); i++) {
//     if (n % i === 0) {
//       console.log(i);
//     }
//   }
//   console.log(n);
// }

// Q. Prime number
// let n = +prompt("check if prime?");
// if (!n || n < 0 || isNaN(n)) {
//   console.log("invalid input");
// } else {
//   let prime = true;
//   for (let i = 2; i <= Math.floor(n / 2); i++) {
//     if (n % i === 0) {
//       prime = false;
//       break;
//     }
//   }
//   console.log(prime);
// }
// —break and continue
// —while loop
// Q.sum of digit
// let n = +prompt("enter numbers to sum");
// if (!n || n < 0 || isNaN(n)) {
//   console.log("invalid input");
// } else {
//   let sum = 0;
//   while (n > 0) {
//     let rem = n % 10;
//     sum = sum + rem;
//     n = Math.floor(n / 10);
//   }
//   console.log(sum);
// }
// Q.reverse of number
// let n = +prompt("enter numbers to reverse");
// if (!n || n < 0 || isNaN(n)) {
//   console.log("invalid input");
// } else {
//   let rev = 0;
//   while (n > 0) {
//     let rem = n % 10;
//     rev = rev*10 + rem;
//     n = Math.floor(n / 10);
//   }
//   console.log(rev);
// }
// Q.strong number
// let n = +prompt("enter numbers to check if strong number");
// if (!n || n < 0 || isNaN(n)) {
//   console.log("invalid input");
// } else {
//   let sum = 0;
//   let copy = n;
//   while (n > 0) {
//     let rem = n % 10;
//     let fact = 1;
//     for (let i = 1; i <= rem; i++) {
//       fact = fact * i;
//     }
//     sum = sum + fact;
//     n = Math.floor(n / 10);
//   }
//   if (copy === sum) {
//     console.log("number is strong");
//   }
// }
// —do-while
// Q. Repeat hello
// let i = 0;
// do {
//   console.log("Hello");
//   i++;
// } while (i < 5);

// Q. Guess the number
// let random = Math.floor(Math.random() * 100) + 1;
// let guess = -1;

// while (guess !== random) {
//   guess = Number(prompt("Guess the number (1-100):"));

//   if (isNaN(guess) || guess < 1 || guess > 100) {
//     alert("Invalid input. Enter a number between 1 and 100.");
//     continue;
//   }

//   if (guess > random) {
//     alert("Too high. Try again.");
//   } else if (guess < random) {
//     alert("Too low. Try again.");
//   } else {
//     alert("🎉 Congrats! The number was: " + guess);
//   }
// }

// Q. sasta Calculator
let input = +prompt(
  "Select a function that you want to do: \n 1:Add \n 2: Subtract \n 3:Multiply \n 4:Divide"
);

if (!input || isNaN(input) || input < 1 || input > 4) {
  console.log("invlid input");
} else {
  let num1 = +prompt("Enter 1st number:");
  let num2 = +prompt("Enter 2nd number:");

  if (isNaN(num1) || isNaN(num2)) {
    console.log("Invalid numbers");
  } else {
    let result;
    switch (input) {
      case 1:
        result = num1 + num2;
        break;
      case 2:
        result = num1 - num2;
        break;
      case 3:
        result = num1 * num2;
        break;
      case 4:
        result = num2 !== 0 ? num1 / num2 : "cannot divide by zero";
        break;
    }
    alert(`Result is: ${result}`);
  }
}
