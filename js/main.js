// JavaScript Document
$(document).ready(function() {
	$('.section0').find('p').delay(500).animate({
					left: '0'
				}, 1500, 'easeOutExpo');
	$('#huojian').delay(1500).animate({
					left:'500',bottom:'500'
				}, 1500,'easeOutExpo');
	$.fn.fullpage({
		slidesColor: [ '#2ECBC4','#4BBFC3', '#7BAABE', '#05A1C7','#FF777A','#1299AC','#28282A'],
		anchors: ['page0','page1', 'page2', 'page3', 'page4','page5','page6'],
		navigation: true,
		afterLoad: function(anchorLink, index){
			if(index == 1){
				$('.section0').find('p').delay(500).animate({
					left: '0'
				}, 1500, 'easeOutExpo');
				$('#huojian').delay(1500).animate({
					left:'500',bottom:'500'
				}, 1500,'easeOutExpo');
			}
			if(index == 2){
				$('.section1').find('p').delay(500).animate({
					bottom: '50'
				}, 1500, 'easeOutExpo');
				$('.niu').animate({
					top: '0%'
				}, 1500, 'easeOutExpo');
				$('.girl').delay('500').animate({left: "-=300px"},1500);
				
			}
			if(index == 3){
				$('.section2').find('.hend').delay(500).animate({
					left: '-300'
				}, 1500, 'easeOutExpo');
				$('.section2').find('.words').delay(500).animate({
					right: '-100'
				}, 1500, 'easeOutExpo');
				
			}
			if(index == 4){
				$('.dibiao1').find('img').fadeIn(2000);
				$('.dibiao2').find('img').fadeIn(3000);
				$('.dibiao3').find('img').fadeIn(4000);
				$('.section3').find('p').slideDown(2000);
				$('.section3').find('h3').animate({
					right: '0'
				}, 1500, 'easeOutExpo');
				$('.section3').find('img').fadeIn(4000);
				
			}
			if(index == 5){
				$('.section4').find('.superman').animate({top:'30px',left:'0px'
					},1500,'easeOutExpo');
			}
			if(index == 6){
				$('.ablw').find('p').animate({
					left:'80%'
				}, 1000, 'easeOutExpo');
				
				$('.abl').find('img').animate({
					width:'500px',height:'600px'
				}, 1500, 'easeOutExpo');
				
			}
			if(index == 7){
				/*$('.section6').find('p').delay(500).animate({
					bottom: '0'
				}, 1500, 'easeOutExpo');*/
				$('.lufei').find('img').fadeIn(6000);
				$('.sel').find('p').delay('2000').animate({
					bottom:'-300'
					},1500,'easeOutExpo');
			}
		},
		onLeave: function(index, direction){
			if(index == '1'){
				$('.section0').find('p').delay(500).animate({
					left: '-120%'
				}, 1500, 'easeOutExpo');
				$('#huojian').delay(1000).animate({
					left:'-500',bottom:'-500'
				}, 1500,'easeOutExpo');
			}
			if(index == '2'){
				$('.section1').find('p').delay(500).animate({
					bottom: '-120%'
				}, 1500, 'easeOutExpo');
				$('.girl').delay('500').animate({left: "+=300px"},1500);
				$('.niu').delay(500).animate({
					bottom: '-120%'
				}, 1500, 'easeOutExpo');
			}
			if(index == '3'){
				/*$('.section2').find('p').delay(500).animate({
					left: '-120%'
				}, 1500, 'easeOutExpo');*/
				$('.section2').find('.hend').delay(800).animate({
					left: '-150%'
				}, 1500, 'easeOutExpo');
				$('.section2').find('.words').delay(500).animate({
					right: '-150%'
				}, 1500, 'easeOutExpo');
				
			}
			if(index == '4'){
				$('.section3').find('img').delay(500).fadeOut(2000);
				$('.section3').find('p').slideUp(2000);
				$('.section3').find('h3').delay(500).animate({
					right: '-120%'
				}, 1500, 'easeOutExpo');
			}
			if(index =='5'){
				$('.section4').find('.superman').delay(500).animate({top:'-800px',left:'-500px'
					},1500,'easeOutExpo');
			}
			if(index == '6'){
				$('.ablw').find('p').delay('500').animate({
					left:'-30%'
				}, 1000, 'easeOutExpo');
				
				$('.abl').find('img').delay('500').animate({
					width:'0px',height:'600px'
				}, 1500, 'easeOutExpo');
			}
			if(index == '7'){
				$('.section6').find('p').delay(500).animate({
					bottom: '-120%'
				}, 1500, 'easeOutExpo');
				$('.lufei').find('img').fadeOut(2000);
			}
		}
	});
});