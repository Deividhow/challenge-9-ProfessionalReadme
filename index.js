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
type:'input',
message:'Short description of the application',
name:'Description',
}, {
   type:''
}, {

}, {
 type: 'list',
    message: "What is the licens being used?",
    name: 'license',
    choices: ["MIT", "Apache", "IBM", "No License"]
}

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
