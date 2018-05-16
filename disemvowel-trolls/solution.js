function disemvowel(str) {
  let newStr = str.replace(/[aeiouAEIOU]/g,'');
  return newStr;
}