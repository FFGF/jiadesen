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


