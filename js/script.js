// This function returns a random Number between 0 (inclusive) and the argument passed to the function, minus 1
// If no argument is passed, 256 is set, ie, returns a number between and including 0 to 255
// 		For example: 
//    getRandomColorChannel(5) will return either 0, 1, 2, 3, 4
const getRandomColorChannel = function(options=256) {
  return Math.floor( Math.random() * options )
}

//Wrap the entire procedure in a function named `setNewColour()`, call it multiple times from the `console` to test

const setNewColor = function () {
// Create variables to display the random numbers for rgb
const r = getRandomColorChannel()
const g = getRandomColorChannel()
const b = getRandomColorChannel()

// Write an rgb-color string using `getRandomColorChannel()` that can be set as the value for `background-color` in CSS
const currentRandomColor = `rgb(${r}, ${g}, ${b})`

// Update user interface (the `document`), setting the new colour string to the body's background-color property
document.body.style.backgroundColor = currentRandomColor

// Use the three individual RGB numbers to update the HTML element "rgb(###, ####, ###)" (replacing ###s with the values)
const outputColor = document.querySelector(`#bgColorValues`)
outputColor.textContent = currentRandomColor
}

// Action performed when click on the "New Background" button
  document.getElementById(`changeColorButton`).addEventListener(`click`, setNewColor)

