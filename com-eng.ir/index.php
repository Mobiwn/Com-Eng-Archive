
<!DOCTYPE HTML">
<html onscroll="setTimeout(function () {document.getElementById('messagecontainers').style.display='none';},400);
				setTimeout(function () {document.getElementById('messagecontainere').style.display='none';},400);">

<head>
<!-- head -->
<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
<meta name="viewport" content="width=device-width">
<meta name="description" content="انجمن علمی دانشجویی کامپیوتر دانشگاه ارومیه" />
<meta name="keywords" content="انجمن علمی دانشجویی کامپیوتر دانشگاه ارومیه ، انجمن ، انجمن علمی ، انجمن علمی دانشجویی ، دانشگاه ارومیه ، کامپیوتر ، نرم افزار" />
<meta name="author" content="Mohammad Nassiri" />
<meta name="viewport" content="width=device-width">
<title dir="rtl">انجمن علمی دانشجویی کامپیوتر دانشگاه ارومیه</title>
<link type="image/x-icon" rel="shortcut icon" href="images/favicon.ico" />
<link type="image/x-icon" rel="shortcut icon" href=".../favicon.ico" />
<link href="presentation/style.css" rel="stylesheet" type="text/css" />
<script src="//ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js"></script>
</head>

<body onscroll="setTimeout(function () {document.getElementById('messagecontainers').style.display='none';},400);
				setTimeout(function () {document.getElementById('messagecontainere').style.display='none';},400);">
				
<h1 style="display:none;">انجمن علمی دانشجویی کامپیوتر دانشگاه ارومیه</h1>
<!-- home -->

<div id="firstseg">
	<div id="firstbg"></div>
	<div id="firstseginnerbg">
		<div id="logo">
			<div id="logoimg">
			</div>
			<div id="logotxt">
				<p style="color:green;">انجـــمن علـــمی</p> <p style="color:white;">دانشـجـویی کـامپیوتر</p><p style="color:red;">دانشـــگاه ارومیــه</p>
			</div>
			<div id="discription">
				لطفا برای آگاهی از جدیدترین اخبار، اطلاعیه ها، دانلود نرم افزار، مطالعه مقالات و ارسال نظرات، وارد وب سایت انجمن شوید.
			</div>
		</div>
		<div id="menucontainer">
			<a href="../index" target="_blank"><div class="menutile" style="background-position: 90% 10px;">
				ورود به وب سایت
			</div></a>
			<div class="menutile2" onclick="moveToSeg('secondseg');" style="background-position: 90% -55px;">
				ارتباط با ما
			</div>
			<div class="menutile2" onclick="moveToSeg('thirdseg');" style="background-position: 90% -107px;">
				عضویت در انجمن
			</div>
			<a href="http://com-eng.ir/olderwebsite/" target="_blank"><div class="menutile" style="background-position: 90% -165px;">
				وب سایت سابق انجمن
			</div></a>
		</div>
		<a class="scrolldown" onclick="moveToSeg('secondseg');" href="javascript:void(0);"></a>
		<a id="auther" href="http://www.whitedesign.ir" target="_blank"></a>
	</div>
</div>


<!-- second seg -->

<div id="secondseg">
	<div class="navemenu">
		<div class="navetile" onclick="moveToSeg('firstseg');" style="background-position: 90% -255px;">
			صفحه اصلی
		</div>
		<a href="../index" target="_blank"><div class="navetile" style="background-position: 90% 17px;">
			ورود به وب سایت
		</div></a>
		<div class="navetile" onclick="moveToSeg('thirdseg');" style="background-position: 90% -100px;">
			عضویت در انجمن
		</div>
		<div class="navetile" style="background-position: 90% -48px; background-color: #079; cursor: default;">
			ارتباط با ما
		</div>
	</div>
	<div class="content">
		<form onsubmit="return check1();" id="formcontactus" method="POST" action="">
			<div class="formlabel">نام:</div>
			<input id="f1" type="text" class="formtext" name="name"/>
			<div class="formlabel">نام خانوادگی :</div>
			<input id="f2" type="text" class="formtext" name="fname"/>
			<div class="formlabel">شماره تماس :</div>
			<input id="f3" type="text" class="formtext" name="tel"/>
			<div class="formlabel">* پست الکترونیک :</div>
			<input id="f4" onfocus="resetcolor($('#f4'));" type="text" class="formtext" name="email"/>
			<div class="formlabel" style="width: 120px">* متن پیام :</div>
			<textarea id="formother" onfocus="resetcolor($('#formother'));" rows="5" cols="32" name="message"></textarea>
			<div class="formlabel">تصویر امنیتی :</div>
			<div style="clear:both;"><script type="text/javascript">
function recaptcha(){
var rnd=Math.floor((Math.random()*1000)+1); 
document.getElementById("imgcaptcha").src='logic/cc/sa-captcha/sa-captcha.inc.php?' + rnd;
}
</script>
<style type="text/css">
.captcha {
padding: 5px;
display: inline-block;
background: #FCFAFA;
box-shadow: 0 0 5px #E6E4E4;
border-radius: 2px;
border: 1px solid #DDD;
}
.captcha img {
vertical-align: middle;
}
#refresh{cursor: pointer}
</style>
<!-- Start SA-CAPTCHA code block -->
<span class="captcha">
<img id="imgcaptcha" src="logic/cc/sa-captcha/sa-captcha.inc.php"/>
<a onclick="recaptcha();" id="refresh" ><img src="logic/cc/sa-captcha/img/re.png"  /></a>
</span>
<!-- End SA-CAPTCHA code block --></div>
			<input type="text" class="formtext" name="cap" maxlength="5" style="font-family: 'Tahoma'"/>
			<div style="clear:both;"><input type="submit" class="formloginbtn" value="ارسال"/></div>
		</form>
	</div>
	<div class="group">
		<div class="grouptileheader">مدیر گروه :</div>
		<a href="http://www.urmia.ac.ir/asatid/j_bagherzade/default.aspx" target="_blank">
		<div class="grouptilesub">دکتر جمشید باقرزاده</div>
		</a>
		<div class="grouptileheader">معاون گروه :</div>
		<a href="http://www.urmia.ac.ir/asatid/m_namazi/default.aspx" target="_blank">
		<div class="grouptilesub">مهندس مجید نمازی</div>
		</a>
		<div class="grouptileheader">دبیر انجمن :</div>
		<div class="grouptilesub">علی قالی باف</div>
	</div>
	<div class="pageimg"></div>
	<div id="bottomdowndiv" onclick="moveToSeg('thirdseg');"></div>
