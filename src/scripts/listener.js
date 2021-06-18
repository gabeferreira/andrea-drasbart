// Javascript document

var recognizing;

var recognition = new webkitSpeechRecognition();
recognition.continuous = true;
reset();
recognition.onend = reset();

recognition.onresult = function (event) {

	for (var i = event.resultIndex; i < event.results.length; ++i) {
		if (event.results[i].isFinal) {
			console.log(event.results[i][0].transcript);
		}
	}

}

recognition.onstart = function() {
	
	controlPanelMicrophoneButton.classList.remove('microphoneOff');
	controlPanelMicrophoneButton.classList.add('microphoneOn');

	controlPanelMicrophoneButtonLabel.textContent = 'Microphone is on'

}

recognition.onerror = function(event) {
	
	controlPanelMicrophoneButton.classList.add('microphoneOff');
	controlPanelMicrophoneButton.classList.remove('microphoneOn');

	controlPanelMicrophoneButtonLabel.textContent = 'Microphone is off'

}

recognition.onend = function() {
	
	controlPanelMicrophoneButton.classList.add('microphoneOff');
	controlPanelMicrophoneButton.classList.remove('microphoneOn');

	controlPanelMicrophoneButtonLabel.textContent = 'Microphone is off'

}

function reset() {
	recognizing = false;
}

function turnMicrophoneOn () {
	recognition.start();
	recognizing = true;
}

function turnMicrophoneOff() {
	recognition.stop();
	reset();
}

microphoneTextButton.addEventListener('click', function(){
	turnMicrophoneOn();
})

controlPanelMicrophoneButton.addEventListener('click', function(){

	console.log(recognizing);

	if (recognizing === true) {
		turnMicrophoneOff();
	} else {
		turnMicrophoneOn();
	}

})