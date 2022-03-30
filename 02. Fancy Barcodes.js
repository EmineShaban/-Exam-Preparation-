function solve(input) {
    let pattern = /@(#){1,}(?<name>[A-Z][A-Za-z0-9]{4,}[A-Z])@(#){1,}/g
    let num = +input.shift()
    while (num > 0) {
        let barcode = input.shift()
        let result = pattern.exec(barcode)
        if (result != null) {
            let name = result.groups.name
            let barcode = ''

            for (const char of name) {
                let isNumber = Number(char)
                if(isNumber*1 === isNumber){
                    barcode += char
                }
            }
            if(barcode == ''){
                barcode = '00'
            }
            console.log(`Product group: ${barcode}`)
                
            
        }else{
            console.log(`Invalid barcode`)
        }
        num--
        result = pattern.exec(barcode)
    }



}
solve((["3",
    "@#FreshFisH@#",
    "@###Brea0D@###",
    "@##Che4s6E@##"]))
console.log("------------------")
solve((["6",
    "@###Val1d1teM@###",
    "@#ValidIteM@#",
    "##InvaliDiteM##",
    "@InvalidIteM@",
    "@#Invalid_IteM@#",
    "@#ValiditeM@#"]))
