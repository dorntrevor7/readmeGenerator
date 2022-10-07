// Modules
var inquirer = require("inquirer");
var fs = require("fs");

// prompts the user questions to put in their repo using inquirer npm
inquirer
  .prompt([
    {
      type: "list",
      message: "What kind of license should your project have?",
      name: "license",
      choices: ["MIT", "Apache2.0", "GPI3.0", "BSD3", "none"],
    },
    {
      type: "input",
      message: "What is your name?",
      name: "name",
    },
    {
      type: "input",
      message: "What is your project name?",
      name: "projectName",
    },
    {
      type: "input",
      message: "Write a description",
      name: "description",
    },
    {
      type: "input",
      message: "What command should be run to run tests?",
      name: "commandTests",
    },
    {
      type: "input",
      message: "What command should be run to install?",
      name: "commandInstall",
    },
    {
      type: "input",
      message: "What does the user need to know about using the repo?",
      name: "knowRepo",
    },
    {
      type: "input",
      message:
        "What does the user need to know about contributing to the repo?",
      name: "contributingRepo",
    },

    // Creates a promise function after the prompts
  ])
  .then(function (data) {
    // Appends the answers from the prompts to a README.md file and passes
    // through the function readMe with params of data and creates an err function
    fs.writeFile(`${data.projectName}.md`, readMe(data), function (err) {
      // If theres an error it will stop
      if (err) {
        return console.log(err);
      }
      console.log("Loading...");
    });

    // Displays in the README.md
    function readMe() {
      return `
# Welcome! My name is ${data.name}
## Project Title:
${data.projectName}
<br>
## Description:
${data.description}
<br>
## Table of Contents:
- [Description](#Description)
- [Install-Dependencies](#Install-Dependencies)
- [Test](#Test)
- [Repository](#Repository)
- [Contributing](#Contributing)
- [Followers](#Followers)
- [Contact](#Contact)
- [Questions](#Questions)
<br>
## Installation Command:
\`${data.commandInstall}\`
<br>
## Tests:
\`${data.commandTests}\`
<br>
## Usage:
${data.knowRepo}
<br>
## License:
![License](https://img.shields.io/badge/license-${data.license}-green.svg)
<br>
## Contributing:
${data.contributingRepo}
<br>
`;
    }
  });
