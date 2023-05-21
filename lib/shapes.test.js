const shapes = require('./shapes.js');

describe('Shape', () => {
    // Test to verify that the Shape class can be instantiated.
    describe('Instantiate', () => {
        it('should be an instance of Shape class', () => {
            const shape = new shapes();
        });
    });


    // Test to verify that three character text can be assigned.
    describe('Initialize text', () => {
        it('should set a text of three characters properly', () => {
            const text = '';
            const shape = new shapes(text);
            console.log(shape.text);

            expect(shape.text).toBe(text);
        });
    });

    // Test to verify a text color can be assigned.







})