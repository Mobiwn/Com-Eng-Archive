scrollTop: $("#firstseg").offset().top;
//////////////////////////// buttons ///////////////////////////////

function animateButton()
{
	var isMobile = /Android|IEMobile|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ? true : false;
	clearInterval(buttoninterval);
	if(!isMobile)
	{
		$( "#menucontainer" ).animate({right:'22%'},'slow');
		$( "#logo" ).animate({left:'25%'},'slow');
	}
}

buttoninterval=setInterval(animateButton, 500);

///////////////////////////// slider ////////////////////////////////

function nextslideinterval()
{
	$i=$('#firstbg').css('background-image').split('.');
	$i=$i[1].split('/');
	$i=$i[$i.length-1].split('bgf');
	$i=$i[1];
	$i++;
	if($i>3)
	{
		$i=1;
	}
    
		$('#firstbg').fadeOut(1000, function () {
		$('#firstbg').css('background-image', 'url("images/bgf'+$i+'.jpg")');
		$('#firstbg').fadeIn(1000);
    });
}

imginterval=setInterval(nextslideinterval, 7000);


////////////////////////////////// scrollimg ////////////////////////////
function moveToSeg(id)
{
  $('html,body').animate({
      scrollTop: $("#"+id).offset().top},
      'slow');
	if ($.browser.mozilla) {
	location.href = "#"+id;
	}
}
function elementShow(id)
{
	var TopView = $(window).scrollTop();
    var BotView = TopView + $(window).height();
    var TopElement = $('#'+id).offset().top;
    var BotElement = TopElement + $('#'+id).height();
    return ((BotElement <= BotView) && (TopElement >= TopView));
}


    function throttle(func, wait, options) {
    var context, args, result;
    var timeout = null;
    var previous = 0;
    options || (options = {});
    var later = function() {
      previous = new Date;
      timeout = null;
      result = func.apply(context, args);
    };
    return function() {
      var now = new Date;
      if (!previous && options.leading === false) previous = now;
      var remaining = wait - (now - previous);
      context = this;
      args = arguments;
      if (remaining <= 0) {
        clearTimeout(timeout);
        timeout = null;
        previous = now;
        result = func.apply(context, args);
      } else if (!timeout && options.trailing !== false) {
        timeout = setTimeout(later, remaining);
      }
      return result;
    };
  };


///////////////// first seg scroll //////////////////////

$('#firstseg').bind('DOMMouseScroll',throttle( function(e){
    if(e.originalEvent.detail > 0) 
    {
    	moveToSeg('secondseg');
    }
    else
    {
        // scroll up
    }
    return false;
},500,{trailing: false}));

//IE, Opera, Safari
$('#firstseg').bind('mousewheel',throttle( function(e){
    if(e.originalEvent.wheelDelta < 0) 
    {
    	moveToSeg('secondseg');
    }
    else 
    {
    	// scroll up
    }
    return false;
},500,{trailing: false}));

//////////////////////////////////////////////////////////

/////////////////// second seg scroll //////////////////////
$('#secondseg').bind('DOMMouseScroll',throttle( function(e){
    if(e.originalEvent.detail > 0) 
    {
    	moveToSeg('thirdseg');
    }
    else
    {
    	moveToSeg('firstseg');
    }
    return false;
},500,{trailing: false}));

//IE, Opera, Safari
$('#secondseg').bind('mousewheel',throttle(function(e){
    if(e.originalEvent.wheelDelta < 0) 
    {
    	moveToSeg('thirdseg');
    }
    else 
    {
    	moveToSeg('firstseg');
    }
    return false;
},500,{trailing: false}));
////////////////////////////////////////////////////////////

/////////////////// third seg scroll //////////////////////
$('#thirdseg').bind('DOMMouseScroll',throttle(function(e){
    if(e.originalEvent.detail > 0) 
    {
    	//scroll down
    }
    else
    {
    	moveToSeg('secondseg');
    }
    return false;
},500,{trailing: false}));

//IE, Opera, Safari
$('#thirdseg').bind('mousewheel',throttle(function(e){
    if(e.originalEvent.wheelDelta < 0) 
    {
    	//scroll down
    }
    else 
    {
    	moveToSeg('secondseg');
    }
    return false;
},500,{trailing: false}));
////////////////////////////////////////////////////////////

/////////////////// key press //////////////////////

$(document).keydown(function(e){
    if (e.keyCode == 40) 
	    {  
    		if(elementShow('firstseg'))
    			{
    				moveToSeg('secondseg');
    			}
    		else if(elementShow('secondseg'))
    			{
    				moveToSeg('thirdseg');
    			}
    		else if(elementShow('thirdseg'))
    			{
    				////
    			}
	    }
    else if (e.keyCode == 38)
    	{
	    	if(elementShow('firstseg'))
				{
					////
				}
			else if(elementShow('secondseg'))
				{
					moveToSeg('firstseg');
				}
			else if(elementShow('thirdseg'))
				{
					moveToSeg('secondseg');
				}
    	}
});

////////////////////// form checks /////////////////////////

function check1()
{
	$flag=true;
	if($('#f4').val()==null || $('#f4').val()=="")
	{
		$('#f4').css('background-color','#ffcfab');
		$flag=false;
	}
	if($('#formother').val()==null || $('#formother').val()=="")
	{
		$('#formother').css('background-color','#ffcfab');
		$flag=false;
	}
	if($flag==false)
	{
		return false;
	}
	$f=$('#f4').val();
	$atpos=$f.indexOf("@");
	$dotpos=$f.indexOf(".");
	if ($atpos<1 || ($dotpos+2)>=$f.length())
	{
		$('#f4').css('background-color','#ffcfab');
	    return false;
	}
}

function check2()
{
	$flag=true;
	if($('#f21').val()==null || $('#f21').val()=="")
	{
		$('#f21').css('background-color','#ffcfab');
		$flag=false;
	}
	if($('#f22').val()==null || $('#f22').val()=="")
	{
		$('#f22').css('background-color','#ffcfab');
		$flag=false;
	}
	if($('#f23').val()==null || $('#f23').val()=="")
	{
		$('#f23').css('background-color','#ffcfab');
		$flag=false;
	}
	if($('#f24').val()==null || $('#f24').val()=="")
	{
		$('#f24').css('background-color','#ffcfab');
		$flag=false;
	}
	if($('#f25').val()==null || $('#f25').val()=="")
	{
		$('#f25').css('background-color','#ffcfab');
		$flag=false;
	}
	if($flag==false)
	{
		return false;
	}
	$f=$('#f25').val();
	$atpos=$f.indexOf("@");
	$dotpos=$f.indexOf(".");
	if ($atpos<1 || ($dotpos+2)>=$f.length())
	{
		$('#f25').css('background-color','#ffcfab');
	    return false;
	}
}
	
function resetcolor($temp)
{
	$temp.css('background-color','#FFF');
}