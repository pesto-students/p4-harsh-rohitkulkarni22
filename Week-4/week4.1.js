// Implement a function namedgetNumberwhich generatesa random number. 
// If randomNumberis divisible by 5 it will reject the promise else it will resolve the promise. 
// Let’s also keep thepromise resolution/rejection time as a variable.

const getNumber = function getNumber() {
    return Math.round(Math.random() * 100);
  }
  function customPromise(executor) {
  
    let onResloved;
    let onRejected;
    let isFulfill = false;
    let isRejected = false;
    let isCalled = false;
    let value;
    
  
    function reslove(val) {
      isFulfill = true;
      value = val;
      if (typeof onResloved === 'function' && !isCalled) {
        onResloved(value);
        isCalled = true;
      }
  
    };
    function reject(err) {
      isRejected = true;
      error = err;
      if (typeof onRejected === 'function' && !isCalled) {
        onRejected(err);
        isCalled = true;
      }
    };
  
    this.then = function(handller) {
      onResloved = handller;
      if (!isCalled && isFulfill) {
        console.log(this.handdler);
        onResloved(value);
        isCalled = true;
      }
      return this;
    };
    this.catch = function(error) {
  
      onRejected = error;
      if (!isCalled && isRejected) {
        onRejected(error);
        isCalled = true;
      }
      return this;
    };
    executor(reslove, reject);
  }
  
  
  let divisible = 5;
  
  let promise = new customPromise(function(reslove, reject) {
    let randomNumber = getNumber();
    if (randomNumber % divisible === 0) {
      reject({ randomNumber, divisible });
      console.log(randomNumber);
    } else {
      console.log(randomNumber);
      reslove(randomNumber);
      
    }
  
  });
  
  promise.then((val1) => {
    console.log("The number "+ val1 +" not divisible by 5");
  })
  .catch(error =>
    console.log("This Number is divisible by 5"))
    