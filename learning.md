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
