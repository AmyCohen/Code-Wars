var replaceDots = function(str) {
  var stringArray = str.split('.');
  var joinedString = stringArray.join('-');
  console.log(joinedString);
  return joinedString;
};

replaceDots('one.two.three');