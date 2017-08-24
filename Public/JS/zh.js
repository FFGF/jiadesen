// function delcfm(url) {
// 	$('#url').val(url); //给会话中的隐藏属性URL赋值  
// 	$('#delcfmModel').modal();
// }

// function urlSubmit() {
// 	var url = $.trim($("#url").val()); //获取会话中的隐藏属性URL  
// 	window.location.href = url;
// }

// function show_hidden(obj) {

// 	　　
// 	if(obj.style.display == 'block') {
// 		obj.style.display = 'none';　　
// 	} else {　　　　　
// 		obj.style.display = 'block';　　
// 	}
// }

// var sh = document.getElementById("b3");

// sh.onclick = function() {

// 	var div1 = document.getElementById("g_info_1");

// 	var div2 = document.getElementById("g_info_2");

// 	show_hidden(div1);

// 	show_hidden(div2);

// 	return false;

// }





function change() {
	var pic = document.getElementById("preview"),
		file = document.getElementById("f");

	var ext = file.value.substring(file.value.lastIndexOf(".") + 1).toLowerCase();

	// gif在IE浏览器暂时无法显示
	if(ext != 'png' && ext != 'jpg' && ext != 'jpeg') {
		alert("图片的格式必须为png或者jpg或者jpeg格式！");
		return;
	}
	var isIE = navigator.userAgent.match(/MSIE/) != null,
		isIE6 = navigator.userAgent.match(/MSIE 6.0/) != null;

	if(isIE) {
		file.select();
		var reallocalpath = document.selection.createRange().text;

		// IE6浏览器设置img的src为本地路径可以直接显示图片
		if(isIE6) {
			pic.src = reallocalpath;
		} else {
			// 非IE6版本的IE由于安全问题直接设置img的src无法显示本地图片，但是可以通过滤镜来实现
			pic.style.filter = "progid:DXImageTransform.Microsoft.AlphaImageLoader(sizingMethod='image',src=\"" + reallocalpath + "\")";
			// 设置img的src为base64编码的透明图片 取消显示浏览器默认图片
			pic.src = 'data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==';
		}
	} else {
		html5Reader(file);
	}
}

function html5Reader(file) {
	var file = file.files[0];
	var reader = new FileReader();
	reader.readAsDataURL(file);
	reader.onload = function(e) {
		var pic = document.getElementById("preview");
		pic.src = this.result;
	}
}

function change2() {
	var pic = document.getElementById("preview2"),
		file = document.getElementById("f2");

	var ext = file.value.substring(file.value.lastIndexOf(".") + 1).toLowerCase();

	// gif在IE浏览器暂时无法显示
	if(ext != 'png' && ext != 'jpg' && ext != 'jpeg') {
		alert("图片的格式必须为png或者jpg或者jpeg格式！");
		return;
	}
	var isIE = navigator.userAgent.match(/MSIE/) != null,
		isIE6 = navigator.userAgent.match(/MSIE 6.0/) != null;

	if(isIE) {
		file.select();
		var reallocalpath = document.selection.createRange().text;

		// IE6浏览器设置img的src为本地路径可以直接显示图片
		if(isIE6) {
			pic.src = reallocalpath;
		} else {
			// 非IE6版本的IE由于安全问题直接设置img的src无法显示本地图片，但是可以通过滤镜来实现
			pic.style.filter = "progid:DXImageTransform.Microsoft.AlphaImageLoader(sizingMethod='image',src=\"" + reallocalpath + "\")";
			// 设置img的src为base64编码的透明图片 取消显示浏览器默认图片
			pic.src = 'data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==';
		}
	} else {
		html5Reader2(file);
	}
}

function html5Reader2(file) {
	var file = file.files[0];
	var reader = new FileReader();
	reader.readAsDataURL(file);
	reader.onload = function(e) {
		var pic = document.getElementById("preview2");
		pic.src = this.result;
	}
}





 //年月日
