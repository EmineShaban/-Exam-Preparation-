function solve(text){
let type = typeof text

console.log(type)
if(type === "string" || type === "number"){
    console.log(text)

}else{
    console.log('Parameter is not suitable for printing')
}


}
solve('Hello, JavaScript!')
solve(18)
solve(null)