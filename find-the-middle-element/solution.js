var gimme = function (inputArray) {
  const originalArray = inputArray.slice(0);
  const sortedArray = inputArray.sort(function(a,b) {
  return a-b;
  });
  let middleNumber = sortedArray[1];
   return originalArray.indexOf(middleNumber);
};