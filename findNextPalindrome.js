/**
 *
 * Description: A function to check given string is palindrome or not.
 *
 * @param {String} str
 *
 * @return {Boolean} Should return true if given string is palindrome otherwise it will return false.
 */

function checkPalindrome(str) {
  return str.toLowerCase() === str.split("").reverse().join("").toLowerCase();
}

/**
 *
 * Description: A function to find next palindrome number.
 *
 * @param {Number} num
 *
 * @return {Number} Will return the palindrome number.
 */

function findNxtPalindrome(num) {
  for (let i = num + 1; ; i++) {
    if (checkPalindrome(i.toString())) {
      return i;
    }
  }
}

console.log(findNxtPalindrome(121));
