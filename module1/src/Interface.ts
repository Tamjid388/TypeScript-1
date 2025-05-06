{
    // Interface in TypeScript
    type User1 = {
        name: string;
        age: number;
    };

    const user1: User1 = {
        name: "Tamjid Ahmed",
        age: 23,
    };

    interface User2 {
        name: string;
        age: number;
    }

    const user2: User2 = {
        name: "John Doe",
        age: 43,
    };

    interface UserWithROle2 extends User2 {
        role: "Engineer";
    }

    const newUser: UserWithROle2 = {
        name: "tamjid ahmed",
        age: 32,
        role: "Engineer",
    };

    type Roll1 = number[];
    const roll: Roll1 = [1, 2, 3];

    // Using Interface In Array
    interface Roll2 {
        [index: number]: number;
    }

    const roll2: Roll2 = [1, 2, 3];

    // Using Interface In Function

    type Add=(num1:number,num2:number)=>number

    const add:Add =(num1,num2)=> num1+num2


    interface Add2 {
        (num1:number,num2:number):number
    }

    const add2:Add2 =(num1,num2)=> num1+num2
}
