// ========================================
// INTERACTIVE MOOD SPACE
// DOM + EVENT LISTENERS + BOM
// ========================================


// ----------------------------------------
// 1. CLOCK - TIME / BOM
// ----------------------------------------

const clock = document.getElementById("clock");
const timeMessage = document.getElementById("timeMessage");

function updateClock() {

    const now = new Date();

    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    // Add a zero before single-digit numbers
    minutes = String(minutes).padStart(2, "0");
    seconds = String(seconds).padStart(2, "0");

    let period = hours >= 12 ? "PM" : "AM";

    hours = hours % 12;

    if (hours === 0) {
        hours = 12;
    }

    clock.textContent = `${hours}:${minutes}:${seconds} ${period}`;


    // Change the message depending on the time
    const currentHour = now.getHours();

    if (currentHour < 12) {
        timeMessage.textContent = "Good morning! ☀️";
    } 
    else if (currentHour < 18) {
        timeMessage.textContent = "Good afternoon! 🌤️";
    } 
    else {
        timeMessage.textContent = "Good evening! 🌙";
    }
}

// Run immediately
updateClock();

// Update every second
setInterval(updateClock, 1000);


// ----------------------------------------
// 2. MOOD BUTTON - DOM MANIPULATION
// ----------------------------------------

const moodButton = document.getElementById("moodButton");
const moodText = document.getElementById("moodText");

let moodNumber = 0;

moodButton.addEventListener("click", function() {

    moodNumber++;

    if (moodNumber === 1) {

        document.body.classList.remove("sunset");
        document.body.classList.add("dark");

        moodText.textContent = "Current mood: Dark 🌙";

        moodButton.textContent = "Change to Sunset";

    } 
    
    else if (moodNumber === 2) {

        document.body.classList.remove("dark");
        document.body.classList.add("sunset");

        moodText.textContent = "Current mood: Sunset 🌅";

        moodButton.textContent = "Change to Calm";

    } 
    
    else {

        document.body.classList.remove("dark");
        document.body.classList.remove("sunset");

        moodText.textContent = "Current mood: Calm 🌸";

        moodButton.textContent = "Change Mood";

        moodNumber = 0;
    }

});


// ----------------------------------------
// 3. MOUSE EVENT
// ----------------------------------------

const mouseArea = document.getElementById("mouseArea");
const mouseMessage = document.getElementById("mouseMessage");
const circle = document.getElementById("circle");

mouseArea.addEventListener("mouseenter", function() {

    mouseMessage.textContent =
        "Your mouse entered the area! 🖱️";

    circle.style.transform = "scale(1.4)";
    circle.style.background = "#ff7eb3";

});

mouseArea.addEventListener("mouseleave", function() {

    mouseMessage.textContent =
        "Your mouse left the area! Move it back over the box.";

    circle.style.transform = "scale(1)";
    circle.style.background = "#9b6dcc";

});


// ----------------------------------------
// 4. KEYBOARD EVENT
// ----------------------------------------

const keyboardMessage =
    document.getElementById("keyboardMessage");

document.addEventListener("keydown", function(event) {

    if (event.code === "Space") {

        event.preventDefault();

        keyboardMessage.textContent =
            "🎉 You pressed SPACE! The keyboard event worked!";

        keyboardMessage.style.transform = "scale(1.08)";

        setTimeout(function() {

            keyboardMessage.style.transform = "scale(1)";

        }, 300);

    }

    // Press D for dark mode
    if (event.key.toLowerCase() === "d") {

        document.body.classList.toggle("dark");

        keyboardMessage.textContent =
            "🌙 You pressed D — Dark Mode toggled!";
    }

});


// ----------------------------------------
// 5. WINDOW / BOM
// ----------------------------------------

const screenSize = document.getElementById("screenSize");
const windowSize = document.getElementById("windowSize");

function updateWindowInformation() {

    // BOM screen object
    screenSize.textContent =
        `Screen size: ${screen.width}px × ${screen.height}px`;

    // BOM window object
    windowSize.textContent =
        `Browser window: ${window.innerWidth}px × ${window.innerHeight}px`;
}

updateWindowInformation();


// Update when browser window is resized
window.addEventListener("resize", function() {

    updateWindowInformation();

    keyboardMessage.textContent =
        "🖥️ You resized the browser window!";

});


// ----------------------------------------
// 6. BROWSER INFO BUTTON
// ----------------------------------------

const infoButton = document.getElementById("infoButton");
const browserInfo = document.getElementById("browserInfo");

infoButton.addEventListener("click", function() {

    browserInfo.textContent =
        `You are using: ${navigator.userAgent}`;

});


// ----------------------------------------
// 7. RESET BUTTON
// ----------------------------------------

const resetButton = document.getElementById("resetButton");

resetButton.addEventListener("click", function() {

    document.body.classList.remove("dark");
    document.body.classList.remove("sunset");

    moodNumber = 0;

    moodText.textContent =
        "Current mood: Calm 🌸";

    moodButton.textContent =
        "Change Mood";

    mouseMessage.textContent =
        "Move your mouse over this box!";

    keyboardMessage.textContent =
        "Waiting for a key...";

    browserInfo.textContent = "";

});