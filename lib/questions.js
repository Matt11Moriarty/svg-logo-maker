const validateColor = require('validate-color'); 

array = [
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
    },
    {
        type: 'list',
        message: 'Please pick a shape.',
        name: 'shape',
        choices: 
        [
            {
                name: 'Square',
                value: 
                {
                    name: 'Square',
                    data: 'rect x="40" y="40" width="120" height="120"',
                }
            },
            {
                name: 'Circle',
                value: 
                {
                    name: 'Circle',
                    data: 'circle cx="150" cy="100" r="80"',
                }
            },
            {
                name: 'Triangle',
                value: 
                {
                    name: 'Triangle',
                    data: 'polygon points="100,20 180,180 20,180"',
                }
            }
        ]
    }
]

module.exports = 
{
    "array": array,
}