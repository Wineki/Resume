// JavaScript Document
$(document).ready(function() {
	$('.section0').find('p').delay(500).animate({
					left: '0'
				}, 1500, 'easeOutExpo');
	$('#huojian').delay(1000).animate({
					left:'70%',bottom:'70%'
				}, 1500,'easeOutExpo');
	$.fn.fullpage({
		slidesColor: [ '#2ECBC4','#4BBFC3', '#7BAABE', '#05A1C7','#FF777A','#1299AC','#28282A'],
		anchors: ['page0','page1', 'page2', 'page3', 'page4','page5','page6'],
		navigation: true,
		afterLoad: function(anchorLink, index){
			if(index == 1){
				$('.section0').find('p').delay(500).animate({
					left: '0%'
				}, 1500, 'easeOutExpo');
				$('#huojian').delay(1500).animate({
					left:'70%',bottom:'70%'
				}, 1500,'easeOutExpo');
			}
			if(index == 2){
				$('.section1').find('p').delay(500).animate({
					left:'135%'
				}, 1500, 'easeOutExpo');
				$('.niu').animate({
					top: '-8%'
				}, 1500, 'easeOutExpo');
				$('.girl').delay('500').animate({left: "-=100%"},1500);
				
			}
			if(index == 3){
				$('.section2').find('.hend').delay(500).animate({
					left: '-30%'
				}, 1500, 'easeOutExpo');
				$('.section2').find('.words').delay(500).animate({
					right: '-100'
				}, 1500, 'easeOutExpo');
				
			}
			if(index == 4){
				$('.section3').find('p').slideDown(500);
				$('.section3').find('h3').animate({
					right: '0'
				}, 1500, 'easeOutExpo');
				$('.section3').find('img').fadeIn(500);
				
			}
			if(index == 5){
				$('.section4').find('.superman').animate({top:'10%',left:'0px'
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
				$('.lufei').find('img').fadeIn(4000);
				$('.sel').find('p').delay('2000').animate({
					top:'41%'
					},200,'easeOutExpo');
			}
		},
		onLeave: function(index, direction){
			if(index == '1'){
				$('.section0').find('p').delay(500).animate({
					left: '-120%'
				}, 1500, 'easeOutExpo');
				$('#huojian').delay(1000).animate({
					left:'-100%',bottom:'-20%'
				}, 1500,'easeOutExpo');
			}
			if(index == '2'){
				$('.section1').find('p').delay(500).animate({
					left:'-140%'
				}, 1500, 'easeOutExpo');
				$('.niu').delay('200').animate({
					top: '100%'
				}, 1500, 'easeOutExpo');
				$('.girl').delay('500').animate({left: "+=100%"},1500);
			}
			if(index == '3'){
				/*$('.section2').find('p').delay(500).animate({
					left: '-120%'
				}, 1500, 'easeOutExpo');*/
				$('.section2').find('.hend').delay(800).animate({
					left: '-300%'
				}, 1500, 'easeOutExpo');
				$('.section2').find('.words').delay(500).animate({
					right: '-200%'
				}, 1500, 'easeOutExpo');
				
			}
			if(index == '4'){
				/*$('.section3').find('img').fadeOut(0);*/
				$('.section3').find('p').slideUp(0);
				$('.section3').find('h3').delay(500).animate({
					right: '-120%'
				}, 1500, 'easeOutExpo');
			}
			if(index =='5'){
				$('.section4').find('.superman').delay(500).animate({top:'-150%',left:'-30%'
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
				$('.section6').find('p').animate({
					bottom: '-120%'
				}, 0, 'easeOutExpo');
				//$('.section6').find('p').hide();
				$('.lufei').find('img').fadeOut(0);
			}
		}
	});
});