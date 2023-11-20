const defaultpic = document.getElementById('default');
const blackdefault = document.getElementById('black-default');
const bluedefault = document.getElementById('blue-default');
const mintdefault = document.getElementById('mint-default');
const pinkdefault = document.getElementById('pink-default');
const purpledefault = document.getElementById('purple-default');
const whitedefault = document.getElementById('white-default');
const yellowdefault = document.getElementById('yellow-default');

blackdefault.addEventListener('click', function() {
    defaultpic.src='default/black.png';
})
bluedefault.addEventListener('click', function() {
    defaultpic.src='default/blue.png';
})
mintdefault.addEventListener('click', function() {
    defaultpic.src='default/mint.png'
})
pinkdefault.addEventListener('click', function() {
    defaultpic.src='default/pink.png'
})
purpledefault.addEventListener('click', function() {
    defaultpic.src='default/purple.png'
})
whitedefault.addEventListener('click', function() {
    defaultpic.src='default/white.png'
})
yellowdefault.addEventListener('click', function() {
    defaultpic.src='default/yellow.png'
})

// script.js

document.addEventListener('DOMContentLoaded', function () {
    const overlayDiv = document.querySelector('.overlay');

    overlayDiv.addEventListener('dragover', function (e) {
        e.preventDefault();
        overlayDiv.classList.add('dragover');
    });

    overlayDiv.addEventListener('dragleave', function () {
        overlayDiv.classList.remove('dragover');
    });

    overlayDiv.addEventListener('drop', handleDrop);

    function handleDrop(e) {
        e.preventDefault();
        overlayDiv.classList.remove('dragover');

        const files = e.dataTransfer.files;

        if (files.length > 0 && files[0].type.startsWith('image/')) {
            const reader = new FileReader();

            reader.onload = function (readerEvent) {
                const newImage = new Image();
                newImage.src = readerEvent.target.result;
                newImage.classList.add('draggable-image');

                // Add styles to position the new image within the overlay div
                newImage.style.position = 'absolute';
                newImage.style.width = '100%';  // Adjust as needed
                newImage.style.height = '100%'; // Adjust as needed
                newImage.style.left = '0';
                newImage.style.top = '0';

                overlayDiv.innerHTML = ''; // Clear existing content
                overlayDiv.appendChild(newImage);
            };

            reader.readAsDataURL(files[0]);
        }
    }
});
