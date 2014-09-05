// JavaScript Document
$('.section1').find('a').mouseover(function(ev){
		ev.target.style.fontsize = "30px";
});
$('.section1').find('a').mouseout(function(ev){
		ev.target.style.fontsize = "20px;";
});
$('.section3').find('p').mouseover(function(ev){
       ev.target.style.fontsize = "40px";
});
$('.section3').find('p').mouseout(function(ev){
       ev.target.style.fontSize = "25px";
});
$('.hzp').find('p').click(function(){
	alert("pc端效果糟糕，用你的手机微信扫一下二维码就可以看到啦~~");
	preventDefault();  
});
