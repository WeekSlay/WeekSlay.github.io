/*Анімація тексту*/
function onEntry(entry) {
	entry.forEach(change => {
		if (change.isIntersecting) {
			change.target.classList.add('element-show');
} 
});
} 
	let options = {
		threshold: [0.5] };
	let observer = new IntersectionObserver(onEntry, options);
	let elements = document.querySelectorAll("#title,#title1,#title2,#text2,#title3,#text3,#title4,#title5,#svg1,#svg2,#svg3,#svg4,#svg5,#svg6,#svg7,#svg8,#svg9,#svg10");
		 
	for (let elm of elements) {
		observer.observe(elm);
}

/*Кнопка вверх*/

$(document).ready(function(){
 
    $(window).scroll(function(){
    if ($(this).scrollTop() > 1585) {
    $('.scrollup').fadeIn();
    } else {
    $('.scrollup').fadeOut();
    }
    });
     
    $('.scrollup').click(function(){
    $("html, body").animate({ scrollTop: 0 }, 600);
    return false;
    });
     
    });