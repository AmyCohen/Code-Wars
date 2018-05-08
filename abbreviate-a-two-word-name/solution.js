function abbrevName(name){
  let nameArray = name.split(' ');
  let firstInitial = nameArray[0].charAt(0);
  let secondInitial = nameArray[1].charAt(0);
  let initialsArray = [firstInitial, secondInitial];
  return initialsArray.join('.').toUpperCase();
}

abbrevName('amy cohen');