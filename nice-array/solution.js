function isNice(arr) {
  if (arr.length === 0) {
    return false;
  }

  let count = 0;

  for (let i = 0; i < arr.length; i++) {
    count = 0;
    for (let j = 0; j< arr.length; j++) {
      if (arr[i]===arr[j]+1 || arr[i]===arr[j]-1) {
        count++;
      }
    }
    if (count < 1) {
      return false;
    }
  }
  return true;
}