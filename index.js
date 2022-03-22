const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");
const generateMarkdown = require("./utils/generateMarkdown");
const { clear } = require("console");

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
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
  }

function init() {
    inquirer
    .prompt(questions)

    .then((data) => {
      console.log("inside init", data);
      writeFile("READMEtest.md", generateMarkdown(data));
      console.log("after writefile");
    });
}
init();