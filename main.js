var url = 'https://rss.itunes.apple.com/api/v1/us/movies/top-movies/all/25/explicit.json'
var moviesList = document.getElementById('movies-list');


fetch(url).then(function(response) {
	
	return response.json();

}).then(function(myJson) {


	var movies = myJson.feed.results;
	console.log(movies.length);

	for (var i = 0; i < movies.length - 1; i++) {

		var imgURL = movies[i].artworkUrl100;
		// changes property of picture at the end of URL
		var changedURL = imgURL.replace(/200x200bb.png/g,'1020x960bb.png');

		makeCard(movies[i].name,changedURL);
	}

});


function makeCard(name, imgURL){

	var card = document.createElement('div');
	var img = document.createElement('img');
	var cardOverlay = document.createElement('div');
	var movieName = document.createElement('p');
	var footer = document.createElement('div');
	var favorite = document.createElement('i');

	card.className += " card bg-dark text-white text-center align-bottom ";
	cardOverlay.className += " card-img-overlay d-flex align-items-end align-middle";
	movieName.className += " card-text";
	img.className += " card-img";
	footer.className += " card-footer";
	// far = fa regular || fas = fa solid-filled
	favorite.className += "far fa-heart"; 

	favorite.onclick = function(){ favorite.className != "far fa-heart" ? favorite.className = "far fa-heart" : favorite.className = "fas fa-heart"; }

	card.appendChild(img);
	cardOverlay.appendChild(movieName);
	card.appendChild(cardOverlay);
	cardOverlay.appendChild(favorite);
	card.appendChild(footer);
	
	img.src = imgURL;
	footer.innerHTML = name;

	moviesList.appendChild(card);
}

function showAll(option){

	

	if (option == "all") {

		$('.card').show();

	}else {

		// all movies with not-filled heart to be hidden
		event.preventDefault();
		$('.far').parent().parent().hide();
	}
}