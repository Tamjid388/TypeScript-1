
function display(num1:number,num2:number):number{
    return num1+num2
}
display(2,3)

const displayArrow=(num1:number,num2:number):number=>num1+num2


const userA={
    name:"tamjid",
    blance:10,
    ADDblance(blance:number):number{
        return this.blance+blance
    }

}
console.log(userA.ADDblance(100));

const arr:number[]=[1,2,4,56]
const newArray=arr.map((elm:number):number=>elm*elm)

