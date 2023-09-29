(() => {

    const message = new SpeechSynthesisUtterance();

        function onVoicesChanged() {
            const voices = speechSynthesis.getVoices();
            const enVoice = voices.find(voiced => voices.lang === 'en-US');
            message.voice = enVoice;
        }

        function onClick(event) {
            message.text = event.target.getAttribute('Alt');
            speechSynthesis.speak(message);
        }

    function run() {
        speechSynthesis.addEventListener('voiceschanged', onVoicesChanged);

        const imgElems = Array.from(document.querySelectorAll('img'));
        imgElems.forEach(imgElems => imgElems.addEventListener('click', onClick));
    }

    run()
})();