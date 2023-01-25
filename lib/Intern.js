const Employee = require('./Employee');

class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email)
        this.school = school;
    }

    getSchool() {
        console.log(`School: ${this.school}`)
    }

    getRole() {
        console.log(`Intern`)
    }
}

const intern = new Intern('Johnny', 'JR', 'johnny@gmail.com', 'UMBC')

intern.getName()
intern.getId()
intern.getEmail()
intern.getSchool()