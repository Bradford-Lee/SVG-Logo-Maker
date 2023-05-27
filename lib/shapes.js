// class shapes extend circle, triangle, square
class Shape {
    constructor(text, textColor, shapeColor) {
        this.text = text;
        this.textColor = textColor;
        this.shapeColor = shapeColor;
    };
};

class Circle extends Shape {
    constructor(text, textColor, shapeColor) {
        super(text, textColor, shapeColor)
    }; 
    render() {
        `<svg version="1.1"
            width="300" height="200"
            xmlns="http://www.w3.org/2000/svg">
            <circle cx="150" cy="100" r="80" fill="${this.shapeColor}" />
            <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
        </svg>`
    };
};

class Triangle extends Shape {
    constructor(text, textColor, shapeColor) {
    super(text, textColor, shapeColor)
    };
    render() {
        `<svg version="1.1"
            width="300" height="200"
            xmlns="http://www.w3.org/2000/svg">
            <polygon points="100, 15 200, 200 0, 200" fill="${shapeColor}" />
            <text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>
        </svg>`
    };
};

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
const circle1 = new Circle("SVG", "green", "circle", "blue" );
// console.log(circle1);


module.exports = {
    // Shape, 
    Circle, 
    Triangle, 
    Square,
    // setShape
};
