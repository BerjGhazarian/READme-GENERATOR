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
     
];

function writeToFile(fileName, data) {}

function init() {}

init();