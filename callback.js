function tryMe(param1, param2) {
  console.log(param1 + " and " + param2);
}

function callbackTester(callback) {
  // arguments -> returns an object
  //console.log("arguments", arguments, param1, param2);
  callback(arguments[1], arguments[2]); //...args / arguments
}

callbackTester(tryMe, "hello", "goodbye");
