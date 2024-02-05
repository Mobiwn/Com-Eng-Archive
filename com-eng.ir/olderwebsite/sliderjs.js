$('#slideradio1').prop('checked', true);
function changeslide(j)
{
	clearInterval(imginterval);
	imginterval=setInterval(nextslideinterval, 5000);
	$('#slider').fadeOut(1000, function () {
		$('#slider').css('background-image', 'url("slider/img'+j+'.jpg")');
		$('#slidetitle').text($sliderarray[j-1][0]);
		$("#slidetexta").attr("href", $sliderarray[j-1][1]);
		$('#slideradio'+j+'').prop('checked', true);
		$('#slider').fadeIn(500);
    });
}

$('#nextslide').click(function(){
clearInterval(imginterval);
imginterval=setInterval(nextslideinterval, 5000);
i=$('#slider').css('background-image').split('.');
i=i[1].split('/');
i=i[i.length-1].split('img');
i=i[1];
i++;
if(i>5)
{
	i=1;
}

$('#slider').fadeOut(1000, function () {
	$('#slider').css('background-image', 'url("slider/img'+i+'.jpg")');
	$('#slidetitle').text($sliderarray[i-1][0]);
	$("#slidetexta").attr("href", $sliderarray[i-1][1]);
	$('#slideradio'+i+'').prop('checked', true);
	$('#slider').fadeIn(500);
});
	});


$('#prevslide').click(function(){
clearInterval(imginterval);
imginterval=setInterval(nextslideinterval, 5000);
i=$('#slider').css('background-image').split('.');
i=i[1].split('/');
i=i[i.length-1].split('img');
i=i[1];
i--;
if(i<1)
{
	i=5;
}

$('#slider').fadeOut(1000, function () {
	$('#slider').css('background-image', 'url("slider/img'+i+'.jpg")');
	$('#slidetitle').text($sliderarray[i-1][0]);
	$('#slidetexta').attr("href", $sliderarray[i-1][1]);
	$('#slideradio'+i+'').prop('checked', true);
	$('#slider').fadeIn(500);
});
	});


function nextslideinterval()
{
	i=$('#slider').css('background-image').split('.');
	i=i[1].split('/');
	i=i[i.length-1].split('img');
	i=i[1];
	i++;
	if(i>5)
	{
		i=1;
	}
    
	$('#slider').fadeOut(1000, function () {
		$('#slider').css('background-image', 'url("slider/img'+i+'.jpg")');
		$('#slidetitle').text($sliderarray[i-1][0]);
		$('#slidetexta').attr("href", $sliderarray[i-1][1]);
		$('#slideradio'+i+'').prop('checked', true);
		$('#slider').fadeIn(500);
    });
}

imginterval=setInterval(nextslideinterval, 5000);



