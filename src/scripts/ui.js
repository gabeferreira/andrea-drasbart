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


// Populate projects

function populateProjects() {

	for (var i = 0; i < projects.length; i++) {

		// Create a container
		var project = document.createElement('div');
			project.className = 'project';

		// Display the project title
		var projectTitle = document.createElement('div');
			projectTitle.className = 'projectTitle';
			projectTitle.textContent = projects[i].title;

		// Load the project thumbnail
		var projectThumbnail = document.createElement('img');
			projectThumbnail.className = 'projectThumbnail';
			projectThumbnail.src = 'assets/img/thumbnails/' + projects[i].thumbnail;

			project.appendChild(projectTitle);
			project.appendChild(projectThumbnail);

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

	var initialTranslationY = - (projectContainer.offsetHeight - windowHeight) / 2;
	var initialTranslationX = - (projectContainer.offsetWidth - windowWidth) / 2;

	currentTranslationX = initialTranslationX;
	currentTranslationY = initialTranslationY;

	projectContainer.style.transform = 'translateX(' + initialTranslationX + 'px) translateY(' + initialTranslationY + 'px)';
	setTimeout(function(){
		projectContainer.classList.add('loaded');
	}, 50);

}

determineInitialTranslations()


// Homepage scrolling functions

homepageDirectionalLabelUp.addEventListener('click', homepageMoveUp);
homepageDirectionalLabelRight.addEventListener('click', homepageMoveRight);
homepageDirectionalLabelDown.addEventListener('click', homepageMoveDown);
homepageDirectionalLabelLeft.addEventListener('click', homepageMoveLeft);

function homepageMoveUp() {

	var selectorTop = selector.getBoundingClientRect().top;
	var projectContainerTop = projectContainer.getBoundingClientRect().top + 450;

	if (projectContainerTop <= selectorTop + 2) { // The plus 2 adds a small margin of error in case the browser does not calculate half pixels in a similar way between the two elements
		currentTranslationY = currentTranslationY + 450;
		projectContainer.style.transform = 'translateX(' + currentTranslationX + 'px) translateY(' + currentTranslationY + 'px)';
	} else {
		return;
	}

}

function homepageMoveRight() {

	var selectorRight = selector.getBoundingClientRect().right;
	var projectContainerRight = projectContainer.getBoundingClientRect().right - 450;

	if (projectContainerRight >= selectorRight - 2) {

		currentTranslationX = currentTranslationX - 450;
		projectContainer.style.transform = 'translateX(' + currentTranslationX + 'px) translateY(' + currentTranslationY + 'px)';

	} else {
		return;
	}

}

function homepageMoveDown() {
	
	var selectorBottom = selector.getBoundingClientRect().bottom;
	var projectContainerBottom = projectContainer.getBoundingClientRect().bottom - 450;

	if (projectContainerBottom >= selectorBottom - 2) {
	
		currentTranslationY = currentTranslationY - 450;
		projectContainer.style.transform = 'translateX(' + currentTranslationX + 'px) translateY(' + currentTranslationY + 'px)';

	} else {
		return;
	}

}

function homepageMoveLeft() {

	var selectorLeft = selector.getBoundingClientRect().left;
	var projectContainerLeft = projectContainer.getBoundingClientRect().left + 450;

	if (projectContainerLeft <= selectorLeft + 2) {
	
		currentTranslationX = currentTranslationX + 450;
		projectContainer.style.transform = 'translateX(' + currentTranslationX + 'px) translateY(' + currentTranslationY + 'px)';

	} else {
		return;
	}

}