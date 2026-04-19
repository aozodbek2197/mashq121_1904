// 1-mashq
function once(fn) {
  let result;
  let called = false;
  return function(...args) {
    if (!called) {
      result = fn.apply(this, args);
      called = true;
    }
    return result;
  };
}

const pay = once(() => { console.log('To‘lov amalga oshirildi'); return 1000; });
pay();
pay();
// 2-mashq
function partial(fn, ...partialArgs) {
  return function(...remainingArgs) {
    return fn(...partialArgs, ...remainingArgs);
  };
}

const add = (a, b, c) => a + b + c;
const add5 = partial(add, 5);
console.log(add5(10, 20));
