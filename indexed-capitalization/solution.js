function capitalize(s,arr){
  let strSplit = s.split('');

  for (let i = 0; i < arr.length; i++ ) {
    let upperCase = "";
    upperCase = (s.charAt(arr[i]).toUpperCase());
    strSplit.splice(arr[i], 1, upperCase);
  }
  return strSplit.join('');
};