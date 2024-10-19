document.getElementById('speak-btn').addEventListener('click', function() {
    let text = document.getElementById('text-input').value;

    if (text.trim() === "") {
        alert("Please enter some text.");
        return;
    }

    // Create a new speech synthesis utterance instance
    let speech = new SpeechSynthesisUtterance();

    // Set the text that should be spoken
    speech.text = text;

    // Set the language and other options (optional)
    speech.lang = 'en-US';  // You can change this to another language
    speech.volume = 1;      // Volume: 0 to 1
    speech.rate = 1;        // Speed: 0.1 to 10
    speech.pitch = 1;       // Pitch: 0 to 2

    // Speak the text
    window.speechSynthesis.speak(speech);
});


