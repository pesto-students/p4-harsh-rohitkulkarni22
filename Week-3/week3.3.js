//   Output of this program is: Count is 3

function createIncrement() {
  
    let count=0;
    function increment() {
      count++;
    }
    let message=`Count is${count}`;
    
    function log(){
      let message=`Count is${count}`;
      console.log(message);
    }
    return[increment,log];
  
  }
  const[increment,log] = createIncrement();
  increment();
  increment();
  increment();
  log();

