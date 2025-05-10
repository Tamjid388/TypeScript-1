{


const arr=(param:string):string[]=>{
    return [param]
}


const arr1=<T>(param:T):T[]=>{
    return [param]
}
const res1=arr("Bangladesh")

const resGeneric=arr1<string>("bangladesh")


















}