
const inquirer = require('inquirer')
const fs = require('fs')
const pageTemplate = require('./src/page-template')
const Intern = require('./lib/Intern')
const Manager = require('./lib/Manager')
const Engineer = require('./lib/Engineer')
const Employee = require('./lib/Employee')

const teamMembers = []

const questionOne = 

[
    {
        type: 'list',
        message: 'What kind of employee would you like to add?',
        choices: 
        
        [   'Manager' ,
            'Intern' ,
            'Engineer' ,                      
        ],

        name: 'role',
       
    },
]

const questions =

[

    {
        type: 'input',
        message: 'What is their name?',
        name: 'name',
    },
    {
        type: 'input',
        message: 'What is their ID?',
        name: 'id',
    },
    {
        type: 'input',
        message: 'What is their email?',
        name: 'email',
    },
    {
        type: 'list',
        message: 'Would you like to add another employee?',
        choices: 

        [
            'Yes' ,
            'No' ,
        ],
        name: 'addanother',
    },
];

const manQuestion = 

[
    {
        type: 'input',
        message: 'What is their office number?',
        name: 'officenum',
    },
];

const engQuestion = 
[
    {
        type: 'input',
        message: 'What is their github url?',
        name: 'github',
    },
];

const intQuestion = 

[
    {
        type: 'input',
        message: 'What school did they attend?',
        name: 'school',
    },
];

function init() {
    let position;
    inquirer.prompt(questionOne)
    .then(({role}) => {
        position = role
        if (role == 'Manager') {
            questions.splice(3, 0, ...manQuestion)
        } else if (role == 'Engineer') {
            questions.splice(3, 0, ...engQuestion)
        } else if (role == 'Intern') {
            questions.splice(3, 0, ...intQuestion)
        } else {
            console.log('Nothing was chosen')
        }
    })
    .then(() => {
        inquirer.prompt(questions)
        .then((responses) => {
            if(position == 'Manager') {
                console.log(`It's a ${position}`, responses)
                const manAger = new Manager(responses.name, responses.id, responses.email, responses.officenum)
                teamMembers.push(manAger)
            } else if (position == 'Intern') {
                const inTern = new Intern(responses.name, responses.id, responses.email, responses.school)
                console.log(`It's an ${position}`, responses)
                teamMembers.push(inTern)
            } else {
                const enGineer = new Engineer(responses.name, responses.id, responses.email, responses.github)
                console.log(`It's an ${position}`, responses)
                teamMembers.push(enGineer)
            }

            if (responses.addanother == 'Yes') {
                console.log('Adding another employee...')
                if (questions.length > 4) {
                    questions.splice(3, 1)
                    init()
                } else {
                    init()
                }
                
            } else {

                
                fs.writeFileSync('./dist/team.html', pageTemplate(teamMembers))

                console.log('You are done adding employees!')
                // console.log(responses)
                
            }
        })

        
    });


}

init()

