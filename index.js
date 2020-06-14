const fs = require("fs");
const util = require("util");
const inquirer = require("inquirer");
const writeReadme = require("./utils/writeReadme")
const writeAsync = util.promisify(fs.writeFile);

//user input to write in the README.md file
function userInput(){
    return inquirer.prompt([
        {
        type: "input",
        name: "projectTitle",
        message: "What is the project title?",
        },
        {
        type: "input",
        name: "description",
        message: "Write a description of your project: "
        },
        {
        type: "input",
        name: "installation",
        message: "Are there any installations the user has to go through? ",
        },
        {
        type: "input",
        name: "usage",
        message: "What is this project used for?"
        },
        {
        type: "list",
        name: "license",
        message: "Choose the license for this project: ",
        choices: [
                "MIT",
                "Academic",
                "GNU",
                "ISC",
                "Mozilla",
                "Open"
            ]
        },
        {
        type: "input",
        name: "contributing",
        message: "Who are the contributors?"
        },
        {
        type: "input",
        name: "tests",
        message: "Is there a test in this project?"
        },
        {
        type: "input",
        name: "questions",
        message: "What does the user do if there's an issue?"
        },
        {
        type: "input",
        name: "username",
        message: "GitHub username: "
        },
        {
        type: "input",
        name: "email",
        message: "Email: "
        }
    ]);
} 

// Async function using util.promisify 
  async function run() {
    try {
        // Ask user questions and generate responses
        const input = await userInput();
        const writeInput = writeReadme(input);
        // Write new README.md to dist directory
        await writeAsync('./dist/README.md', writeInput);
        console.log('Wrote information to README.md');
    }   catch(err) {
        console.log(err);
    }
  }
  
  run();  