</div>
<!-- third seg -->
<div id="thirdseg">
	<div class="navemenu">
		<div class="navetile" onclick="moveToSeg('firstseg');" style="background-position: 90% -255px;">
			صفحه اصلی
		</div>
		<a href="../index" target="_blank"><div class="navetile" style="background-position: 90% 17px;">
			ورود به وب سایت
		</div></a>
		<div class="navetile" onclick="moveToSeg('secondseg');" style="background-position: 90% -48px;">
			ارتباط با ما
		</div>
		<div class="navetile" style="background-position: 90% -100px; background-color: #079; cursor: default;">
			عضویت در انجمن
		</div>
	</div>
	<div class="contentthird">
		<form onsubmit="return check2();" id="formloginst" method="POST" action="">
			<div class="signinf">
				<div class="formlabel">* نام:</div>
				<input id="f21" onfocus="resetcolor($(\'#f21\'));" type="text" class="formtext" name="namest"/>
				<div class="formlabel">* نام خانوادگی :</div>
				<input id="f22" onfocus="resetcolor($(\'#f22\'));" type="text" class="formtext" name="fnamest"/>
				<div class="formlabel">* شماره دانشجویی :</div>
				<input id="f23" onfocus="resetcolor($(\'#f23\'));" type="text" class="formtext" name="stnumst"/>
				<div class="formlabel">* شماره تماس :</div>
				<input id="f24" onfocus="resetcolor($(\'#f24\'));" type="text" class="formtext" name="telst"/>
				<div class="formlabel">* پست الکترونیک :</div>
				<input id="f25" onfocus="resetcolor($(\'#f25\'));" type="text" class="formtext" name="emailst"/>
				<div class="formlabel">تصویر امنیتی :</div>
				<div style="clear:both;"><script type="text/javascript">
function recaptcha2(){
var rnd=Math.floor((Math.random()*1000)+1); 
document.getElementById("imgcaptcha2").src='logic/cc2/sa-captcha/sa-captcha.inc.php?' + rnd;
}
</script>
<style type="text/css">
.captcha {
padding: 5px;
display: inline-block;
background: #FCFAFA;
box-shadow: 0 0 5px #E6E4E4;
border-radius: 2px;
border: 1px solid #DDD;
}
.captcha img {
vertical-align: middle;
}
#refresh{cursor: pointer}
</style>
<!-- Start SA-CAPTCHA code block -->
<span class="captcha">
<img id="imgcaptcha2" src="logic/cc2/sa-captcha/sa-captcha.inc.php"/>
<a onclick="recaptcha2();" id="refresh2" ><img src="logic/cc2/sa-captcha/img/re.png"  /></a>
</span>
<!-- End SA-CAPTCHA code block --></div>
				<input style="font-family:\'Tahoma\';" type="text" class="formtext" name="capst" maxlength="5"/>
				<div style="clear:both;"><input type="submit" class="formloginbtn" value="ارسال"/></div>
			</div>
			<div class="signins">
				<div class="formlabel">زمینه همکاری :</div>
				<div class="formlabelck" style="clear:right;">کارگروه اجرایی:</div>
				<input type="checkbox" class="formck" name="ckop"/>
				<div class="formlabelck">کارگروه آموزشی :</div>
				<input type="checkbox" class="formck" name="ckteach"/>
				<div class="formlabelck">کارگروه نشریات :</div>
				<input type="checkbox" class="formck" name="ckmag"/>
				<div class="formlabelck">کارگروه وب سایت :</div>
				<input type="checkbox" class="formck" name="ckweb"/>
				<div class="formlabelck">کارگروه علمی و پژوهشی :</div>
				<input type="checkbox" class="formck" name="ckss"/>
				<div class="formlabelck">کارگروه برنامه نویسی :</div>
				<input type="checkbox" class="formck" name="ckprog"/>
				<div class="formlabel" style="width: 120px">فعالیت های پیشین :</div>
				<textarea id="formother" rows="7" cols="40" name="othertxtst"></textarea>
			</div>
			
		</form>
	</div>
	<div class="thirdpageimg"></div>
	<div id="bottomdowndiv" onclick="moveToSeg('firstseg');" style="background-image: url('images/up.png'); top:277vh;">
	</div>
	<div id="footer">
		<a href="http://www.whitedesign.ir" target="_blasnk"><div id="footerauther"></div></a>
		<p style="float:left;">
		Designed By :<br>
		White Design Group<br>
		<a href="http://www.whitedesign.ir" target="_blasnk">www.whitedesign.ir</a>
		</p>
		<p style="float:right; direction: rtl; line-height: 50pt;">
		کلیه حقوق این وب سایت محفوظ می باشد.
		</p>
	</div>
</div>
<!-- java script include -->
<script src="presentation/js.js"></script>

<script>
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-53436116-1', 'auto');
  ga('send', 'pageview');

</script>

</body>
</html>
