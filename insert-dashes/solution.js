function insertDash(num) {

  let numString = num.toString();
  let numArray = numString.split('');

  for (let i = 0; i < numArray.length; i++) {
    parseInt(numArray[i]);
    if ((numArray[i] % 2 === 1) && (numArray[i+1] % 2 === 1)) {
      numArray.splice([i+1], 0, '-');
    }
  }
  return (numArray.join(''));
}