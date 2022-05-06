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
	let elements = document.querySelectorAll("#text1,#text2,#title1,#text3,#title2,#text4,#svg1,#svg2,#svg3,#svg4,#svg5,#svg6,#svg7,#svg8,#svg9,#svg10,#svg11,#svg12");
		 
	for (let elm of elements) {
		observer.observe(elm);
}

/*Кнопка вверх*/

$(document).ready(function(){
 
    $(window).scroll(function(){
    if ($(this).scrollTop() > 2410) {
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