// Here we will try to change the background color randomly


// Global variables
let intervalId;

// Functions
function randomColor() {
    let colorCode = '#';
    let Hex = '0123456789ABCDEF';
    for (let i = 0; i < 6; i++) {
        colorCode += Hex[Math.floor(Math.random() * 16)]
    }
    // console.log(colorCode)
    return colorCode;
}

// randomColor();

function startChangingColor() {
    if (!intervalId) {
        intervalId = setInterval(() => {
            document.getElementById('content-box').style.backgroundColor = randomColor();
        }, 2000)
        // console.log('Color changed')
    }
}

function stopChangingColor() {
    clearInterval(intervalId);
    intervalId = null;
}

// DOM manipulation

document.querySelector('#start').addEventListener('click', startChangingColor)

document.querySelector('#stop').addEventListener('click', stopChangingColor)