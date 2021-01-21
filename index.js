var kittens = ["Milo", "Otis", "Garfield"] //define your array here

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

function destructivelyRemoveFirsiKitten() {
  kittens.shift();
  return kittens;
}

function appendKittenName(name) {
  var addFirst = [...kittens, name];
  return addFirst;
}

function prependKittenName(name){
  var addFirst = [name, ...kittens];
  return addedKittenFirst;
}

function removalLastKitten() {
  
}

function removalFirstKitten() {
  
}