const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(github) {
        this.github = github;
    }

    getGithub() {
        console.log(`Github: ${this.github}`)
    }

    getRole() {
        return Engineer
    }
}