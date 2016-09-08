if (window.innerWidth && window.innerWidth <= 480) {
$(document).ready(function(){
$('#header ul').addClass('hide');
$('#header').append('<div class="leftButton" onclick="toggleMenu()">Menu</div>');
});
function toggleMenu() {
$('#header ul').toggleClass('hide');
$('#header .leftButton').toggleClass('pressed');
}
}
//the above code it's used for the showing and hiding of the unorderlists i.e the menu 
$(document).ready(function(){
	loadPage();
});
function loadPage(url) {
	if (url == undefined) {
		$('#container').load('index.html #header ul', hijackLinks);
	} else {
		$('#container').load(url + ' #content', hijackLinks);
	}
}

function hijackLinks() {
	$('#container a').click(function(e){
		e.preventDefault();
		loadPage(e.target.href);
	});
}