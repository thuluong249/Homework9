// TODO: Include packages needed for this application
const inquirer = require("inquirer");

const generateMarkdown = require("./utils/generateMarkdown.js");

const fs = require("fs");
// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "Title",
    message: "What is the title of your Project?",
  },
  {
    type: "input",
    name: "Description",
    message: "What is the description for your project?",
  },
  {
    type: "input",
    name: "Installation",
    message: "Please provide the required installations for this application?",
  },
  {
    type: "input",
    name: "Usage",
    message: "Please provide the instructions for this usage?",
  },
  {
    type: "List",
    name: "License",
    choices: ["MIT License", "Mozilla Public License 2.0", "Apache-2.0"],
    message: "Please select the type of License?",
  },
  {
    type: "input",
    name: "Contributing",
    message: "Please provide the members contributing?",
  },
  {
    type: "input",
    name: "Test",
    message: "Please provide testing instructions for this application?",
  },
  {
    type: "input",
    name: "Questions",
    message: "Please provide some questions for this application?",
  },
  {
    type: "input",
    name: "Github",
    message: "What is your Github user name?",
  },
  {
    type: "input",
    name: "Email",
    message: "What is your email address?",
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  return fs.writeFileSync(fileName, data);
}
// TODO: Create a function to initialize app
function init() {
  inquirer
    .prompt(questions)
    .then((data) => writeToFile("READMEGENERATED.md", generateMarkdown(data)))
    .then(() => console.log("README successfully written."))
    .catch((err) => console.log(err));

  // // Open a new file with name input.txt and write Simply Easy Learning! to it.
  // console.log("Simply Easy Learning");
}

// Function call to initialize app
init();
