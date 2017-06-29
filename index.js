function printString(myString) {
  console.log(myString[0]);

  if (myString.length > 1) {
    let mySubString = myString.substring(1, myString.length);
    printString(mySubString);
  } else {
    return true;
  }
}


function reverseString(str){
  if (str.length >= 1) {
    return (str[str.length - 1]) + reverseString(str.slice(0, -1))
  } else {
    return ""
  }
}

function isPalindrome(str){
  let strLength = str.length
  if (strLength === 0 || strLength === 1){
    return true
  }
  if (str[0] === str[strLength - 1]){
    return isPalindrome(str.slice(1, strLength - 1))
  } else {
    return false
  }
}

function addUpTo(arr,i){
  if (i === 0){
    return arr[0]
  } else {
    return arr.shift() + addUpTo(arr, i-1)
  }
}

function maxOf(array){
  let nums = array
  if (nums.length === 1){
    return nums[0]
  }
  if (nums[0] < nums[1]){
    nums.splice(0,1)
  } else {
    nums.splice(1,1)
  }
  return maxOf(nums)
}

function includesNumber(array, targetNum){
  let numArray = array
  if (numArray.length < 1){
    return false
  }
  if (numArray[0] === targetNum){
    return true
  } else {
    numArray.splice(0,1)
  }
  return includesNumber(numArray, targetNum)
}
