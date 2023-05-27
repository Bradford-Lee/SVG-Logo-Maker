const Shape = require('./shapes.js')

class Square extends Shape {
    constructor(text, textColor, shapeColor) {
        super(text, textColor, shapeColor)
    };
    render() {
        `<svg version="1.1"
            width="300" height="200"
            xmlns="http://www.w3.org/2000/svg">
            <rect width=200 height=200 fill="${shapeColor}" />
            <text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>
        </svg>`
    };
};

module.exports = Square;