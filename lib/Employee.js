
// TODO: Write code to define and export the Employee class
class Employee {
    constuctor(name, id, email){
        this.name = name;
        this.id = id;
        this.email = email;

    }

    getName() {
        return inquirer.prompt([
            {
            type: 'input',
            name: 'name',
            message: "What is the employee's name?"
            }
        ]).then(answers => {
            this.name = answers.name;
            this.getId();
        })
    }
    
    // async getName(answers){
    //      await promptUser();
    //      this.name = answers.name;
    //      console.log(name);
    //  }
}


module.exports = Employee;
// e.getName();