const Employee = require('./Employee');

class Intern extends Employee {
    constructor(school) {
        this.school = school
    }

    getSchool() {
        console.log(`School: ${this.school}`)
    }

    getRole() {
        return Intern
    }
}