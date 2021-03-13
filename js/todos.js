$('ul').on('click','li',function(){
	$(this).toggleClass('strike-off');
});


$('ul').on('click','span',function(event){
	$(this).parent().fadeOut(500,function(){
		$(this).remove();
	});
	event.stopPropagation();
})

$('input').on('keypress',function(event){
	if(event.which === 13){
		console.log($(this).val())
		var text_value =$(this).val();
		$('ul').append("<li><span><i class='fa fa-trash'></i></span>"+text_value+"</li>")
		$(this).val()="";
	}
})

$('.fa-plus').on('click',function(){
	$('input').fadeToggle()
})