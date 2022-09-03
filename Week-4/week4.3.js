
// Implement Fibonacci Series with Iterators

const fibonacci = (countt) => {
    return {
      [Symbol.iterator]: () => {
        let currentNumber = 0,
          nextNumber = 1,
          sum;
        let currentIndex = 0;
        return {
          next() {
            if (currentIndex < countt) {
              currentIndex++;
              sum = currentNumber + nextNumber;
              currentNumber = nextNumber;
              nextNumber = sum;
              return { value: currentNumber, done: false };
            } else {
              return { done: true };
            };
          }
        };
      }
    }
  }