function high(x){
  let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

  let splitString = x.split('');
  let wordSplit = x.split(' ');
  const reducer = (accumulator, currentValue) => accumulator + currentValue;
  let letterValuesArray = 0;
  let letterPosition = [];
  let wordValues = [];
  let steadyValue = 0;
  let newArray = [];
  let wordPosition = 0;
  
  for (let i  = 0; i < splitString.length+1; i++) {
    letterValuesArray = (alphabet.indexOf(splitString[i])+1); 
    console.log(letterValuesArray);
    
    if (splitString[0] === "" || splitString[0] === " "){
      return '';
    } else if (letterValuesArray !== 0) {
      wordValues.push(letterValuesArray);
    } else if (letterValuesArray === 0 || letterValuesArray === undefined) {
      steadyValue = (wordValues.reduce(reducer));
      newArray.push(steadyValue);
      wordValues = [];
    }

  }
  console.log('newArray = ' + newArray);
  wordPosition = newArray.indexOf(Math.max(...newArray));
  console.log(wordPosition);
  return wordSplit[wordPosition];
}