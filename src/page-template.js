function generatePageTemp(teamMembers) {
    
    const employees = []
    console.log(teamMembers)
    
    for (i = 0; i< teamMembers.length; i++) {

        if (teamMembers[i].getRole() === 'Manager') {
            const managerCard = `
            <div class="card">
                <div class="card-content">
                    <p class="title is-3">Manager</p>
                    <p class="title is-4">${teamMembers[i].name}</p>
                    <p class="title is-4">${teamMembers[i].id}</p>
                    <p class="title is-4"><a href=mailto:"${teamMembers[i].email}?">${teamMembers[i].email}</a></p>
                    <p class="title is-4">${teamMembers[i].officeNumber}</p>
                </div>
            </div>
            `
            employees.push(managerCard)

        } else if (teamMembers[i].getRole() === 'Intern') {
            const internCard = `
            <div class="card">
                <div class="card-content">
                    <p class="title is-3">Intern</p>
                    <p class="title is-4">${teamMembers[i].name}</p>
                    <p class="title is-4">${teamMembers[i].id}</p>
                    <p class="title is-4"><a href=mailto:"${teamMembers[i].email}?">${teamMembers[i].email}</a></p>
                    <p class="title is-4">${teamMembers[i].school}</p>
                </div>
            </div>
            `
            employees.push(internCard)
        } else {
            const engineerCard = `
            <div class="card">
                <div class="card-content">
                    <p class="title is-3">Engineer</p>
                    <p class="title is-4">${teamMembers[i].name}</p>
                    <p class="title is-4">${teamMembers[i].id}</p>
                    <p class="title is-4"><a href=mailto:"${teamMembers[i].email}?">${teamMembers[i].email}</a></p>
                    <p class="title is-4">${teamMembers[i].github}</p>
                </div>
            </div>
            `
            employees.push(engineerCard)
        }
    }

    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css">
        <link rel="stylesheet" href="./style.css">
        <title>Team Members</title>
    </head>
    <body>
      <section  class="hero is-primary has-text-centered">
        <div class="hero-body">
          <p class="title is-1">
            Team Members!
          </p>
          <p class="subtitle">
            This is my team!
          </p>
        </div>
      </section> 
      <section class="container">
        ${employees}



















      </section>
        <footer class="footer">
            <div class="content has-text-centered">
                <p>
                    Thank you for viewing my site!
                </p>
            </div>
        </footer>   
               
    </body>
    </html>`
}


module.exports = generatePageTemp