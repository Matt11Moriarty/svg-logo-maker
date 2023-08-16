const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./lib/shapes.js');
const path = require('path');
const questions = require('./lib/questions.js');


let runInquirer = () => {
    inquirer.prompt(
        questions.array 
    )
    .then((answers) => {
        console.log(answers);
    })
    .catch((error) => {
        if (error.isTtyError) {
          console.log('Can\'t be rendered');
        } else {
          console.log('Something went wrong');
        }
      })
}


//initiate application
let init = () => {
    runInquirer();
}

init();