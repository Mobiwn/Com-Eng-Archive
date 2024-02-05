$defaulttext=$('#topheader').html($defaulttext);
function messagetrue($text)
{
	$defaulttext=$('#topheader').html();
	$('#topheader').html($text); 
	$('#topheader').css('background-color','#09a');
	$('#topheader').css('direction','rtl');
	$('#topheader').css('text-align','center');
	$('#topheader').css('padding','10px 5px 10px 5px');
}
function messagefalse($text)
{
	$defaulttext=$('#topheader').html();
	$('#topheader').html($text); 
	$('#topheader').css('background-color','#e74c3c');
	$('#topheader').css('direction','rtl');
	$('#topheader').css('text-align','center');
	$('#topheader').css('padding','10px 5px 10px 5px');
}
function removemessage()
{
	$('#topheader').html($defaulttext); 
	$('#topheader').css('background-color','#222');
	$('#topheader').css('direction','rtl');
	$('#topheader').css('text-align','right');
	$('#topheader').css('padding','5px 5px 5px 5px');
}