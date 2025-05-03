{
// Spread Operator, Destructureing,Rest Operator




// Spread Operator
const friends1:string[]=["tamjid","Rony","Olin"]
const friends2:string[]=["John","Nafiz","Ali"]
friends1.push(...friends2)

// Rest Operator
const friends = (...friends: string[]) => {
    console.log(friends);
  };
  
  friends("x", "y", "z");
  









































}