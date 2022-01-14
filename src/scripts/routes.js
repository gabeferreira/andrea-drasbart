// JavaScript Document

pageSwitchCounter = 0;

// Set up routes
crossroads.addRoute('', function() {
	redirect();
});

// Google Analytics
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-35265571-1', 'auto');
ga('send', 'pageview');

crossroads.addRoute('{id}', function (id) {
	
	if (pageSwitchCounter === 0) {

		populate();
		loadPage(id, pageSwitchCounter);

		pageSwitchCounter++;

	} else {

		loadPage(id, pageSwitchCounter);
		var pageURL = '/' + id;
	
	}
	
});

// Setup hasher to listen for URL changes
function parseHash(newHash, oldHash){
	crossroads.parse(newHash);
}

hasher.prependHash = '!';
hasher.initialized.add(parseHash);
hasher.changed.add(parseHash);
hasher.init();