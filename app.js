const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output")
const outputPath = path.join(OUTPUT_DIR, "team.html");

// User prompt for Git username and other . Via Inquierer
function promptUser() {
    return inquirer.prompt([
        {
          type: "list",
          name: "employeeType",
          message: "Employee Type: ",
          choices: ["Manager", "Engineer", "Intern"]
        },
        {
          type: 'input',
          name: 'name',
          message: 'What is your name?'
        },
        {
          type: 'input',
          name: 'id',
          message: 'What is your id number?'
        },
        {
          type: 'input',
          name: 'email',
          message: 'What is your email address?'
        },
        {
          type: "input",
          name: "github",
          message: "What is your Github username? ",
          when: function(answers) {
            const value = answers.employeeType == "Engineer" ? true : false;
            return value;
            }
        },
        {
          type: "input",
          name: "officeNumber",
          message: "What is your offic number? ",
          when: function(answers) {
            const value = answers.employeeType == "Manager" ? true : false;
            return value;
            }
        },
        {
          type: "input",
          name: "school",
          message: "Which school do you attend? ",
          when: function(answers) {
            const value = answers.employeeType == "Intern" ? true : false;
            return value;
            }
        }
    ]);
}

// Feeds data into README.MD text format using tempelate literal values from answers & data pulled from GitHub.
// async function generateREADME(answers) {
//   // Cannot acces answers until inquirer prompt and api callback are completed
//   const fullData = await api.getUser(answers);

  
//     return ` `
    

// }

// Async init function for instructing stack on how to fulfill the writeFile promise.
async function init() {
    try {
        // Answers not avialable until after inquierer prompt.
        const answers = await promptUser();
        // Cannot create text for readme, unitl after answers and api data are made available and fead into readme template. 
        const text = await generateREADME(answers);
        // Readme file will be written to file system using data from text variable and the async promis wll be fullfilled.
        await writeFileAsync("README.md", text);
        // Console log success when readme is written to filesystem. Othewise error.
        console.log("Successfully wrote to README.md");
      } catch(err) {
        console.log(err);
      }
  }
  // Initiates process.
  init();
  