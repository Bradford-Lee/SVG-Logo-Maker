// class shapes extend circle, triangle, square
class Shape {
    constructor(text, textColor, shape, shapeColor) {
        this.text = text;
        this.textColor = textColor;
        this.shape = shape;
        this.shapeColor = shapeColor;
    }

    printMetaData(){
        return ``
    }
}

class Circle extends Shape {
    constructor(text, textColor, shape, shapeColor) {
    super(text, textColor, shape, shapeColor)
}}

class Triangle extends Shape {
    constructor(text, textColor, shape, shapeColor) {
    super(text, textColor, shape, shapeColor)
}}

class Square extends Shape {
    constructor(text, textColor, shape, shapeColor) {
    super(text, textColor, shape, shapeColor)
}}


const circle1 = new Square("SVG", "green", "circle", "blue" );
console.log(circle1);


module.exports = Circle, Triangle, Square;
