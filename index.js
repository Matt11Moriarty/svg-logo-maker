const fs = require('fs');
const inquirer = require('inquirer');
const path = require('path');
const questions = require('./lib/questions.js');
const shapes = require('./lib/shapes.js');

//file creating function
const generateFile = (svgFileData) => {
    let filePath = path.resolve(`${__dirname}/new_shape_file`, 'logo.svg')
    fs.writeFile(filePath, svgFileData, err => {
        if (err) throw err;
        console.log('Generated logo.svg')
    })
}

//inquirer function. also calls the file creator function
const runInquirer = () => {
    inquirer.prompt(
        questions.array 
    )
    .then((answers) => {
        generateFile(
            shapes.generateNewShape(answers)
        ); 

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