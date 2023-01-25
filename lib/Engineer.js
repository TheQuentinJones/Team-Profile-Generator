const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email)
        this.github = github;
    }

    getGithub() {
        console.log(`Github: ${this.github}`)
    }

    getRole() {
        console.log('Engineer')
    }
}

const engineer = new Engineer('Robert', 'RV', 'Robby@gmail.com', 'Therob@github.com')

engineer.getName()
engineer.getId()
engineer.getEmail()
engineer.getGithub()