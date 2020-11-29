$('.nav ul li').click(function() {

	$(this).addclass("active").siblings().removeclass('active');
})



const tabBtn = document.querySelectorAll('.nav ul li');
const tab = document.querySelectorAll('.tab');

function tab(panelIndex) {
	tab.forEach(function(node) {
		node.style.display = 'none';
	});
	tab[panelIndex].style.display = 'block;'
}
tabs(0);


let bio = document.jquerySelector('.bio');

function biotext() {
	bio.innerText = bio.innerText.substring(0,100) + "...";
	bio.innerHTML += "&nbsp" + '<span onclick='addLength()' id='see-more-bio'> See More </span>';
}
biotext()