{
  // Classes And Object
  const person = {
    name: "John Doe",
    age: 30,
    gender: "Male",
    isEmployed: true,

  };

  class Animal {
    //  public species: string;
    //  public name: string;
    // public  age: string;

    constructor(public species: string, public name: string,
      public age: string) {
      // this.species = species,
      //   this.name = name,   //Not Necessary when use Parameter Properties
      //   this.age = age

    }
    met() {
      console.log(`the chicken says ${this.species}`)
    }

  }


  const dog = new Animal("german", "dog", "2")
  const morog = new Animal("MewMew", "Chics", "3")

  morog.met()
  console.log(morog.name)




}
{
  class ParentClass {
    name: string;
    age: number;
    address: string
    constructor(name: string, age: number, address: string) {
      this.name = name;
      this.age = age;
      this.address = address;

    }
    method() {
      console.log("COmmon method");
    }
  }


  // Student Class
  class Student extends ParentClass {
    constructor(name: string, age: number, address: string) {
      super(name, age, address)
    }

  }


  const ob1 = new Student("Tamjid", 33, "dhaka")
  // ob1.methodd(21)

  // Teacher Class
  class Teacher {
    name: string;
    age: number;
    address: string
    constructor(name: string, age: number, address: string) {
      this.name = name;
      this.age = age;
      this.address = address;

    }
    method() {
      console.log("COmmon method");
    }

    NoOfDegrees(num: number) {
      console.log(`${this.name} has ${num} Degrees`);

    }
  }
  const teacher = new Teacher("MMA", 32, "Mirpur")
  teacher.NoOfDegrees(2)




















}
