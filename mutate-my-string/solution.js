//This is not functioning code. I could not get it to work yet.
function mutateMyStrings(stringOne, stringTwo){
  let revisedStr = "";
  let addingStr = "";
  for (let i = 0; i < stringOne.length; i++) {
    let letterSub = "";
    let otherLetterSub = "";
    letterSub = stringTwo.substr(i, 1)
    addingStr = letterSub
    console.log(addingStr + letterSub);

    // console.log(revisedStr);
    otherLetterSub = stringOne.slice(i+1)
    console.log(otherLetterSub);
    revisedStr = letterSub+otherLetterSub;
    console.log(revisedStr);
  }
}