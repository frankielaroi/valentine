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

function animateButton1() {
    window.location.href = 'accepted.html';
}

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
