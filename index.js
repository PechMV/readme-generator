// TODO: Include packages needed for this application
const inquirer = require("inquirer")
const fs = require("fs")
const generateMarkdown = require("./utils/generateMarkdown")
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input', 
        message: 'What\'s the title of your project?',
        name: 'title'
    },
    {
        type: 'input',
        message: 'Provide a short description explaining your project:',
        name: 'description'
    },
    {
        type: 'input',
        message: 'If your README is long, add a table of contents to make it easy for users to find what they need:',
        name: 'tableOfContents'
    },
    {
        type: 'input',
        message: 'What are the steps required to install your project? Provide a step-by-step description of how to get the development enviroment running:',
        name: 'installation'
    },
    {
        type: 'input',
        message: 'Provide instructions and examples for use. Include screenshots as needed:',
        name: 'usage'
    },
    {
        type: 'input',
        message: 'List your credentials:',
        name: 'credits'
    },
    {
        type: 'list',
        message: 'Provide the license of your project',
        name: 'license',
        choices: ['None', 'MIT License', 'Apache License 2.0', 'GNU General Public License v3.0', 'Other']
    },
    {
        type: 'input',
        message: 'If your project has a lot of features, list them here.',
        name: 'feature'
    },
    {
        type: 'input',
        message: 'Provide tests for your application. Then provide examples on how to run them here.',
        name: 'test'
    },
    {
        type: 'input',
        message: 'Enter your GitHub username:',
        name: 'username'
    },
    {
        type: 'input',
        message: 'Enter your GitHub repository:',
        name: 'repo'
    }

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  return fs.writeFileSync(`./dist/${fileName}`, data)  
}

// TODO: Create a function to initialize app
function init() {
    return inquirer.prompt (questions)
    .then (function (data){
        console.log(data)
        const readmeData = generateMarkdown (data)
        console.log(readmeData)
       writeToFile ("generateReadme.md", readmeData)
    })
}

// Function call to initialize app
init();
