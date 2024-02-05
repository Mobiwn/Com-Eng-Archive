function check1()
{
	$flag=true;
	if($('#formname').val()==null || $('#formname').val()=="")
	{
		$('#formname').css('background-color','#ffcfab');
		$flag=false;
	}
	if($('#formother').val()==null || $('#formother').val()=="")
	{
		$('#formother').css('background-color','#ffcfab');
		$flag=false;
	}
	return $flag;
}
function resetcolor($temp)
{
	$temp.css('background-color','#FFF');
}