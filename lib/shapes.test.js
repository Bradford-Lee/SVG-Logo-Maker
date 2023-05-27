const Shape = require('./shapes.js');
const Circle = require('./circle.js');
const Triangle = require('./triangle.js');
const Square = require('./square.js');


describe('Shape', () => {
    // Test to verify that the Shape class can be instantiated.
    // describe('Instantiate', () => {
    //     it('should be an instance of Shape class', () => {
    //         const shape = new shapes();
    //     });
    // });


    // // Test to verify that three character text can be assigned. create variable inside to expect __ to be __ (toBeEqual)
    // describe('Initialize text', () => {
    //     it('should set a text of three characters properly', () => {
    //         const text = '';
    //         const shape = new shapes(text);
    //         console.log(shape.text);

    //         expect(shape.text).toBe(text);
    //     });
    // });

    // Test to verify a text color can be assigned.

    describe ('Circle', () => {
        it('should return a circle', () => {
            const circle = new Circle('SVG','white','green');
            expect(circle.render()).toEqual(`<svg version="1.1"
            width="300" height="200"
            xmlns="http://www.w3.org/2000/svg">
            <circle cx="150" cy="100" r="80" fill="green" />
            <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">SVG</text>
        </svg>`);
        });
    });

    describe ('Triangle', () => {
        it('should return a triangle', () => {
            const triangle = new Triangle('SVG','white','green');
            expect(triangle.render()).toEqual(`<svg version="1.1"
            width="300" height="200"
            xmlns="http://www.w3.org/2000/svg">
            <polygon points="100, 15 200, 200 0, 200" fill="green" />
            <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">SVG</text>
        </svg>`);
        });
    });

    describe ('Square', () => {
        it('should return a square', () => {
            const square = new Square('SVG','white','green');
            expect(square.render()).toEqual(`<svg version="1.1"
            width="300" height="200"
            xmlns="http://www.w3.org/2000/svg">
            <rect width=200 height=200 fill="green" />
            <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">SVG</text>
        </svg>`);
        });
    });


})