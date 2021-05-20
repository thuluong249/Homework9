// TODO: Include packages needed for this application
var inquirer = require("inquirer");
var fs = require("fs");
var generateMarkdown = require("./utils/generateMarkdown");
// TODO: Create an array of questions for user input
const questions = [
  {
    name: "word",
    message: "What would you like to say?",
    type: "list",
    choices: ["Apple", "banana", "cat"],
  },
  {
    name: "food",
    message: "What would you like to eat?",
    type: "input",
  },
  {
    name: "title",
    message: "Title",
    type: "input",
  },
  {
    name: "github",
    message: "My github username",
    type: "input",
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, answers) {
  const text = generateMarkdown(answers);
  fs.writeFile(fileName, text, function (err) {
    if (err) {
      return console.error(err);
    }
    console.log("Data written successfully!");
    // Read the newly written file and print all of its content on the console
  });
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then(function (answers) {
    console.log(answers);
    writeToFile("Myreadme.md", answers);
  });
  // Open a new file with name input.txt and write Simply Easy Learning! to it.
}

// Function call to initialize app
init();

// use node inquerier to get input.
// write a readme file.md
// title
// descriptions, installations, Useage, contributions, test instruction.
// collect info and write it in to the readme.
// github username.
// create a link to github profile.
// email address.
// table of content.
