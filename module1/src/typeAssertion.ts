{
let anything:any;
anything="helol"







type CustomError={
    massage:string
}
try{

}
catch(error){
    console.log((error as CustomError).massage);
}
















}