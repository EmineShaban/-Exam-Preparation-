function solve(name, count){
    let result = 0
switch(name){
    case 'coffee': 
    result = count * 1.50;
    break;
    case 'water': 
    result = count * 1.00;
    break;
    case 'coke': 
    result = count * 1.40;
    break;
    case 'snacks': 
    result = count * 2.00;
    break;
    
}

console.log(result.toFixed(2))

}
solve("water", 5)
solve("coffee", 2)
/*coffee - 1.50
water - 1.00
coke - 1.40
snacks - 2.00*/