// TODO: Include packages needed for this application
const generateMarkdown = require("./utils/generateMarkdown")
const fs = require("fs")
const inquirer = require("inquirer")
// TODO: Create an array of questions for user input
const questions = [{
    type: 'input',
    message: "What is your proect title?",
    name: 'title'
}, {
    type: 'input',
    message: 'Short description of the application',
    name: 'Description',
}, {
    type: 'input',
    message: 'How to install ?',
    name: 'installation',
}, {
    type: 'input',
    message: 'what can this be used for',
    name: 'usage'
}, {
    type: 'input',
    message: 'add names for all people who should be credited on this project',
    name: 'contributing'
}, {
    type: 'input',
    message: 'what can this be used for',
    name: 'usage'
}, {
    type: 'list',
    message: "What is the licens being used?",
    name: 'license',
    choices: ["MIT", "Apache", "IBM", "No License"],
}, {
    type: 'input',
    message: 'what is your email adress and github username this is where you can be reached for any questions',
    name: 'questions'
},

];


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    const content = generateMarkdown(data)
    fs.writeFile(fileName, content, err => {
        if (err) {
            console.error(err)
            return
        }
        console.log("Success!")

    })

}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then(data => {
            writeToFile("./output/README.md", data)
        })

}

// Function call to initialize app
init();
