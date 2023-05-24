const fs = require('fs');

function writeToFile(svg) {
    // add fs code here to save file
    fs.writeFile("logo.svg", svg, (error) => {
        if (error) {
            console.log(error);
        } else {
            console.log("Success!");
        }
    })
};

const shapeColor = "green";
const textColor = "white"

writeToFile(`<svg version="1.1"
width="300" height="200"
xmlns="http://www.w3.org/2000/svg">

<circle cx="150" cy="100" r="80" fill="${shapeColor}" />

<text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">SVG</text>

</svg>`);

console.log("Hey".length);