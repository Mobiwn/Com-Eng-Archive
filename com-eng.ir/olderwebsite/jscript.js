$('#newsmenu').click(function(event){
	$temp=$('#newsmenu').position().left;
	$('#headersubmenuli1').css('left',$temp-145);
	
	event.stopPropagation();
	$('#headersubmenuli1').fadeIn();

	$('#shadowmk').fadeIn();
	
	});
$('#newsmenu').click( function(){

    $('#headersubmenuli2').fadeOut();
    $('#headersubmenuli3').fadeOut();

});
$(document).click( function(){

    $('#headersubmenuli1').fadeOut();
    
    $('#shadowmk').fadeOut();

});

$('#categorymenu').click(function(event){
	$temp=$('#categorymenu').position().left;
	$('#headersubmenuli2').css('left',$temp-125);
	
	event.stopPropagation();
	$('#headersubmenuli2').fadeIn();

	$('#shadowmk').fadeIn();
	
	});
$('#categorymenu').click( function(){

    $('#headersubmenuli1').fadeOut();
    $('#headersubmenuli3').fadeOut();

});
$(document).click( function(){

    $('#headersubmenuli2').fadeOut();
	
});

$('#submitmenu').click(function(event){
	$temp=$('#submitmenu').position().left;
	if($temp)
	{
		$('#headersubmenuli3').css('left',$temp-145);
	}
	
	event.stopPropagation();
	$('#headersubmenuli3').fadeIn();

	$('#shadowmk').fadeIn();
	
	});
$('#submitmenu').click( function(){

    $('#headersubmenuli1').fadeOut();
    $('#headersubmenuli2').fadeOut();

});
$(document).click( function(){

    $('#headersubmenuli3').fadeOut();
	
});



var elementPosition = $('#headermenucontainer').offset().top;

$(window).scroll(function(){
    if($(window).scrollTop() > elementPosition){
              $('#headermenucontainer').css('position','fixed').css('top','0');
              $('#top').css('visibility','visible');
        } else {
            $('#headermenucontainer').css('position','static');
            $('#top').css('visibility','hidden');
        }    
});



