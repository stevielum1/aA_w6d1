// function sum() {
//   let args = Array.from(arguments);
//   let sum = 0;
//   args.forEach(el => {
//     sum += el;
//   });
//   return sum;
// }

function sum(...args) {
  let sum = 0;
  args.forEach(el => {
    sum += el;
  });
  return sum;
}

// Function.prototype.myBind = function(ctx) {
//   let bindArgs = Array.from(arguments);
//   bindArgs.shift(); //remove ctx from bind args
//   let that = this;
//   return function() {
//     let callArgs = Array.from(arguments);
//     return that.apply(ctx, bindArgs.concat(callArgs));
//   };
// };

Function.prototype.myBind = function(ctx, ...bindArgs) {
  return (...callArgs) => {
    return this.apply(ctx, bindArgs.concat(callArgs));
  };
};

function curriedSum(numArgs) {
  let numbers = [];
  function _curriedSum(num) {
    numbers.push(num);
    if (numbers.length === numArgs) {
      return numbers.reduce((total, el) =>  total + el );
    } else {
      return _curriedSum;
    }
  }
  return _curriedSum;
}

Function.prototype.curry = function(numArgs) {
  let args = [];
  let that = this;
  function _curry(arg) {
    args.push(arg);
    if (args.length === numArgs) {
      // return that.apply(that, args);
      return that(...args);
    } else {
      return _curry;
    }
  }
  return _curry;
};
