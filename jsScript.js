let speech = new SpeechSynthesisUtterance();
        let text = document.querySelector("textarea");
        let listenBtn = document.querySelector("button");
        let voices = [];
        let selectVoice = document.querySelector("select");

        window.speechSynthesis.onvoiceschanged = () => {
            voices = window.speechSynthesis.getVoices();
            speech.voice = voices[0];

            voices.forEach((voice, i) => {
                selectVoice.options[i] = new Option(voice.name, i);
            });
        };

        selectVoice.addEventListener("change", () => {
            speech.voice = voices[selectVoice.selectedIndex];
        });

        listenBtn.addEventListener("click", () => {
            speech.text = text.value;
            window.speechSynthesis.speak(speech);
        });