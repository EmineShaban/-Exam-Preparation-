class Company {
    constructor() {
        this.departments = {}
    }
    // obj = new Company
    addEmployee(name, salary, position, department){
        if(!name || !position || !department || !salary|| salary <0 ){
            throw new Error ('Invalid input!')
        }
        // Object.assign()
        if(!this.departments[department]){
            this.departments[department] = []
        }
        this.departments[department].push({name, position, salary})
        return `New employee is hired. Name: ${name}. Position: ${position}`
    }
    bestDepartment(){
        let current = { 
            name : '',
            salary : 0
        }
        for (let depKey in this.departments) {
            let average = 0

            for (let empKey in this.departments[depKey]) {
                average += this.departments[depKey][empKey].salary
            }

            average = average / this.departments[depKey].length
            if(current.salary < average){
                current.name = depKey
                current.salary = average

            }
        }
        this.departments[current.name].sort((a,b) =>{
            return b.salary - a.salary || a.name.localeCompare(b.name)
        })
        let bestDepStr = ''
        bestDepStr += `Best Department is: ${current.name}\n`
        bestDepStr += `Average salary: ${current.salary.toFixed(2)}\n`
        this.departments[current.name].forEach((el) => {
            bestDepStr += `${el.name} ${el.salary} ${el.position}\n`
        });


        return bestDepStr.trim()
    }

}

let c = new Company();
console.log(c.addEmployee("Stanimir", 2000, "engineer", "Construction"))
c.addEmployee("Pesho", 1500, "electrical engineer", "Construction");
c.addEmployee("Slavi", 500, "dyer", "Construction");
c.addEmployee("Stan", 2000, "architect", "Construction");
c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");
c.addEmployee("Pesho", 1000, "graphical designer", "Marketing");
c.addEmployee("Gosho", 1350, "HR", "Human resources");
console.log(c.bestDepartment());