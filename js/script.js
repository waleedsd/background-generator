// Here's a test channel number, check the console!
console.log(getRandomColorChannel())

// 1) Built a colour string using `getRandomColorChannel()` for each of the three colour channels (R, G, B)

let r = Math.floor(Math.random() * 256);
let g = Math.floor(Math.random() * 256);
let b = Math.floor(Math.random() * 256);

function getRandomColorChannel(options=256) {
        return Math.floor( Math.random() * options )
      }
     
//let getRandomColorChannel = newColor;
// 2) Update user interface (`document`), setting the new colour to the body's background
document.getElementById("ncolor").style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";

// 3) Use the new RGB value to update the label "rgb(###, ####, ###)" (replacing ###s with the Number values)
elem.style.color = newColor;
// 4) Wrap the random colour procedure in a function named `setNewColour()`, call it from the `console` to test


