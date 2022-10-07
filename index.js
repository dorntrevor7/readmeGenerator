const inquirer = require("inquirer");
const fs = require("fs");
let readMeTitle,
  readMeDescription,
  readMeUsername,
  readMeUsage,
  readMeTableContents,
  readMeInstallation,
  readMeLicense,
  readMeContributing,
  readMeTests,
  readMeQuestions;

inquirer
  .prompt([
    {
      type: "Input",
      name: "title",
      message: "What is the name of your project?",
    },
    {
      type: "Input",
      name: "username",
      message: "What is your username?",
    },
    {
      type: "Input",
      name: "description",
      message: "What is a description of your project?",
    },
    {
      type: "Input",
      name: "usage",
      message: "What would someone use this application?",
    },
    {
      type: "Input",
      name: "installation",
      message: "What installations did you use for this app?",
    },
    {
      type: "Input",
      name: "contributing",
      message: "What installations did you use for this app?",
    },
    {
      type: "Input",
      name: "license",
      message: "What installations did you use for this app?",
    },
    {
      type: "Input",
      name: "tests",
      message: "What tests did you run for this app?",
    },
    {
      type: "Input",
      name: "questions",
      message: "What are your questions?",
    },
  ])
  .then(function (answers) {
    console.log(answers);
    const answer = JSON.stringify(answers, null, 2);
    readMeTitle = answers.title;
    readMeDescription = answers.description;
    readMeUsername = answers.username;
    readMeUsage = answers.usage;
    // readMeTableContents = answers.tableContents;
    readMeInstallation = answers.installation;
    readMeLicense = answers.license;
    readMeContributing = answers.contributing;
    readMeTests = answers.tests;
    readMeQuestions = answers.questions;

    const fileName = `./assets/${readMeTitle}.md`;
    // Use user feedback for... whatever!!
    fs.appendFile(fileName, answer, (err) => {
      // TODO: Describe how this ternary operator works
      // if error then log the error else commit the log
      err ? console.error(err) : console.log("Commit logged!");
    });
  })
  .catch((err) => {
    throw err;
  });
const readMe = `
  # Readme Generator

## Description

${readMeDescription}

## User Story

AS A developer
I WANT a README generator
SO THAT I can quickly create a professional README for a new project


## ${readMeTitle} Criteria


GIVEN a command-line application that accepts user input
WHEN I am prompted for information about my application repository
THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
WHEN I enter my project title
THEN this is displayed as the title of the README
WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
WHEN I choose a license for my application from a list of options
THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
WHEN I enter my GitHub username
THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
WHEN I enter my email address
THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
WHEN I click on the links in the Table of Contents
THEN I am taken to the corresponding section of the README


## Usage

${readMeUsage}

This site was built using Github Pages, check it out: [${readMeTitle}!](https://${readMeUsername}.github.io/${readMeTitle}/).`;
/*  


  set the variables for the reponse names 

  fs.writefile a read me that will write the variables for the reponse names

  ternary expression


*/
