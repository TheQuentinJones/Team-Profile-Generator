const Employee = require('./Employee');

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email)
        this.officeNumber = officeNumber;



    }

    getRole() {
        console.log('Manager');
    }
}

const manager = new Manager('Josh', 'JD', 'Josh@gmail.com', 109)
console.log(manager.officeNumber)
manager.getName()
manager.getEmail()
manager.getId()
manager.getRole()
