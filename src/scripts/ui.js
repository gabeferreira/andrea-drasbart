// Javascript document

// Welcome notice

welcomeNoticeCloseButton.addEventListener('click', function(){
	welcomeNotice.classList.add('closed');
});

microphoneTextButton.addEventListener('click', function(){
	welcomeNotice.classList.add('closed');
});

// Info section

controlPanelInfoButton.addEventListener('click', function(){
	toggleInfo();
});

function toggleInfo() {
	body.classList.toggle('showingInfo');
}

closeInformation.addEventListener('click', function(){
	hideInfo();
})

function hideInfo() {
	body.classList.remove('showingInfo');
}

// Body loading

setTimeout(function(){

	body.classList.add('loaded');

}, 1500);


// Homepage scrolling functions

homepageDirectionalLabelUp.addEventListener('click', homepageMoveUp);
homepageDirectionalLabelRight.addEventListener('click', homepageMoveRight);
homepageDirectionalLabelDown.addEventListener('click', homepageMoveDown);
homepageDirectionalLabelLeft.addEventListener('click', homepageMoveLeft);

document.addEventListener('keydown', function(e){

	if (e.code === 'ArrowUp') {
		homepageMoveUp();
	} else if (e.code === 'ArrowDown') {
		homepageMoveDown();
	} else if (e.code === 'ArrowLeft') {
		homepageMoveLeft();
	} else if (e.code === 'ArrowRight') {
		homepageMoveRight();
	}

	if (e.keyCode === '38') { homepageMoveUp(); } 
	else if (e.keyCode === '40') { homepageMoveDown() }
	else if (e.keyCode === '37') { homepageMoveLeft() }
	else if (e.keyCode === '39') { homepageMoveRight() }

});

function homepageMoveUp() {

	var selectorTop = selector.getBoundingClientRect().top;
	var projectContainerTop = projectContainer.getBoundingClientRect().top + 450;

	if (projectContainerTop <= selectorTop + 2) { // The plus 2 adds a small margin of error in case the browser does not calculate half pixels in a similar way between the two elements
		currentTranslationY = currentTranslationY + 450;
		projectContainer.style.transform = 'translateX(' + currentTranslationX + 'px) translateY(' + currentTranslationY + 'px)';
	} else {
		canvas.classList.add('cannotMoveUp');
		setTimeout(function(){
			canvas.classList.remove('cannotMoveUp');
		}, 500);
	}

}

function homepageMoveRight() {

	var selectorRight = selector.getBoundingClientRect().right;
	var projectContainerRight = projectContainer.getBoundingClientRect().right - 450;

	if (projectContainerRight >= selectorRight - 2) {

		currentTranslationX = currentTranslationX - 450;
		projectContainer.style.transform = 'translateX(' + currentTranslationX + 'px) translateY(' + currentTranslationY + 'px)';

	} else {
		canvas.classList.add('cannotMoveRight');
		setTimeout(function(){
			canvas.classList.remove('cannotMoveRight');
		}, 500);
	}

}

function homepageMoveDown() {
	
	var selectorBottom = selector.getBoundingClientRect().bottom;
	var projectContainerBottom = projectContainer.getBoundingClientRect().bottom - 450;

	if (projectContainerBottom >= selectorBottom - 2) {
	
		currentTranslationY = currentTranslationY - 450;
		projectContainer.style.transform = 'translateX(' + currentTranslationX + 'px) translateY(' + currentTranslationY + 'px)';

	} else {
		canvas.classList.add('cannotMoveDown');
		setTimeout(function(){
			canvas.classList.remove('cannotMoveDown');
		}, 500);
	}

}

function homepageMoveLeft() {

	var selectorLeft = selector.getBoundingClientRect().left;
	var projectContainerLeft = projectContainer.getBoundingClientRect().left + 450;

	if (projectContainerLeft <= selectorLeft + 2) {
	
		currentTranslationX = currentTranslationX + 450;
		projectContainer.style.transform = 'translateX(' + currentTranslationX + 'px) translateY(' + currentTranslationY + 'px)';

	} else {
		canvas.classList.add('cannotMoveLeft');
		setTimeout(function(){
			canvas.classList.remove('cannotMoveLeft');
		}, 500);
	}

}

// Accessing a project

var triggersProjectView = document.getElementsByClassName('triggersProjectView');

for (var i = triggersProjectView.length - 1; i >= 0; i--) {

	triggersProjectView[i].addEventListener('click', function(){
		accessClickedProject();
	})

}

function accessClickedProject() {
	body.classList.add('showingProject');
	welcomeNotice.classList.add('closed');
}

// Resize functions

document.addEventListener('resize', function(){

});