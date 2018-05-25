function mutateMyStrings(stringOne, stringTwo){
  let arrayOne = stringOne.split('');
  let arrayTwo = stringTwo.split('');
  let solutionArray = [];

  for (let i = 0; i < arrayOne.length; i++) {
    if (arrayOne[i] !== arrayTwo[i]) {
    arrayOne.splice([i], 1, arrayTwo[i]);
    solutionArray.push(arrayOne.join('')+'\n');
  }
}
  return stringOne + '\n' + solutionArray.join('');
}

//Okay...so I don't know where my brain was yesterday (I litterally fell asleep standing up at home and my husband caught me - I wasn't in a good place physically yesterday), but SERIOUSLY I tried keeping this as a string instead of using the much easier array methods then rejoining the array. SHEESH. This solution (once I had slept) took about 30 minutes is all. GAH!!!