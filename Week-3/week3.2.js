// Create 3 simple functions where call, bind and apply are used. 
// The intention of this exercise isto understand how they work and their differences.
const alias = {
    name : "Rohit",
    surname : "Kulkarni",
  };
  
  function msg(text){
    console.log(text, this.name);
  }
  
  let konichiwa = msg.bind(alias);
  konichiwa("konichiwa");
  
  msg.call(alias,'');
  
  msg.apply(alias,["Ohayō"]);