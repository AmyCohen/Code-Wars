function cubeOdd(arr) {
  cubedAnswer = [];
  const cubedArray = arr.map(x => Math.pow(x, 3));
  if (cubedArray.includes(NaN) === true) {return undefined};

  for (let i = 0; i < cubedArray.length; i++) {
    if (cubedArray[i] % 2 === 1 || cubedArray[i] % 2 === -1) {
      cubedAnswer.push(cubedArray[i]);
    }
  }
return cubedAnswer.reduce((a, b) => (a+b), 0);
}

//I KNOW this has an old fashioned for loop and I really tried to use the forEach method. I spent the entire ride on the train trying to figure out how to use it and to solve this as a one-liner by chaining methods, but after solving it and being able to look at the solutions provided by others, I know I am not at that point yet.