// Include packages needed for this application
const {Circle, Triangle, Square} = require('./lib/shapes.js');
const inquirer = require("inquirer");
const fs = require('fs');
// const setShape = require('./lib/setShape.js')


// const newShape = new shapes(
//     'SVG',
//     'Text color OR hexadecimal',
//     'Circle, Triangle, or Square',
//     'Shape color OR hexadecimal',
// );

// newShape.printMetaData();
// shapes.run();

// function setShape(response) {
//     if (response.shape === 'Circle'){
//         let userShape = new Circle (response.text, response.textColor, response.shapeColor);
//         return userShape.render();
//     };
//     if (response.shape === 'Triangle'){
//         let userShape = new Triangle (response.text, response.textColor, response.shapeColor);
//         return userShape.render();
//     };
//     if (response.shape === 'Square'){
//         let userShape = new Square (response.text, response.textColor, response.shapeColor);
//         return userShape.render();
//     };
// };

// Create an array of questions for user input
function startPrompt() {
    inquirer.prompt([ 
        {
            type: 'input',
            name: 'text',
            message: 'Enter the text of your Logo:'
        },
        {
            type: 'input',
            name: 'textColor',
            message: 'What is your text color?(Enter color keyword OR hexadecimal number):'
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
            message: 'What is your shape color?(Enter color keyword OR hexadecimal number):'
        }
    ]).then((response) => {
        if (response.text.length > 3) {
            console.log("The logo must be 3 characters or less");
            startPrompt();
        } else {
            writeToFile(response)
        }

         console.log(response)
    

    }).catch((err) => console.log(err))

    function setShape(response) {
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
    
    function writeToFile(response) {
        const svg = setShape(response);
        console.log(svg);
        // add fs code here to save file
        fs.writeFile("logo.svg", svg, (error) => {
            if (error) {
                console.log(error);
            } else {
                console.log("Generated logo.svg");
            }
        })
    };
};


startPrompt();