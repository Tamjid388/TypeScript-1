{
// Generic Type
// const rollNumber:number[]=[2,3,4,1,5]

const rollNumber:Array<number>=[2,3,4,1,5]

type Generictype=Array<number>

// Dynamic Approach
type GenericDyn<param>=Array<param>

const ids:GenericDyn<number>=[1,3,4,5,6,7];



// const names:string[]=["X","Y","Z"]

const names:string[]=["X","Y","Z"]

// const isBool:boolean[]=[true,false,true]

const isBool:boolean[]=[true,false,true]
















}