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
	let elements = document.querySelectorAll("#text1,#title,#title1,#character,#title2,#combat_characteristics,#title3,#title4,#title5,#title6,#title7,#title8,#title9,.question,.question1,#svg1,#svg2,#svg3,#svg4,#svg5,#svg6,#svg7,#svg7,#svg8,#svg9,#svg10,#svg11,#svg12,#svg13,#svg14,#svg15,#svg16,#svg17,#svg18,#svg19,#svg20,#svg21,#svg22,#svg23,#svg24,#svg25,#svg26,#svg27,#svg28,#svg29,#svg30,#svg31,#svg32,#title_video");
		 
	for (let elm of elements) {
		observer.observe(elm);
}
	
/*Запитання*/
function myFunction() {
	var popup = document.getElementById("myQuestion");
	popup.classList.toggle("show");
  }

  function myFunction1() {
	var popup = document.getElementById("myQuestion1");
	popup.classList.toggle("show1");
  }

/*Кнопка вверх*/

$(document).ready(function(){
 
    $(window).scroll(function(){
    if ($(this).scrollTop() > 7185) {
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