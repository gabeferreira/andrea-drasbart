// Javascript document

function redirect() {
	window.location.href = '#!/home';
};

// Populate projects

function populate() {

	for (var i = 0; i < projects.length; i++) {

		// Create a container
		var project = document.createElement('div');
			project.className = 'project';

		// Create a random transition delay
		var randomTransitionDelay = Math.random() * 1000 + 'ms';

		// Display the project title
		var projectTitle = document.createElement('a');
			projectTitle.href = '#/' + projects[i].id;
			projectTitle.className = 'projectTitle';
			projectTitle.style.transitionDelay = randomTransitionDelay;
			projectTitle.textContent = projects[i].title;

		// Load the project thumbnail
		var projectThumbnailLink = document.createElement('a');
			projectThumbnailLink.href = '#/' + projects[i].id;
			projectThumbnailLink.className = 'projectThumbnailLink';
			projectThumbnailLink.style.transitionDelay = randomTransitionDelay;

		var projectThumbnail = document.createElement('img');
			projectThumbnail.className = 'projectThumbnail';
			projectThumbnail.src = 'assets/img/thumbnails/' + projects[i].id + '.jpg';

			projectThumbnailLink.appendChild(projectThumbnail);

			project.appendChild(projectTitle);
			project.appendChild(projectThumbnailLink);

		// Append to the project container
		projectContainer.appendChild(project);

	}

	var clearfix = document.createElement('div');
		clearfix.className = 'clearfix';

	projectContainer.appendChild(clearfix);

	determineInitialTranslations()

}

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