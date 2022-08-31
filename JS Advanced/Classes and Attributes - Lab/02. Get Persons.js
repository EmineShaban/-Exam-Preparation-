function result() {
    class Person {
        constructor(firstName, lastName, age, email) {
            this.firstName = firstName
            this.lastName = lastName
            this.age = age
            this.email = email
        }
        
        toString() {
        let arr = []
        if(this.lastName === undefined){
            arr.push(this.firstName)
            return arr
        }else if(this.age === undefined){
            arr.push(this.firstName, this.lastName)
            return arr  
        }else if(this.email === undefined){
            arr.push(this.firstName, this.lastName, this.age)
            return arr       
        }
        arr.push(this.firstName, this.lastName, this.age, this.email)
        return arr
    }
}
// let a = new Person('a', 'ddd', 5)
// console.log(a.toString())
}

// console.log(arr) this.lastName, this.age, this.email)
