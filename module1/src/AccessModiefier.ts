{

class BankAccount{
    readonly id:number;
    name:string;
   private balance:number;

    constructor(id:number,name:string,balance:number)
    {
        this.id=id
        this.name=name
        this.balance=balance

    }

        
    addBalance(amount:number){
        this.balance=this.balance+amount
    }

    getBlance(){
        return this.balance
    }
}

const ob1=new BankAccount(23,'Tamjid',3404)















    
}