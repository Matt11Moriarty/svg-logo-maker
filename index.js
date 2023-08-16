const fs = require('fs');
const inquirer = require('inquirer');
const validateColor = require('validate-color'); 
const generateMarkdown = require('./lib/shapes.js');
const path = require('path');

questions = [
    {
        type: 'input',
        message: "What text would you like to display in your image? This can be no more than 3 characters.",
        name: 'text',
        validate: (val) => {
            if (val.length > 3) {
                return 'I said this can be no more than 3 characters.';
            }
            else {
                return true;
            }
        }
    },
    {
        type: 'input',
        message: 'Enter the background color. It can be in any valid color format (name, special name, hex, rgb, etc.)',
        name: 'color',
        validate: (val) => {
            return validateColor.default(val) ? true : 'Please enter a valid color';
        }
    }

]



let init = () => {
    inquirer.prompt(
        questions 
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
init();