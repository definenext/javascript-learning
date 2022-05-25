stage:

```bash
var n = 2;
function square(num){
  var ans = num * num
  return ans
}

square(2)
```

Process:

- Global Execution Context
  Memory | Code
  n = undefined | local execution context
  fn square : {} | Memory | Code

Hoisting

```bash
console.log(a, n)
var a = 2;
let n = 2;
```

- Web API (HTML API)
  - setTimeout
  - setInterval

Error-First Callback

```bash
const ErrorFirstCallback = (err, data) => {
  if (err) {
    return console.log(err);
  }
  console.log("Function successfully executed");
};
```

```bash
function tryMe(param1, param2) {
  alert(param1 + " and " + param2);
}

function callbackTester(callback) {
  callback(arguments[1], arguments[2]);   //...args / arguments
}

callbackTester(tryMe, "hello", "goodbye");
```

```bash
const promise = new Promise((resolve, reject) => {

})

promise.then(() => {
//successfully
}).catch(err => {
//failure
})

Promise.all([
  promise1,
  promise2
])
```

```bash
async function asyncFunc() {
  return "something"
}

await asyncFunc()
asyncFunc().then(() => {}).catch(err => {})
```
