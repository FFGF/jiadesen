//及时验证用户名
function checkname() {
	//在每个函数中定义check变量是为了在表单提交后，能够逐个验证每个函数是否通过，很好很好。（以下同理）
	//	var check;
	var username = document.getElementById("username").value;
	var infoSapn_n1 = document.getElementById("n_o");
	var infoSapn_n2 = document.getElementById("n_e");
	if(!(/^[\u4e00-\u9fa5 ]{2,20}$/.test(username) || /^[a-zA-Z\/ ]{2,20}$/.test(username))) {
		//alert("用户名输入不合法，请重新输入！"); 
		infoSapn_n1.style.display = "none";
		infoSapn_n2.style.display = "";
		//此处甚妙，既然你在此处输入错误，那么按理说当然要在此处继续输入了。（在此处继续获取焦点！）
		document.getElementById("username").focus();
		//			check = false;
	} else {
		//document.getElementById("checktext1").innerHTML = "* 用户名由6-18位字符组成 √";
		infoSapn_n1.style.display = "";
		infoSapn_n2.style.display = "none";
		//		check = true;
	}
	//	return check;
}

//及时验证手机号码
function checknumb() {

	//在每个函数中定义check变量是为了在表单提交后，能够逐个验证每个函数是否通过，很好很好。（以下同理）
	//	var check;
	var phone = document.getElementById("phone").value;
	var infoSapn_p1 = document.getElementById("p_o");
	var infoSapn_p2 = document.getElementById("p_e");
	if(!(/^1[34578]\d{9}$/.test(phone))) {
		//alert("用户名输入不合法，请重新输入！"); 
		infoSapn_p1.style.display = "none";
		infoSapn_p2.style.display = "";
		//此处甚妙，既然你在此处输入错误，那么按理说当然要在此处继续输入了。（在此处继续获取焦点！）
		document.getElementById("phone").focus();
		//		check = false;
	} else {
		//document.getElementById("checktext1").innerHTML = "* 用户名由6-18位字符组成 √";
		infoSapn_p1.style.display = "";
		infoSapn_p2.style.display = "none";
		//		check = true;
	}
	//	return check;
}

var code; //在全局定义验证码  

function createCode() {
	code = "";
	var codeLength = 4; //验证码的长度  
	var checkCode = document.getElementById("code");
	var random = new Array(0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R',
		'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'); //随机数  
	for(var i = 0; i < codeLength; i++) { //循环操作  
		var index = Math.floor(Math.random() * 36); //取得随机数的索引（0~35）  
		code += random[index]; //根据索引取得随机数加到code上  
	}
	checkCode.value = code; //把code值赋给验证码  
}
//校验验证码  
function check() {
	var inputCode = document.getElementById("check_one").value.toUpperCase(); //取得输入的验证码并转化为大写   
	var infoSpan_y1 = document.getElementById("y_o");
	var infoSpan_y2 = document.getElementById("y_e");
	var infoSpan
	if(inputCode.length <= 0 || inputCode != code) { //若输入的验证码长度为0
		//		alert("请输入验证码！"); //则弹出请输入验证码 
		//	} else if(inputCode != code) { //若输入的验证码与产生的验证码不一致时  
		//	alert("验证码输入错误！@_@"); //则弹出验证码输入错误  
		//	createCode(); //刷新验证码  
		//	document.getElementById("check_one").value = ""; //清空文本框 
		infoSpan_y1.style.display = "none";
		infoSpan_y2.style.display = "";
	} else { //输入正确时  
		//	alert("合格！^-^");
		infoSpan_y1.style.display = "";
		infoSpan_y2.style.display = "none";
	}
}

