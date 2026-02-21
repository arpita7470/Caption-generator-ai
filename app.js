// app.js

// Functionality for caption generation
function generateCaption(inputText) {
    // Your caption generation logic here
    return `Generated caption for: ${inputText}`;
}

// Function to copy text to clipboard
function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
        console.log('Text copied to clipboard!');
    }).catch(err => {
        console.error('Could not copy text: ', err);
    });
}

// Form handling
document.getElementById('captionForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const inputText = document.getElementById('inputText').value;
    const caption = generateCaption(inputText);
    document.getElementById('outputCaption').innerText = caption;
    copyToClipboard(caption);
});

// API integration example
async function fetchAPIData(apiUrl) {
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}