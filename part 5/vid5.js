// // taking a prompt and save in array
// let arr = new Array(5);
// for (let index = 0; index < arr.length; index++) {
//   arr[index] = +prompt("enter a value");
// }
// console.log(arr);

// // sum of n elements of an Array
// let arr = [1, 2, 3, 4, 5];
// let sum = 0;
// for (let index = 0; index < arr.length; index++) {
//   sum = sum + arr[index];
// }
// console.log(sum);

// // max from an Array
// let arr = [1, 3, 7, 8, 2, 6];
// let max = arr[0];
// for (let index = 0; index < arr.length; index++) {
//   if (max < arr[index]) {
//     max = arr[index];
//   }
// }
// console.log(max);

// // min from an Array
// let arr = [2, 3, 7, 8, 2, 6];
// let min = arr[0];
// for (let index = 0; index < arr.length; index++) {
//   if (min > arr[index]) {
//     min = arr[index];
//   }
// }
// console.log(min);

// // 2nd max of array
// let arr = [1, 2, 4, 8];
// let max = Math.max(arr[0], arr[1]);
// let sMax = Math.min(arr[0], arr[1]);

// for (let i = 2; i <= arr.length; i++) {
//   if (arr[i] > max) {
//     sMax = max;
//     max = arr[i];
//   } else if (arr[i] > sMax && max != arr[i]) {
//     sMax = arr[i];
//   }
// }
// console.log(sMax);

// // array reverse method 1
// let arr = [1, 2, 3, 4, 5];
// let temp = new Array(arr.length);
// let j = 0;
// for (let i = arr.length - 1; i >= 0; i--) {
//   temp[j] = arr[i];
//   j++;
// }
// console.log(temp);

// // array reverse method 2
// let arr = [1, 2, 3, 4, 5];
// let i = 0,
//   j = arr.length - 1;

// while (i != j) {
//   let temp = arr[i];
//   arr[i] = arr[j];
//   arr[j] = temp;
//   i++;
//   j--;
// }
// console.log(arr);

// // array sorting using 2 pointer method
// let arr = [1, 0, 1, 0, 0, 1, 1, 0];
// let i = 0,
//   j = 0;
// while (i < arr.length) {
//   if (arr[i] == 1) {
//     let temp = arr[i];
//     arr[i] = arr[j];
//     arr[j] = temp;
//     j++;
//   }
//   i++;
// }
// console.log(arr);
