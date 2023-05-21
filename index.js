const shapes = require('./lib/shapes.js');

const newShape = new shapes(
    'SVG',
    'Text color OR hexadecimal',
    'Circle, Triangle, or Square',
    'Shape color OR hexadecimal',
);

newShape.printMetaData();
// shapes.run();