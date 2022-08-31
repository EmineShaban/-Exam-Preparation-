function result() {
    class Person {
        constructor(name, email) {
            this.name = name;
            this.email = email;
        }
        toSrting() {
            let namee = this.constructor.name
            // return `aaa`
            let a =  `${namee} (name: ${this.name}, email: ${this.email})`
            return a.toString()

        }

    }
    class Teacher extends Person {
        constructor(name, email, subject) {
            super(name, email);

            this.subject = subject;
            
        }
        toSrting() {
            // return this.subject + ' ' + super.toSrting()
            let name1 = this.constructor.name
            let a = `${name1} (name: ${this.name}, email: ${this.email}, subject: ${this.subject})`
            return a.toString()
        }
    }
    class Student extends Person {
        constructor(name, email, course) {
            super(name, email);
            this.course = course;
        }
        toSrting() {
            let name = this.constructor.name
            let a = `${name} (name: ${this.name}, email: ${this.email}, course: ${this.course})`
            return a.toString()

        }
    }

    return{
        Person,
        Teacher,
        Student
    }
    
}
let classes = result();
let Person = classes.Person;
let Teacher = classes.Teacher;
let Student = classes.Student;

let t = new Student("Ivan",'ivan@ivan.com',"Graphics");
console.log(t.toSrting())
// let classes = result();
// let Person = classes.Person;
// let Teacher = classes.Teacher;
// let Student = classes.Student;

// let t = new Person("Ivan", 'ivan@ivan.com');
// // expect(t.toString()).to.equal('Teacher (name: Ivan, email: ivan@ivan.com, subject: Graphics)');
// console.log(t)
// expect(p.toString()).to.equal('Person (name: Pesho, email: Pesho@pesh.com)');


// toStringExtension()

// Person - returns "Person (name: {name}, email: {email})"
// Student - returns "Student (name: {name}, email: {email}, course: {course})"
// Teacher - returns "Teacher (name: {name}, email: {email}, subject: {subject})"