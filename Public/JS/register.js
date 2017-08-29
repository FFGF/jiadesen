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
	var sType = document.getElementById("usertype").value;   
	var infoSpan_s1 = document.getElementById("s_o");
	var infoSpan_s2 = document.getElementById("s_e");
	if(sType == "" || sType == null) {

		infoSpan_s1.style.display = "none";
		infoSpan_s2.style.display = "";
	} else {
		infoSpan_s1.style.display = "";
		infoSpan_s2.style.display = "none";
	}
}


//上传头像

//获取上传按钮
var input1 = document.getElementById("upload"); 
 
if(typeof FileReader==='undefined'){ 
     //result.innerHTML = "抱歉，你的浏览器不支持 FileReader"; 
     input1.setAttribute('disabled','disabled'); 
}else{ 
     input1.addEventListener('change',readFile,false); 
     /*input1.addEventListener('change',function (e){
     	console.log(this.files);//上传的文件列表
     },false); */
}
function readFile(){ 
	var file = this.files[0];//获取上传文件列表中第一个文件
	if(!/image\/\w+/.test(file.type)){
	//图片文件的type值为image/png或image/jpg
		alert("文件必须为图片！");
		return false; 
	} 
	// console.log(file);
	var reader = new FileReader();//实例一个文件对象
	reader.readAsDataURL(file);//把上传的文件转换成url
	//当文件读取成功便可以调取上传的接口
	reader.onload = function(e){ 
		// console.log(this.result);//文件路径
		// console.log(e.target.result);//文件路径
		/*var data = e.target.result.split(',');
		var tp = (file.type == 'image/png')? 'png': 'jpg';
		var imgUrl = data[1];//图片的url，去掉(data:image/png;base64,)
		//需要上传到服务器的在这里可以进行ajax请求
		// console.log(imgUrl);
		// 创建一个 Image 对象 
		var image = new Image();
		// 创建一个 Image 对象 
		// image.src = imgUrl;
		image.src = e.target.result;
		image.onload = function(){
			document.body.appendChild(image);
		}*/

		var image = new Image();
		// 设置src属性 
		image.src = e.target.result;
		var max=200;
		// 绑定load事件处理器，加载完成后执行，避免同步问题
		image.onload = function(){ 
			// 获取 canvas DOM 对象 
			var canvas = document.getElementById("cvs"); 
			// 如果高度超标 宽度等比例缩放 *= 
			/*if(image.height > max) {
				image.width *= max / image.height; 
				image.height = max;
			} */
			// 获取 canvas的 2d 环境对象, 
			var ctx = canvas.getContext("2d"); 
			// canvas清屏 
			ctx.clearRect(0, 0, canvas.width, canvas.height); 
			// 重置canvas宽高
			/*canvas.width = image.width;
			canvas.height = image.height;
			if (canvas.width>max) {canvas.width = max;}*/
			// 将图像绘制到canvas上
			// ctx.drawImage(image, 0, 0, image.width, image.height);
			ctx.drawImage(image, 0, 0, 200, 200);
			// 注意，此时image没有加入到dom之中
		};  
	}
};
