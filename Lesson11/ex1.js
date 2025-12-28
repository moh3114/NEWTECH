`use strict`

class Course{
    title
    instructor
    maxStudents
    canInroll
    studentsAmount = 0
    balance

    constructor(title, instructor, maxStudents, balance){
        this.title = title
        this.instructor = instructor
        this.maxStudents = maxStudents
        this.balance = balance
    }

    enrollStudent() {
        this.studentsAmount < this.maxStudents ? ++this.studentsAmount : console.log("cant access")
    }


}

let c1 = new Course("JavaScript Basics" , "Dania" , 30, 5000)
let c2 = new Course("Python Fundamentals" , "Mohammad" , 25, 3000)

console.log(c1);
console.log(c2);

c1.enrollStudent()
console.log(c1);

