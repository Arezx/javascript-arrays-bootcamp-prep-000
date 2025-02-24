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

function destructivelyAddElementToEndOfArray(chocolateBars, candyString){
  chocolateBars.push(candyString);
  return chocolateBars;
}

function accessElementInArray(array, index){
  return array[index];
}

function destructivelyRemoveElementFromBeginningOfArray(chocolateBars){
  chocolateBars.shift();
  return chocolateBars;
}

function removeElementFromBeginningOfArray(chocolateBars){
  return chocolateBars.slice(1);
}
 
function destructivelyRemoveElementFromEndOfArray(chocolateBars){
  chocolateBars.pop();
  return chocolateBars;
}

function removeElementFromEndOfArray(chocolateBars){
  return chocolateBars.slice(0, chocolateBars.length - 1);
}