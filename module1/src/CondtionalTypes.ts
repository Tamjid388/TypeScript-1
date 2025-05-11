{
    type a1=null
    type Notdefined=undefined



type x=a1 extends null ? true :false
type y=a1 extends null ? true :
         Notdefined extends undefined ? undefined
           :false



type Person={
    name:string,
    Id:number
}


}