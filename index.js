const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");

const questions = [
    {
        type: "input",
    message: "What is your name?",
    name: "nameOne",
    },
    {
        type: "input",
        message: "What is your project title?",
        name: "title",
    },
    {
        type: "input",
        message: "Give a description of your project.",
        name: "description",
      },
      {
        type: "input",
        message: "Input installation guidelines",
        name: "installation",
      },
      {
        type: "input",
        message: "Insert instructions for use",
        name: "usage",
      },
      {
        type: "list",
        message: "Use arrow keys to select license options",
        name: "license",
        choices: ["MIT", "Apache"],
      },
      {
        type: "input",
        message: "List the names of everyone who contributed to this project.",
        name: "contribute",
      },
      {
        type: "input",
        message: "Write the test guidelines for your project",
        name: "test",
      },
      {
        type: "input",
        message: "Write your email address to be displayed for any questions",
        name: "questions",
      },
      {
        type: "input",
        message: "What is your github username",
        name: "github",
      },
     
];
function writeToFile(fileName, data)  {
    console.log("indside writefile", data);
    //here is the logic 
    return fs.writeFileSync(path.join(process.cwd(), fileName),data);
  }

function init() {
    inquirer
    .prompt(questions)

    .then((data) => {
      console.log("inside init", data);
      writeToFile("READMEtest.md",generateMarkdown(data));
      console.log("after writefile");
    });
}
function generateMarkdown(data){
  return `
  #${data.title}

  ## License
  
  ![license](https://img.shields.io/static/v1?label=license&message=${data.license}&color=success)

  ## Descritption
  
  ## Table of Contents
  
  * [Installation](#installation)
  * [Usage](#usage)
  * [Contribution Guidelines](#contribution-guidelines)
  * [Tests](#tests)
  * [Questions](#questions)
  
  ## Installation
  
  ${data.installation}
  
  ## Usage
  
  ${data.usage}
  
  ## Contribution Guidelines
  
  ${data.contribution}
  
  ## Tests
  
  ${data.tests}
  
  ## Questions?
  
  Please contact me at either of the following for any inquiries about the project.
  * GitHub Profile: https://github.com/${data.username}
  * Email: ${data.email}
  `
  
}
init();