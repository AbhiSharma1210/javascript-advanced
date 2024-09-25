// A simple project to console log random text
// The text should be displayed when 'start' button is clicked.
// The text should stop repeating when 'stop' button is clicked.


// setInterval method takes a 'handler' function and time in ms.
let intervalId;
function callInterval() {

    intervalId = setInterval(() => {
        let innerText = document.querySelector('#heading').innerHTML
        if (innerText == 'Welcome') {
            document.querySelector('#heading').innerHTML = 'Abhinav'
        } else {
            document.querySelector('#heading').innerHTML = 'Welcome'
        }
    }, 2000);
}

// document.querySelector('#start').addEventListener('click', () => {
//     if (!intervalId) { // Prevents multiple intervals from being set
//         callInterval();
//     }
// });

document.querySelector('#start').addEventListener('click', callInterval) // Do not envoke the function, just pass the reference

// document.querySelector('#start').addEventListener('click', () => { // Another way to achive this.
//     intervalId = setInterval(() => {
//         console.log("Hi, Abhinav", Date.now())
//     }, 1000);
// })
document.querySelector('#stop').addEventListener('click', () => {
    clearInterval(intervalId);
    console.log("STOPPED");

    // intervalId = null; // Reset intervalId to allow starting again
});


