function solution(str){
  let arrayOfStr = str.split('');
  let reversedArray = [];
  for (let i = arrayOfStr.length; i >= 0; i--) {
    reversedArray.push(arrayOfStr[i]);
  }
  return reversedArray.join('');
}