function convertToSpeech() {
    var text = document.getElementById("texttospeech").value;
    var speech = new SpeechSynthesisUtterance(text);
    speech.rate = 1; 
    speech.volume = 5; 
    speech.pitch = 1; 
    window.speechSynthesis.speak(speech);
}