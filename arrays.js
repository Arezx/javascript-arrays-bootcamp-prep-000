var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];
var sweet = "chocolateBars"

function addElementToBeginningOfArray(chocolateBars, sweet){
  return [sweet, ...chocolateBars];
}

function destructivelyAddElementToBeginningOfArray