//校验短信验证码  
function check_d() {
	var dCode = document.getElementById("dxCode").value; //取得输入的验证码并转化为大写   
	var infoSpan_dy1 = document.getElementById("dy_o");
	var infoSpan_dy2 = document.getElementById("dy_e");
	var infoSpan
	if(/^\d{4}$/.test(dCode)) { //若输入验证码

		infoSpan_dy1.style.display = "";
		infoSpan_dy2.style.display = "none";
	} else { //输入正确时  
		//	alert("合格！^-^");
		infoSpan_dy1.style.display = "none";
		infoSpan_dy2.style.display = "";
	}
}

//CharMode函数
//测试某个字符是属于哪一类.
function CharMode(iN) {
	if(iN >= 48 && iN <= 57) //数字
		return 1;
	if(iN >= 65 && iN <= 90) //大写字母
		return 2;
	if(iN >= 97 && iN <= 122) //小写
		return 4;
	else
		return 8; //特殊字符
}
//bitTotal函数
//计算出当前密码当中一共有多少种模式
function bitTotal(num) {
	modes = 0;
	for(i = 0; i < 4; i++) {
		if(num & 1) modes++;
		num /= 2;
	}
	return modes;
}
//checkStrong函数
//返回密码的强度级别
function checkStrong(sPW) {
	if(sPW.length <= 4)
		return 0; //密码太短
	Modes = 0;
	for(i = 0; i < sPW.length; i++) {
		//测试每一个字符的类别并统计一共有多少种模式.
		Modes |= CharMode(sPW.charCodeAt(i));
	}
	return bitTotal(Modes);
}
//pwStrength函数
//当用户放开键盘或密码输入框失去焦点时，根据不同的级别显示不同的颜色
function pwStrength(pwd) {
	O_color = "#eeeeee";
	L_color = "#FF0000";
	M_color = "#FF9900";
	H_color = "#33CC00";
	if(pwd == null || pwd == '') {
		Lcolor = Mcolor = Hcolor = O_color;
	} else {
		S_level = checkStrong(pwd);
		switch(S_level) {
			case 0:
				Lcolor = Mcolor = Hcolor = O_color;
			case 1:
				Lcolor = L_color;
				Mcolor = Hcolor = O_color;
				break;
			case 2:
				Lcolor = Mcolor = M_color;
				Hcolor = O_color;
				break;
			default:
				Lcolor = Mcolor = Hcolor = H_color;
		}
	}
	document.getElementById("strength_L").style.background = Lcolor;
	document.getElementById("strength_M").style.background = Mcolor;
	document.getElementById("strength_H").style.background = Hcolor;
}
//验证两次密码是否一致
function validate() {
	var pwd1 = document.getElementById("pwd").value;
	var pwd2 = document.getElementById("pwd_again").value;
	var infoSpan_pwd11 = document.getElementById("pwd_o");
	var infoSpan_pwd12 = document.getElementById("pwd_e");
	var infoSpan_pwd21 = document.getElementById("pwd2_o");
	var infoSpan_pwd22 = document.getElementById("pwd2_e");
	//	以字母开头，长度在6~18之间，只能包含字符、数字和下划线
	if(!(/^[a-zA-Z]\w{5,17}$/.test(pwd1))) {
		infoSpan_pwd11.style.display = "none";
		infoSpan_pwd12.style.display = "";
	} else {
		infoSpan_pwd11.style.display = "";
		infoSpan_pwd12.style.display = "none";
	}

	//	 对比两次输入的密码 
	if(pwd1 == pwd2 && pwd1.length >= 6) {
		infoSpan_pwd21.style.display = "";
		infoSpan_pwd22.style.display = "none";
	} else {
		infoSpan_pwd21.style.display = "none";
		infoSpan_pwd22.style.display = "";
	}
}

function showtime(t) {
	document.getElementById("time_btn").disabled = true;
	for(i = 1; i <= t; i++) {
		window.setTimeout("update_p(" + i + "," + t + ")", i * 1000);
	}

}

function update_p(num, t) {
	if(num == t) {
		document.getElementById("time_btn").value = " 重新发送 ";
		document.getElementById("time_btn").disabled = false;
	} else {
		printnr = t - num;
		document.getElementById("time_btn").value = " (" + printnr + ")秒后重新发送";
	}
}

