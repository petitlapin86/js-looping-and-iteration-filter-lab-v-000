// Code your solution in this file
function findMatching(drivers){
  return drivers === ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby';]
}

function fuzzyMatch (list, partialName) {
  let lengthOfName = partialName.length;
  return list.filter(function (driverName) {
    return driverName.slice(0, lengthOfName) === partialName;
  });
}

function matchName (list, name) {
  return list.filter(function (driver) {
    return driver.name.toLowerCase() === name.toLowerCase();
  });
}