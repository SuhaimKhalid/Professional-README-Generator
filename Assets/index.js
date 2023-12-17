const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// licence

const licenceUrl = (licenename) =>{

}


// array of questions for user
const questions = [
    {
        type:  "input",
        message: "What is the title of your project ?",
        name: "title_project"
    },
    // {
    //     type:  "input",
    //     message: "Sections entitled:",
    //     name: "Sections_entitled"
    // },
    {
        type:  "input",
        message: "Write a short Description.",
        name: "Description"
    },
    {
        type:  "input",
        message: "How to Install?",
        name: "Installation"
    },
    {
        type:  "input",
        message: "How to use it?",
        name: "Usage"
    },
    {
        type:  "list",
        message: "Which License you want to use?",
        name:"license",
        choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3'],
    //     choice:[
    //     {"MIT":"[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"},
    //     {"APACHE 2.0": "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"},
    //     {"GPL 3.0": "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)"},
    //     {"BSD 3": "[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)"}
    //    ]
      
    },
    {
        type:  "input",
        message: "What is contribution guidline?",
        name: "Contributing"
    },
    {
        type:  "input",
        message: "What are test instructions?",
        name: "Tests"
    },
    {
        type:  "input",
        message: "What is the GitHub Username?",
        name: "GitHub_name"
    },
    {
        type:  "input",
        message: "What is your email address?",
        name: "email"
    }
];

// function to write README file
function writeToFile(fileName, data) {

    fs.writeFile("README.md",data);
}

// function to initialize program
function init() {
    inquirer.prompt(questions);

}

// function call to initialize program
init();

