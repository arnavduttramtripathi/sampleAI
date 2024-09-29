let box = document.querySelector(".box");
let btn = document.querySelector("button");

const speckFunc = (input) => {
    let speckInput = new SpeechSynthesisUtterance(input);
    // speckInput.rate = 1;
    // speckInput.pitch = 1;
    speckInput.volume = 1;
    speckInput.lang = 'hi-IN';
    window.speechSynthesis.speak(speckInput);
}

window.onload = () => {
    // speckFunc("hello just for code");
    greetingFunc();
}

const greetingFunc = () => {
    let date = new Date();
    let hour = date.getHours();
    // console.log(hour);
    if (hour >= 0 && hour < 12) {
        speckFunc("good morning sir, How can i help you !");
    } else if (hour >= 12 && hour < 16) {
        speckFunc("good afternoon sir, How can i help you !");
    } else {
        speckFunc("good evening sir, How can i help you !");
    }
}

const startVoiceInput = () => {
    if ('webkitSpeechRecognition' in window) {
        let recongnition = new webkitSpeechRecognition();
        recongnition.lang = 'en-US';
        recongnition.onresult = (e) => {
            let spokenText = e.results[0][0].transcript;
            console.log(spokenText);
            handleCommands(spokenText);
            box.classList.remove("btn-box");
            btn.innerHTML = `<i class="fa-solid fa-microphone-lines-slash"></i>`;
        }
        recongnition.start();
    } else {
        alert("Your Browser does not support voice input !");
    }
}

btn.onclick = () => {
    box.classList.add("btn-box");
    btn.innerHTML = `<i class="fa-solid fa-microphone-lines"></i>`
    startVoiceInput();
}

const handleCommands = (command) => {
    if (command.includes("hello") || command.includes("hey") || command.includes("hi")) {
        speckFunc("hello sie , How can i help you!");
    }
     if (command.includes("Who are you") || command.includes("developed") || command.includes("who")) {
        speckFunc("I am Virtual assistance, Developed by just for code !");
    }
     if (command.includes("Song ") || command.includes("Play song") || command.includes("play song")) {
         speckFunc("plying a song for you  !");
         window.open("https://www.youtube.com/watch?v=IFMSNfkvRUM&list=RDIFMSNfkvRUM&start_radio=1");
         
    }
}

