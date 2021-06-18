// Javascript document

welcomeNoticeCloseButton.addEventListener('click', function(){
	welcomeNotice.classList.add('closed');
});

microphoneTextButton.addEventListener('click', function(){
	welcomeNotice.classList.add('closed');
});


// Populate projects

function populateProjects() {

	for (var i = 0; i < projects.length; i++) {

		// Create a container
		var project = document.createElement('div');
			project.className = 'project';

		// Append to the project container
		projectContainer.appendChild(project);

	}

	var clearfix = document.createElement('div');
		clearfix.className = 'clearfix';

	projectContainer.appendChild(clearfix);

}

populateProjects();


// Determine the X and Y translations

function determineInitialTranslations() {

	var initialTranslationY = - (projectContainer.offsetHeight - windowHeight + controlPanel.offsetHeight) / 2 + 'px';
	var initialTranslationX = - (projectContainer.offsetWidth - windowWidth) / 2 + 'px';

	projectContainer.style.transform = 'translateX(' + initialTranslationX + ') translateY(' + initialTranslationY + ')';
	setTimeout(function(){
		projectContainer.classList.add('loaded');
	}, 50);

}

determineInitialTranslations()