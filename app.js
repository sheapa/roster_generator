const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
​
const OUTPUT_DIR = path.resolve(__dirname, "output")
const outputPath = path.join(OUTPUT_DIR, "team.html");
​
const render = require("./lib/htmlRenderer");
​
​
// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

function promptUser() {
    return inquirer.prompt([
        {
          type: 'input',
          name: 'name',
          message: "What the employee's name?"
        }
        // {
        //   type: 'input',
        //   name: 'title',
        //   message: 'What is the title of your project?'
        // },
        // {
        //   type: 'input',
        //   name: 'description',
        //   message: 'Please breifly describe your project.'
        // },
        // {
        //   type: 'input',
        //   name: 'instructions',
        //   message: 'What are you program instructions?'
        // },
        // {
        //   type: 'input',
        //   name: 'liscenses',
        //   message: 'Please provide liscense information.'
        // },
        // {
        //   type: 'input',
        //   name: 'tests',
        //   message: 'Provide details on your tests and how to run them.'
        // },
        // {
        //   type: 'input',
        //   name: 'acknowledgments',
        //   message: 'This is the place to list any special shout outs to others that made this project possible.'
        // }

    ]);
}

async function init() {
    try {
        // Answers not avialable until after inquierer prompt.
        const answers = await promptUser();
        // Cannot create text for readme, unitl after answers and api data are made available and fead into readme template. 
        // const text = await generateREADME(answers);
        // // Readme file will be written to file system using data from text variable and the async promis wll be fullfilled.
        // await writeFileAsync("README.md", text);
        // // Console log success when readme is written to filesystem. Othewise error.
        // console.log("Successfully wrote to README.md");
      } catch(err) {
        console.log(err);
      }
  }
  // Initiates process.
  init();
  
// ​
// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!
​
// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.
​
// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.
​
// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an 
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work!```
