
// TODO: Write code to define and export the Employee class
class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    } 
    
    getName() {
        return this.name;
    }

    getId() {
        return this.id;
    }
    getEmail() {
        return this.email;
    }
    getRole() {
        return 'Employee';
    }
}


const e = new Employee("Bob", 1, "test@email.com");

console.log(e.name);

console.log(e instanceof Employee);


module.exports = Employee;

