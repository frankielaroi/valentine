window.addEventListener('load', function () {
    // Set a delay to simulate loading time (you can remove this in your actual implementation)
    setTimeout(function () {
        // Remove the preloader from the DOM
        var preloader = document.querySelector('.preloader');
        preloader.parentNode.removeChild(preloader);
    }, 3800); // Adjust the delay time as needed
});

let currentWidth = 3;  // Initial width of the button1
let currentHeight = 3; // Initial height of the button1
let current = 3;



function animateButton2() {
    // Multiply the current width and height by 1.05
    currentWidth *= 1.05;
    currentHeight *= 1.05;
    current *= 1.05;

    // Update the style properties of button2 with the new dimensions
    var button1 = document.getElementById('button1');
    button1.style.width = currentWidth + 'em';
    button1.style.height = currentHeight + 'em';

    var yes = document.getElementById("yes");
    yes.style.fontSize = current + "em";
    // Call the animateButton1 function when the second button is clicked
    animateButton1();
}
const loveQuotes = [
    "Love is composed of a single soul inhabiting two bodies. - Aristotle",
    "The best thing to hold onto in life is each other. - Audrey Hepburn",
    "Love is not just looking at each other, it's looking in the same direction. - Antoine de Saint-Exupery",
    "I have decided to stick with love. Hate is too great a burden to bear. - Martin Luther King Jr.",
    "Being deeply loved by someone gives you strength while loving someone deeply gives you courage. - Lao Tzu",
    "Love is an endless mystery, for it has nothing else to explain it. - Rabindranath Tagore"
];

function generateRandomQuote() {
    const quoteText = document.getElementById('quoteText');
    const randomIndex = Math.floor(Math.random() * loveQuotes.length);
    const randomQuote = loveQuotes[randomIndex];
    quoteText.textContent = randomQuote;
}

// Call the function when the document is ready
document.addEventListener('DOMContentLoaded', generateRandomQuote);