function YYYYMMDDstart()   
		   {   
		           MonHead = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];   
		    
		           //先给年下拉框赋内容   
		           var y  = new Date().getFullYear();   
		           for (var i = (y-30); i < (y+30); i++) //以今年为准，前30年，后30年   
		                   document.reg_testdate.YYYY.options.add(new Option(" "+ i +" 年", i));   
		    
		           //赋月份的下拉框   
		           for (var i = 1; i < 13; i++)   
		                   document.reg_testdate.MM.options.add(new Option(" " + i + " 月", i));   
		    
		           document.reg_testdate.YYYY.value = y;   
		           document.reg_testdate.MM.value = new Date().getMonth() + 1;   
		           var n = MonHead[new Date().getMonth()];   
		           if (new Date().getMonth() ==1 && IsPinYear(YYYYvalue)) n++;   
		                writeDay(n); //赋日期下拉框Author:meizz   
		           document.reg_testdate.DD.value = new Date().getDate();   
		   }   
		   if(document.attachEvent)   
		       window.attachEvent("onload", YYYYMMDDstart);   
		   else   
		       window.addEventListener('load', YYYYMMDDstart, false);   
		   function YYYYDD(str) //年发生变化时日期发生变化(主要是判断闰平年)   
		   {   
		           var MMvalue = document.reg_testdate.MM.options[document.reg_testdate.MM.selectedIndex].value;   
		           if (MMvalue == ""){ var e = document.reg_testdate.DD; optionsClear(e); return;}   
		           var n = MonHead[MMvalue - 1];   
		           if (MMvalue ==2 && IsPinYear(str)) n++;   
		                writeDay(n)   
		   }   
		   function MMDD(str)   //月发生变化时日期联动   
		   {   
		        var YYYYvalue = document.reg_testdate.YYYY.options[document.reg_testdate.YYYY.selectedIndex].value;   
		        if (YYYYvalue == ""){ var e = document.reg_testdate.DD; optionsClear(e); return;}   
		        var n = MonHead[str - 1];   
		        if (str ==2 && IsPinYear(YYYYvalue)) n++;   
		       writeDay(n)   
		   }   
		   function writeDay(n)   //据条件写日期的下拉框   
		   {   
		           var e = document.reg_testdate.DD; optionsClear(e);   
		           for (var i=1; i<(n+1); i++)   
		                e.options.add(new Option(" "+ i + " 日", i));   
		   }   
		   function IsPinYear(year)//判断是否闰平年   
		   {     return(0 == year%4 && (year%100 !=0 || year%400 == 0));}   
		   function optionsClear(e)   
		   {   
		        e.options.length = 1;   
		   }

//广告费用监听 
function adsPrice() {
	var sType = document.getElementById("adsTime").value;
	var infoSpan_r0 = document.getElementById("rmb0");
	var infoSpan_r1 = document.getElementById("rmb1");
	var infoSpan_r2 = document.getElementById("rmb2");
	var infoSpan_r3 = document.getElementById("rmb3");
	var infoSpan_r4 = document.getElementById("rmb4");

	if(sType == "" || sType == null) {

		infoSpan_r0.style.display = "";
		infoSpan_r1.style.display = "none";
		infoSpan_r2.style.display = "none";
		infoSpan_r3.style.display = "none";
		infoSpan_r4.style.display = "none";

	} else if(sType == "3个月") {

		infoSpan_r0.style.display = "none";
		infoSpan_r1.style.display = "";
		infoSpan_r2.style.display = "none";
		infoSpan_r3.style.display = "none";
		infoSpan_r4.style.display = "none";

	} else if(sType == "6个月(9折)") {

		infoSpan_r0.style.display = "none";
		infoSpan_r1.style.display = "none";
		infoSpan_r2.style.display = "";
		infoSpan_r3.style.display = "none";
		infoSpan_r4.style.display = "none";
	} else if(sType == "1年(8折)") {

		infoSpan_r0.style.display = "none";
		infoSpan_r1.style.display = "none";
		infoSpan_r2.style.display = "none";
		infoSpan_r3.style.display = "";
		infoSpan_r4.style.display = "none";
	} else if(sType == "2年(7.5折)") {

		infoSpan_r0.style.display = "none";
		infoSpan_r1.style.display = "none";
		infoSpan_r2.style.display = "none";
		infoSpan_r3.style.display = "none";
		infoSpan_r4.style.display = "";
	}
 }


//单券充值监听 
function danchong() {
	var pType = document.getElementById("payKind").value;
	var paySpan = document.getElementById("numbs");
											

	if(pType == "单条" ) {

		paySpan.style.display = "";
				
	} else {

		paySpan.style.display = "none";
						
	}
}


