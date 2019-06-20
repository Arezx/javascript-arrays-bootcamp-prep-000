var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];
var sweet = "chocolateBars"

function addElementToBeginningOfArray(chocolateBars, sweet){
  return [sweet, ...chocolateBars];
}

function destructivelyAddElementToBeginningOfArray(chocolateBars, sweet){
  chocolateBars.unshift(sweet);
  return chocolateBars;
}

function addElementToEndOfArray(chocolateBars, candyString){
  return [...chocolateBars, candyString];
}

