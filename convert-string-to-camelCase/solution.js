function toCamelCase(str){
  let array = str.split('');

  if (str.includes('-')){
    for (let i = 1; i < array.length; i++) {
      while (array.indexOf('-') > 0) {
        let hyphenPlus = array.indexOf('-') + 1;
        let hyphenOnly = array.indexOf('-');
        let upperCase = array[hyphenPlus].toUpperCase();
        array.splice(hyphenPlus, 1, upperCase);
        array.splice(hyphenOnly, 1);
        console.log(array);
      }
    }
    return array.join('');
  }

  if (str.includes('_')){
    for (let i = 1; i < array.length; i++) {
      while (array.indexOf('_') > 0) {
        let underscorePlus = array.indexOf('_') + 1;
        let underscoreOnly = array.indexOf('_');
        let upperCase = array[underscorePlus].toUpperCase();
        array.splice(underscorePlus, 1, upperCase);
        array.splice(underscoreOnly, 1);
        console.log(array);
      }
    }
    return array.join('');
  }

  if (str.includes('')) {
    return str;
  }
}