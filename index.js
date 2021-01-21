var kittens = ["Milo", "Otis", "Garfield"] //define your array here
var addFirs = newArray();
// Add your functions and code here
function destructivelyAppendKitten(name) {
  kittens.push(name);
  return kittens;
}

function destructivelyPrependKitten(name) {
  kittens.unshift(name);
  return kittens;
}

function destructivelyRemoveLastKitten() {
  kittens.pop();
  return kittens;
}

function destructivelyRemoveFirstKitten() {
  kittens.shift();
  return kittens;
}

function appendKittenName(name) {
  return [...kitten, name];
  //var addLast = [...kittens, name];
  //return addLast;
}

function prependKittenName(name){
  var addFirst = [name, ...kittens];
  return addFirst;
}

function removalLastKitten() {
  var lastRemoved = kittens.slice(0, array.length-1);
  return lastRemoved;
}

function removalFirstKitten() {
  var firstRemoved = kittens.slice(1);
  return firstRemoved;
}