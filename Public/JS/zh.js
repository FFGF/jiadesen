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

