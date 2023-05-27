const Circle = require('./circle.js')
const Triangle = require('./triangle.js')
const Square = require('./square.js')


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

module.exports = setShape;