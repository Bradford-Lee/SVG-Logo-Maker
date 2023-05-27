// Include packages needed for this application
const {Circle, Triangle, Square} = require('./lib/shapes.js');
const inquirer = require("inquirer");
const fs = require('fs');

// Create an array of questions for user input
function startPrompt() {
    inquirer.prompt([ 
        {
            type: 'input',
            name: 'text',
            message: 'Enter the text of your Logo (Must be 3 characters or less):'
        },
        {
            type: 'input',
            name: 'textColor',
            message: 'Enter the desired text color (color keyword OR hexadecimal number):'
        },
        {
            type: 'list',
            choices: ['Circle', 'Triangle', 'Square'],
            name: 'shape',
            message: 'Pick a shape for your logo:'
        },
        {
            type: 'input',
            name: 'shapeColor',
            message: 'Enter the desired shape color (color keyword OR hexadecimal number):'
        }
    ]).then((response) => {
        if (response.text.length > 3) {
            console.log("The logo must be 3 characters or less");
            startPrompt();
        } else {
            writeToFile(response)
        }
    }).catch((err) => console.log(err))

// Grab user input to define shape
    function defineShape(response) {
        if (response.shape === 'Circle'){
            let userShape = new Circle (response.text, response.textColor, response.shapeColor);
            return userShape.render();
        };
        if (response.shape === 'Triangle'){
            let userShape = new Triangle (response.text, response.textColor, response.shapeColor);
            return userShape.render();
        };
        if (response.shape === 'Square'){
            let userShape = new Square (response.text, response.textColor, response.shapeColor);
            return userShape.render();
        };
    };
// Write to .svg file
    function writeToFile(response) {
        const svg = defineShape(response);
        console.log(svg);
        // add fs code here to save file
        fs.writeFile("./examples/logo.svg", svg, (error) => {
            if (error) {
                console.log(error);
            } else {
                console.log("Generated logo.svg");
            }
        })
    };
};

startPrompt();