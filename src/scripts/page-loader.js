// Javascript document

function loadPage(id, pageSwitchCounter) {

	ga('set', 'page', id);
	ga('send', 'pageview');

	if (id === 'home') {

		body.classList.remove('showingProject');

		window.document.title = 'Andrea Drasbart: Home'
		var canonical = document.querySelector('link[rel="canonical"]');
			canonical.href = 'http://andreadrasbart.com/';
			
	} else {

		var idIsProject = false;

		// Check if the id is a project
		for (var i = 0; i < projects.length; i++) {
			if (id === projects[i].id) {
				idIsProject = true;
			}
		}

		if (idIsProject === true) {

			populateProject(id);
		}

	}
	
}

function populateProject(id) {

	body.classList.add('showingProject');

	var currentProject = projects.filter(function(projectSearch) {
		return projectSearch.id == id;
	})[0];

	window.document.title = 'Andrea Drasbart: ' + currentProject.title;
	var canonical = document.querySelector('link[rel="canonical"]');
		canonical.href = 'http://andreadrasbart.com/#/' + currentProject.id;

}