{
  // Generic Type
  // const rollNumber:number[]=[2,3,4,1,5]

  const rollNumber: Array<number> = [2, 3, 4, 1, 5];

  type Generictype = Array<number>;

  // Dynamic Approach
  type GenericDyn<param> = Array<param>;

  const ids: GenericDyn<number> = [1, 3, 4, 5, 6, 7];

  // const names:string[]=["X","Y","Z"]

  const names: string[] = ["X", "Y", "Z"];

  // const isBool:boolean[]=[true,false,true]

  const isBool: boolean[] = [true, false, true];

  const users: GenericDyn<{ name: string; age: number; isActive: boolean }> = [
    {
      name: "Tamjid",
      age: 24,
      isActive: true,
    },
    {
      name: "John",
      age: 30,
      isActive: false,
    },
    {
      name: "Esha",
      age: 22,
      isActive: true,
    },
  ];

  type GenericA = Array<number>;

  const arr: GenericA = [1, 3, 4, 5];

  // Dyanamic
  type GenericB<P> = Array<P>;
  const nums: GenericB<number> = [1, 23, 4, 3, 1, 2];

  // Type Alias
  type StringAlias = string;
  const name: StringAlias = "Tamjid Ahmed";

 

  const add = (num1: number, num2: number) => {
    return num1 + num2;
  };
  add(2, 4);
}
{
  type GenericObj<P> = Array<P>;

  const user1: GenericObj<object> = [
    {
      name: "Tamjid",
      age: 24,
      isActive: true,
    },
    {
      name: "John",
      age: 30,
      isActive: false,
    },
    {
      name: "Esha",
      age: 22,
      isActive: true,
    },
  ];

  const user2: GenericObj<{ name: string; age: number; isActive: boolean }> = [
    {
      name: "Tamjid",
      age: 24,
      isActive: true,
    },
    {
      name: "John",
      age: 30,
      isActive: false,
    },
    {
      name: "Esha",
      age: 22,
      isActive: true,
    },
  ];
}

{
 // Generic TUpple

 type GenericTuple<X,Y,Z>=[X,Y,Z]


 const alpha1:GenericTuple<string, string, string> = ["X", "Y", "Z"];



 const userId1:GenericTuple<number,number,object> =
 [2,2133,{name:"x",address:"Dhaka"}]

//  Or
 const userId2:GenericTuple<number,number,{name:string,address:string}> =
 [9,2133,{name:"x",address:"Dhaka"}]

//  or
type User={
    name:string,
    address:string
}
const userId3:GenericTuple<number,number,User> =
[9,2133,{name:"x",address:"Dhaka"}]

}