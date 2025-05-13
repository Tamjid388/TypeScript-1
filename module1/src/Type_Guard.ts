{

    type AlphaNumeric = string | number;

    const addition = (param1: AlphaNumeric,
        param2: AlphaNumeric
    )
        : AlphaNumeric => {
        if (typeof param1 === 'number' && typeof param2 === 'number') {
            return param2 + param2
        } else {
            return param1.toString() + param2.toString()
        }

    }

    const res = addition("4", 4)
    console.log(res)


    // //////

    type user1 = {
        name: string
    }
    type user2 = {
        name: string,
        role: "Admin"
    }

    const getUser = (user: user1 | user2) => {
        if ('role' in user) {
            console.log("Working");
        }

    }

} {
    // A type guard is a way to narrow down the type of an object within a conditional block.
    //  In TypeScript, the instanceof operator is one of the common type guards.
    //  It helps you check the runtime type of an object and narrow the type to that class.
   
    class Animal {
        name: string;
        species: string;
        constructor(name: string, species: string) {
            this.name = name;
            this.species = species
        }
        sound() {
            console.log(`${this.name} the Dog is barking.`);
        }
    }


    // Dog
    class Dog extends Animal {
        constructor(name: string, species: string) {
            super(name, species)
        }
        bark() {
            console.log("The Dog is Barking");
        }
    }


    // Cat
    class Cat extends Animal {
        constructor(name: string, species: string) {
            super(name, species)
        }
        meow() {
            console.log(`${this.name} the Cat is meowing.`);
        }
    }

    // Create Instance

    const dog = new Dog("Siberian Husky", "doggy Sepians")
    const cat = new Cat("Persian", "cat Sepians")


    // A funtion to get the animal properties
    const describeAnimals = (animal: Animal) => {
        if (animal instanceof Dog) {
            animal.bark()
        }
        else if (animal instanceof Cat) {
            animal.meow()
        }
        else {
            animal.sound()
        }


    }

    describeAnimals(dog)






} 