{

// Object Destructuring
const user ={
    id:221,
    name:{
        firstName:"Tamjid",
        middlename:"ahmed",
        lastName:"Razin"
    },
    age:23,
    address:"Dhaka",
    contact:"02312222"
}



const {contact,name:{middlename}}=user


// Array Destructuring

const friends: string[] =
 ["Tamjid", "Rony", "Olin", "Nafiz", "Ali", "John"];

 const [a,b,c,d,...f]=friends
 console.log(f);

// Function Parameters with Rest
 const greetFriends = (...names: string[]) => {
    names.forEach(name => console.log(`Hello, ${name}!`));
  };
  
  greetFriends("Tamjid", "Rony", "Olin");
  // Output:
  // Hello, Tamjid!
  // Hello, Rony!
  // Hello, Olin!
  







}