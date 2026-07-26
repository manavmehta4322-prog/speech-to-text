const text = document.getElementById("text");
const button = document.getElementById("button");

button.addEventListener("click", () => {
    const speechText = text.value;

    if (speechText.trim() === "") {
        return;
    }

    window.speechSynthesis.cancel();

    const speech = new SpeechSynthesisUtterance(speechText);
    speech.lang = "en-US";
    speech.rate = 1;
    speech.pitch = 1;
    speech.volume = 1;

    window.speechSynthesis.speak(speech);
});
