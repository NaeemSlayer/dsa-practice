// // base pattern with *
// let prompt = require("prompt-sync")();
// let n = prompt("Enter a number:");
// for (i = 1; i <= n; i++) {
//   for (j = 1; j <= n; j++) {
//     process.stdout.write("* ");
//   }
//   console.log();
// }

// // right angle triangle pattern with *
// let prompt = require("prompt-sync")();
// let n = prompt("Enter a number:");
// for (i = 1; i <= n; i++) {
//   for (j = 1; j <= i; j++) {
//     process.stdout.write("* ");
//   }
//   console.log();
// }

// // right angle triangle pattern with numbers
// let prompt = require("prompt-sync")();
// let n = prompt("Enter a number:");
// for (i = 1; i <= n; i++) {
//   for (j = 1; j <= i; j++) {
//     process.stdout.write(j+ " ");
//   }
//   console.log();
// }

// // right angle triangle pattern with letters
// let prompt = require("prompt-sync")();
// let n = prompt("Enter a number:");
// for (i = 1; i <= n; i++) {
//   let ascii = 65; // A
//   for (j = 1; j <= i; j++) {
//     process.stdout.write(String.fromCharCode(ascii) + " ");
//     ascii++;
//   }
//   console.log();
// }

// // inverted right angle triangle pattern with *
// let prompt = require("prompt-sync")();
// let n = prompt("Enter a number:");
// for (i = 1; i <= n; i++) {
//   for (j = n; j >= i; j--) {
//     process.stdout.write("* ");
//   }
//   console.log();
// }

// // mirrored right angle triagnle pattern with *
// let prompt = require("prompt-sync")();
// let n = prompt("Enter a number:");
// for (i = 1; i <= n; i++) {
//   // inverted code
//   for (let j = 1; j <= n - i; j++) {
//     process.stdout.write("      ");
//   }
//   // star code right angle triangle
//   for (let j = 1; j <= i; j++) {
//     process.stdout.write("* ");
//   }
//   console.log(); // for line break
// }

// // Isosceles Triangle pattern with *
// let prompt = require("prompt-sync")();
// let n = +prompt("Enter a number:");
// for (let i = 1; i <= n; i++) {
//   // leading spaces
//   for (let j = 1; j <= n - i; j++) {
//     process.stdout.write(" ");
//   }
//   // stars
//   for (let j = 1; j <= i; j++) {
//     process.stdout.write("* ");
//   }
//   console.log(); // for line break
// }

// Hollow Isosceles Triangle
// let prompt = require("prompt-sync")();
// let n = +prompt("Enter height: ");
// for (let i = 1; i <= n; i++) {
//   // print leading spaces
//   for (let j = 1; j <= n - i; j++) {
//     process.stdout.write(" ");
//   }

//   // print stars and spaces
//   for (let j = 1; j <= 2 * i - 1; j++) {
//     if (j === 1 || j === 2 * i - 1 || i === n) {
//       process.stdout.write("*");
//     } else {
//       process.stdout.write(" ");
//     }
//   }

//   console.log();
// }

// Upside-Down Solid Isosceles Triangle
// let prompt = require("prompt-sync")();
// let n = +prompt("Enter height: ");
// for (let i = n; i >= 1; i--) {
//   // print leading spaces
//   for (let j = 1; j <= n - i; j++) {
//     process.stdout.write(" ");
//   }

//   // print stars
//   for (let j = 1; j <= i; j++) {
//     process.stdout.write("* ");
//   }

//   console.log();
// }

//  Hollow Upside-Down Isosceles Triangle
// let prompt = require("prompt-sync")();
// let n = +prompt("Enter height: ");

// for (let i = 0; i < n; i++) {
//   // print leading spaces
//   for (let j = 0; j < i; j++) {
//     process.stdout.write(" ");
//   }

//   // print stars and spaces
//   for (let j = 0; j < 2 * (n - i) - 1; j++) {
//     if (j === 0 || j === 2 * (n - i) - 2 || i === 0) {
//       process.stdout.write("*");
//     } else {
//       process.stdout.write(" ");
//     }
//   }

//   console.log();
// }

// Diamond Shape (Solid)
// let prompt = require("prompt-sync")();
// let n = +prompt("Enter half-height (e.g., 5): ");

// // upper triangle
// for (let i = 1; i <= n; i++) {
//   for (let j = 1; j <= n - i; j++) {
//     process.stdout.write(" ");
//   }
//   for (let j = 1; j <= i; j++) {
//     process.stdout.write("* ");
//   }
//   console.log();
// }

// // lower triangle
// for (let i = n - 1; i >= 1; i--) {
//   for (let j = 1; j <= n - i; j++) {
//     process.stdout.write(" ");
//   }
//   for (let j = 1; j <= i; j++) {
//     process.stdout.write("* ");
//   }
//   console.log();
// }

// Hollow Diamond
// let prompt = require("prompt-sync")();
// let n = +prompt("Enter half-height: ");

// // Upper half
// for (let i = 1; i <= n; i++) {
//   // leading spaces
//   for (let j = 1; j <= n - i; j++) {
//     process.stdout.write(" ");
//   }
//   // stars and spaces
//   for (let j = 1; j <= 2 * i - 1; j++) {
//     if (j === 1 || j === 2 * i - 1) {
//       process.stdout.write("*");
//     } else {
//       process.stdout.write(" ");
//     }
//   }
//   console.log();
// }

// // Lower half
// for (let i = n - 1; i >= 1; i--) {
//   // leading spaces
//   for (let j = 1; j <= n - i; j++) {
//     process.stdout.write(" ");
//   }
//   // stars and spaces
//   for (let j = 1; j <= 2 * i - 1; j++) {
//     if (j === 1 || j === 2 * i - 1) {
//       process.stdout.write("*");
//     } else {
//       process.stdout.write(" ");
//     }
//   }
//   console.log();
// }

// // X pattern
// let prompt = require("prompt-sync")();
// let n = +prompt("Enter a number to print x pattern: ");
// for (let i = 1; i <= n; i++) {
//   for (let j = 1; j <= n; j++) {
//     if (i == j || i + j == n + 1) {
//       process.stdout.write("* ");
//     } else {
//       process.stdout.write("  ");
//     }
//   }
//   console.log();
// }

// // V pattern
// let prompt = require("prompt-sync")();
// let n = +prompt("Enter a number to print v pattern: ");
// for (let i = 1; i <= n; i++) {
//   for (let j = 1; j <= 2 * n - 1; j++) {
//     if (i == j || i + j == 2 * n) {
//       process.stdout.write("* ");
//     } else {
//       process.stdout.write("  ");
//     }
//   }
//   console.log();
// }

// // inverted V pattern
// let prompt = require("prompt-sync")();
// let n = +prompt("Enter a number to print v pattern: ");
// for (let i = 1; i <= n; i++) {
//   for (let j = 1; j <= 2 * n - 1; j++) {
//     if (j == n - i + 1 || j == n + i - 1) {
//       process.stdout.write("* ");
//     } else {
//       process.stdout.write("  ");
//     }
//   }
//   console.log();
// }
