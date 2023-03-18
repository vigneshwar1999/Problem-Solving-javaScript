function countConsecutiveDigits(num) {
  let result = "";
  let count = 1;
  for (let i = 0; i < num.length; i++) {
    if (num[i] === num[i + 1]) {
      count++;
    } else {
      result += count.toString() + num[i];
      count = 1;
    }
  }
  return result;
}

//INPUT: "112344566"
//OUTPUT: 211213241526

console.log(countConsecutiveDigits(num));
