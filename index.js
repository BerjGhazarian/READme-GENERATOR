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
     
];

function writeToFile(fileName, data) {}

function init() {}

init();