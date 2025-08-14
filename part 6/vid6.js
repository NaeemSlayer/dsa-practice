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

// // Leetcode 26. Remove Duplicates from Sorted Array
// /**
//  * @param {number[]} nums
//  * @return {number}
//  */
// var removeDuplicates = function (nums) {
//     let j = 1
//     for (let i = 0; i < nums.length - 1; i++) {
//         if (nums[i] != nums[i + 1]) {
//             nums[j] = nums[i + 1]
//             j++
//         }
//     }
//     return j
// };

// // Q.Merge sorted array (video appraoch using extra space)
// let arr1 = [1, 3, 5];
// let arr2 = [2, 4, 6];
// let merge = new Array(arr1.length + arr2.length);
// let i = (j = k = 0);
// while (i < arr1.length && j < arr2.length) {
//   if (arr1[i] < arr2[j]) {
//     merge[k++] = arr1[i++];
//   } else {
//     merge[k++] = arr2[j++];
//   }
// }
// while (j < arr2.length) {
//   merge[k++] = arr2[j++];
// }
// while (i < arr1.length) {
//   merge[k++] = arr1[i++];
// }
// console.log(merge);

// // LeetCode "Merge Sorted Array" problem (No. 88)
// /**
//  * @param {number[]} nums1
//  * @param {number} m
//  * @param {number[]} nums2
//  * @param {number} n
//  * @return {void} Do not return anything, modify nums1 in-place instead.
//  */
// var merge = function (nums1, m, nums2, n) {
//     let i = m - 1
//     let j = n - 1
//     let k = m + n - 1
//     while (j >= 0) {
//         if (i >= 0 && nums1[i] > nums2[j]) {
//             nums1[k] = nums1[i]
//             i--
//         } else {
//             nums1[k] = nums2[j]
//             j--

//         }
//         k--
//     }
// };

// // 121. Best Time to Buy and Sell Stock
// /**
//  * @param {number[]} prices
//  * @return {number}
//  */
// var maxProfit = function (prices) {
//   let maxProfit = 0;
//   let min = prices[0];
//   for (let i = 0; i < prices.length; i++) {
//     if (prices[i] < min) min = prices[i];
//     let profit = prices[i] - min;
//     maxProfit = Math.max(maxProfit, profit);
//   }
//   return maxProfit;
// };

// // 122. Best Time to Buy and Sell Stock II
// /**
//  * @param {number[]} prices
//  * @return {number}
//  */
// var maxProfit = function (prices) {
//     let profit = 0
//     for (let i = 1; i < prices.length; i++) {
//         if (prices[i] > prices[i - 1]) {
//             profit += prices[i] - prices[i - 1]
//         }
//     }
//     return profit
// };

// Q.Sort the color
// Q.Maximum Subarray /kadane's algorithm
// Q.Majority Element/ Moore's voting algo
// Q.Trapping Rain water
