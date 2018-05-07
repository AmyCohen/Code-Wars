//solution does not work, but I'm not sure how to submit this for partial credit without doing this incorrect solution.

var replaceDots = function(str) {
  for (var i = 0; i < str.length; i++){
    if (str.includes('U+002E')) {
      str.replace ('U+002E', 'U+06D4');
    } else {
      console.log('you\'re missing something');
    }
  }
  return str.replace ('U+002E', 'U+06D4');

};


replaceDots('one.two.three');