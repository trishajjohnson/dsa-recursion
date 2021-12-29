/** product: calculate the product of an array of numbers. */

function product(nums) {
  // base case comment
  
  if(nums.length === 0 ) return 1;

  // normal base comment
  
  return nums[0] * product(nums.slice(1));
}

/** longest: return the length of the longest word in an array of words. */

function longest(words) {
  // base case
  if(words.length === 0) return 0;
  // normal case
  return Math.max(words[0].length, longest(words.slice(1)));
}

/** everyOther: return a string with every other letter. */

function everyOther(str) {
  // base case
  if(str.length === 0) return "";
  // normal case
  return str[0] + everyOther(str.slice(2));
}

/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str, idx=0) {
  let leftIdx = idx;
  let rightIdx = str.length - idx - 1;

  if(leftIdx >= rightIdx) return true;
  if(str[leftIdx] !== str[rightIdx]) return false;

  return isPalindrome(str, idx + 1)
}

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val, idx=0) {
  if(idx >= arr.length - 1) return -1;
  if(arr[idx] === val) return idx;

  return findIndex(arr, val, idx + 1);
}

/** revString: return a copy of a string, but in reverse. */

function revString(str, idx=str.length - 1) {
  if(idx < 0) return "";

  return str[idx] + revString(str.slice(0, idx), idx -1);
}

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj) {
  let strArr = [];
  let keys = Object.keys(obj).reverse();

  for(let key in obj) {
    if(typeof obj[key] === "string") strArr.push(obj[key]);
    if(typeof obj[key] === "object") strArr.push(...gatherStrings(obj[key]));
  }

  return strArr;
}

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearch(arr, val, low=0, high=arr.length - 1) {
  
  let midIdx = Math.floor((low + high) / 2);

  if(low > high) return -1;
  if(arr[midIdx] === val) return midIdx;
  if(arr[midIdx] > val) return binarySearch(arr, val, low, high=midIdx - 1);
  if(arr[midIdx] < val) return binarySearch(arr, val, low=midIdx + 1, high);
}

module.exports = {
  product,
  longest,
  everyOther,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch
};
