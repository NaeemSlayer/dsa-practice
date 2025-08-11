// Video 7 : Advance Array problems

// // Q.Left and right rotation by 1
// let array = [1, 2, 3, 4, 5]; // array bana rhe
// let copy = array[0]; // variable ke andar 1st element copy kar diya
// // loop chale ga 1st element se end hoga last element se pehle
// for (let index = 0; index < array.length - 1; index++) {
//   array[index] = array[index + 1]; // har next element ko peeche shift kar de ga
// }
// array[array.length - 1] = copy; // last position main save kia houa 1st element insert hoga
// console.log(array); // print new array

// let array = [1, 2, 3, 4, 5]; // array bana rhe
// let copy = array[array.length - 1]; // variable ke andar last element copy kar diya
// // loop chale ga 2nd last element se end hoga 1st element se pehle
// for (let index = array.length - 1; index > 0; index--) {
//   array[index] = array[index - 1]; // har current element ko age shift kar de ga
// }
// array[0] = copy; // 1st position main save kia houa last element insert hoga
// console.log(array); // print new array

// Q.Left and right rotation by k element
// approach 1 (n ** 2 time complexity)
// let array = [1, 2, 3, 4, 5];
// let k = +prompt("Rotate by how many elements?");
// k = k % array.length;
// for (let j = 0; j < k; j++) {
//   let copy = array[0];
//   for (let i = 0; i < array.length - 1; i++) {
//     array[i] = array[i + 1];
//   }
//   array[array.length - 1] = copy;
// }
// console.log(array);

// // aproach 2 (extra space)
// let array = [1, 2, 3, 4, 5];
// let temp = new Array(array.length);
// let k = +prompt("Rotate by how many elements?");
// k = k % array.length;
// for (let i = 0; i < array.length; i++) {
//   temp[i] = array[(i + k) % array.length];
// }
// console.log(temp);

// aproach 3 (without n**2 time complexity & without extra space)
// let array = [1, 2, 3, 4, 5];
// let k = +prompt("Rotate by how many elements?");
// reverse(0, k - 1);
// reverse(k, array.length - 1);
// reverse(0, array.length - 1);
// console.log(array);
// function reverse(i, j) {
//   while (i < j) {
//     let temp = array[i];
//     array[i] = array[j];
//     array[j] = temp;
//     i++;
//     j--;
//   }
// }

// Q.Remove duplicates from the sorted array
// Q.Merge sorted array
// Q.Best time to buy and sell stocks
// Q.Sort the color
// Q.Maximum Subarray /kadane's algorithm
// Q.Majority Element/ Moore's voting algo
// Q.Trapping Rain water
