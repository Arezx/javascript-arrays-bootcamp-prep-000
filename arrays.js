var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];
var sweet = "chocolateBars"

function addElementToBeginningOfArray(chocolateBars, candyString){
  return [candyString, ...chocolateBars];
}