function solve(password) {
    let count = 0
    let isOk = false
    let isSuper = true
    let isTrue = false
    let isDijit = false
    if (password.length >= 6 && password.length <= 10) {
        isTrue = true
    }
    if (!isTrue) {
        console.log("Password must be between 6 and 10 characters")
    }
    for (let char of password) {

        let cuurrChar = char.charCodeAt(0)
        if (cuurrChar >= 48 && cuurrChar <= 57) {
            count++
            isDijit = true
            isOk = true
        } else if (cuurrChar >= 65 && cuurrChar <= 90) {
            isOk = true
        } else if (cuurrChar >= 97 && cuurrChar <= 122) {
            isOk = true
        } else{
            console.log('Password must consist only of letters and digits')
            isOk = false
            break;

        }
        // if ((cuurrChar <= 65 && cuurrChar >= 90)||
        // (cuurrChar <= 97 && cuurrChar >= 122)||
        // (cuurrChar <= 48 && cuurrChar >= 57)){
        //     isOk = false
        //     break;
        // }
    }
    if (count < 2) {
        console.log("Password must have at least 2 digits")
        isSuper = false
    }
    if (isOk == true && isSuper == true && isTrue == true) {
        console.log('Password is valid')
    }
}
solve('logIn')
solve('MyPass23')
solve('Pa$s$s')

