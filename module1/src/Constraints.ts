{
const addCourse=
<T extends 
{id:number,name:string,email:string,devtype:string}>(student:T)=>{
    const course="Web EngineerIng"
    return{
        ...student,course
    }
}
const student1=addCourse({
    id:1,
    name:"acb",
    email:"Abul",
    devtype:"MernDev"
})
const student2=addCourse({
     id:2,
  name: "Tamjid Ahmed",
  email: "tamjidahmed@gmail.com",
  devtype: "FrontendDev",
})
const student3 = addCourse({
    id:2,
  name: "Tamjid Ahmed",
  email: "tamjidahmed@gmail.com",
  devtype: "FrontendDev",
});

}
{
    type Vehicle={
        bike:String,
        Car:String,
        Ship:String
    }
    type Owner="bike" | "car" | "ship" //Normal Approach

    type Owner2=keyof Vehicle //Better Approach
    
    const person:Owner2="bike"


















    
}