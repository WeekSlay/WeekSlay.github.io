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
	let elements = document.querySelectorAll("#choose_region,#tayvat,#map_tayvat,#text1,#text2,#title_video,#text3,#svg1,#svg2,#svg3,#svg4,#svg5,#svg6");
		 
	for (let elm of elements) {
		observer.observe(elm);
}
(function ($) {
	var SlideSpeed = 700;
	var TimeOut = 5000;
	 
	$(document).ready(function(e) {
		$('.slide').css(
			{"position" : "absolute",
			 "top":'0', "left": '0'}).hide().eq(0).show();
		var slideNum = 0;
		var slideTime;
		slideCount = $(".slider-content .slide").size();
		var animSlide = function(arrow){
			clearTimeout(slideTime);
			$('.slide').eq(slideNum).fadeOut(SlideSpeed);
			if(arrow == "next"){
				if(slideNum == (slideCount-1)){slideNum=0;}
				else{slideNum++}
				}
			else if(arrow == "prew")
			{
				if(slideNum == 0){slideNum=slideCount-1;}
				else{slideNum-=1}
			}
			else{
				slideNum = arrow;
				}
			$('.slide').eq(slideNum).fadeIn(SlideSpeed, rotator);
			$(".control-slide.active").removeClass("active");
			$('.control-slide').eq(slideNum).addClass('active');
			}
		var $adderSpan = '';
		$('.slide').each(function(index) {
				$adderSpan += '<span class = "control-slide">' + index + '</span>';
			});
	
	
			
		
		var pause = false;
		var rotator = function(){
				if(!pause){slideTime = setTimeout(function(){animSlide('next')}, TimeOut);}
				}
		$('.slide > div h2').hover(	
			function(){clearTimeout(slideTime); pause = true;},
			function(){pause = false; rotator();
			});
		rotator();
	});
	})(jQuery);