//注册类型监听 
function chose() {
	var sType = document.getElementById("usertype").value; //取得输入的验证码并转化为大写   
	var infoSpan_s1 = document.getElementById("s_o");
	var infoSpan_s2 = document.getElementById("s_e");
	var infoSpan
	if(sType == "" || sType == null) {

		infoSpan_s1.style.display = "none";
		infoSpan_s2.style.display = "";
	} else {
		infoSpan_s1.style.display = "";
		infoSpan_s2.style.display = "none";
	}
}

function delcfm(url) {
	$('#url').val(url); //给会话中的隐藏属性URL赋值  
	$('#delcfmModel').modal();
}

function urlSubmit() {
	var url = $.trim($("#url").val()); //获取会话中的隐藏属性URL  
	window.location.href = url;
}

function show_hidden(obj) {

	　　
	if(obj.style.display == 'block') {
		obj.style.display = 'none';　　
	} else {　　　　　
		obj.style.display = 'block';　　
	}
}

var sh = document.getElementById("b3");

sh.onclick = function() {

	var div1 = document.getElementById("g_info_1");

	var div2 = document.getElementById("g_info_2");

	show_hidden(div1);

	show_hidden(div2);

	return false;

}

//省市区三级联动
var Gid = document.getElementById;
var showArea = function() {
	Gid('show').innerHTML = "<h3>省" + Gid('s_province').value + " - 市" +
		Gid('s_city').value + " - 县/区" +
		Gid('s_county').value + "</h3>"
}
Gid('s_county').setAttribute('onchange', 'showArea()');

//参考该页面的
//http://www.cnblogs.com/lantu1989/p/6148319.html
// 选中添加到右边
function selectedToRight() {

	// 获取select2标签
	var select2 = document.getElementById("select2");
	// 获取select1标签
	var select1 = document.getElementById("select1");
	// 获取option
	var option1 = select1.getElementsByTagName("option");
	// 遍历
	for(var i = 0; i < option1.length; i++) {
		var optioni = option1[i];
		//是否被选中
		if(optioni.selected == true) {
			// 添加到select2里面
			select2.appendChild(optioni);
			//数组长度发生变化，需要处理
			i--;
		}
	}
}

// 选中添加到左边
function selectedToLeft() {

	// 获取select2标签
	var select2 = document.getElementById("select2");
	// 获取select1标签
	var select1 = document.getElementById("select1");
	// 获取option
	var option2 = select2.getElementsByTagName("option");
	// 遍历
	for(var i = 0; i < option2.length; i++) {
		var optioni = option2[i];
		//是否被选中
		if(optioni.selected == true) {
			// 添加到select1里面
			select1.appendChild(optioni);
			//数组长度发生变化，需要处理
			i--;
		}
	}
}

function selectedToRight2() {
	// 获取select2标签
	var select4 = document.getElementById("select4");
	// 获取select1标签
	var select3 = document.getElementById("select3");
	// 获取option
	var option3 = select3.getElementsByTagName("option");
	// 遍历
	for(var i = 0; i < option3.length; i++) {
		var optioni = option3[i];
		//是否被选中
		if(optioni.selected == true) {
			// 添加到select2里面
			select4.appendChild(optioni);
			//数组长度发生变化，需要处理
			i--;
		}
	}
}

// 选中添加到左边
function selectedToLeft2() {

	// 获取select2标签
	var select4 = document.getElementById("select4");
	// 获取select1标签
	var select3 = document.getElementById("select3");
	// 获取option
	var option4 = select4.getElementsByTagName("option");
	// 遍历
	for(var i = 0; i < option4.length; i++) {
		var optioni = option4[i];
		//是否被选中
		if(optioni.selected == true) {
			// 添加到select1里面
			select3.appendChild(optioni);
			//数组长度发生变化，需要处理
			i--;
		}
	}
}

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

