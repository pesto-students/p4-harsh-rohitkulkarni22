
/*Create a memoize function that remembers previous inputs and stores them in cache so that it won’t have to compute the same inputs more than once. 
The function will take an unspecifiednumber of integer inputs and a reducer method.*/




function add(...args) {
    return args.reduce((accumulator, currentItem) => accumulator + currentItem, 0);
  }
  
  function memoize(func) {
    let cache = {};
    return function(...args) {
      if (args in cache) {
        console.log("Without compute");
        return cache[args];
      } 
      else {
        let result = func(...args);
        cache[args] = result;
        return result;
      }
  
    };
  
  }
  const memoizeAdd = memoize(add);
  console.log(memoizeAdd(100, 100));
  console.log(memoizeAdd(100));
  console.log(memoizeAdd(100, 200));
  console.log(memoizeAdd(100, 100));
