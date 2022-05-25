function tryMe(param1, param2) {
  console.log(param1 + " and " + param2);
}

function callbackTester(callback) {
  // arguments -> returns an object
  //console.log("arguments", arguments, param1, param2);
  callback(arguments[1], arguments[2]); //...args / arguments
}

callbackTester(tryMe, "hello", "goodbye");

//Currying
/**
 * It is advance technique of working with function.
 * It is tranformation of function that translates a function from callback as
 * f(a, b) into f(a)(b)
 */

function add(a) {
  return function (b) {
    return a + b;
  };
}

console.log(add(5)(6));
