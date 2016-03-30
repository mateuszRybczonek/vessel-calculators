$(function(){
	$(window).scroll(function(){
		var currentScroll=$(this).scrollTop();
		if (currentScroll>0){
			$('#navigation').fadeOut(1000);
		}
		else{
			$('#navigation').fadeIn(1000);
		}
	});
});