# svg-logo-maker

## Description

This application can be used to create simple logos for users who need to create a simple logo and deploy it in the browser!
SVG files can be complicated to create manually, so by generating them automatically based on user input, logo designers can save a lot of time.

In building this application, I was able to get very familiar with NPM packages like fs, inquirer, and path. I got more familiar with modularizating my code, and writing tests to verify everything is working as expected.

## Table of Contents (Optional)

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

## Installation

1. Clone the code to your local machine
2. Run `npm i` in an integrated terminal to install the necessary node modules

## Usage

Video Recording: 

1. Clone the code to your local machine
2. Run `npm i` in an integrated terminal to install the necessary node modules
3. Initialize the application by running `node index.js`
4. Answer the prompts!
5. Once you have completed the prompts, a file called `logo.svg` will be generated in the `new_shape_file` folder
6. Open `logo.svg` in your browser to see your finalized logo 

## Credits

Resources: 
- Inquirer: https://www.npmjs.com/package/inquirer#question
- Jest: https://www.npmjs.com/package/jest
- Validate color: https://www.npmjs.com/package/validate-color
- Switch statement: https://www.w3schools.com/js/js_switch.asp
- License badges: https://gist.github.com/lukas-h/2a5d00690736b4c3a7ba

## License

### The MIT License

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Badges

![badmath](https://img.shields.io/github/languages/top/lernantino/badmath)

## Features

1. SVG file generator
2. Color validation

## How to Contribute

N/A

## Tests

For each different `shape` class (circle, square, triangle):
   1. Instantiate: it should be an instance of the {`shape`} class
   2. Render:  it should output a {`color`} {`shape`} with {`textColor`} text svg file that can be rendered in the browser