//鼠标移动到“找产品”浮现菜单
$(function() {

    var popoverMenuUrl = $("#popover-menu").attr("dataurl");

    $("#popover-menu").load(popoverMenuUrl, function() {
        $(".header-category").mouseenter(function(event) {
            $(this).children('.active-menu').show()
        }).mouseleave(function(event) {
            $(this).children('.active-menu').hide()
        });
    })
})
//鼠标移动到优势产品缩略图上面时，边框和字体变颜色
$(function() {
    $(".container-index .col-md-2 .thumbnail").on('mouseover', function() {
        $(this).css("border", "1px solid #f60")
        $(this).find(".caption p a").css("color", "#f60")
    }).on('mouseout', function() {
        $(this).css("border", "1px solid #FAFAFA")
        $(this).find(".caption p a").css("color", "#337ab7")
    })
})
//仿贝登网二级菜单实现
$(function(){
	 $(".dropdown-menu-two-level").menuAim({
			activate: activateSubmenu,
            deactivate: deactivateSubmenu
     });
});
var $menu = $(".dropdown-menu-two-level");

function activateSubmenu(row) {
  	var $row = $(row),
    submenuId = $row.data("submenuId"),
    $submenu = $("#" + submenuId),
    offset = $menu.offset(),
    height = $menu.outerHeight(),
    width = $menu.outerWidth();

   	$submenu.css({
         display: "block",
         top: 0,
         left:119,  // main should overlay submenu
         height: 384  // padding for main dropdown's arrow
    });

    $row.find("a").addClass("maintainHover");

    $row.find("a").css("border-bottom", "2px solid #2476e2")
    $row.find("a").css("border-top", "2px solid #2476e2")
    $row.find("a").css("width", "118px")
}

function deactivateSubmenu(row) {
    var $row = $(row),
    submenuId = $row.data("submenuId"),
    $submenu = $("#" + submenuId);

    $submenu.css("display", "none");
    $row.find("a").removeClass("maintainHover");

    $row.find("a").css("border-bottom", "2px solid #f3f3f3")
    $row.find("a").css("border-top", "2px solid #f3f3f3")
    $row.find("a").css("width", "116px")
}

$(document).click(function() {
    $(".popover-menu").css("display", "none");
});


// 为第三个navbar的dropdown添加鼠标移动上去下拉查单浮现，移走下拉菜单消失
$('#third-dropdown').mouseover(function(){
 		$(this).addClass('open');})
                    .mouseout(function() {
        $(this).removeClass('open');}); 

$('#fouth-dropdown').mouseover(function(){
        $(this).addClass('open');})
                    .mouseout(function() {
        $(this).removeClass('open');});  
$('#fifth-dropdown').mouseover(function(){
        $(this).addClass('open');})
                    .mouseout(function() {
        $(this).removeClass('open');});                             
//弹出的登录模态框居中
function centerModals() {   
　　$('#register').each(function(i) {   
　　　　var $clone = $(this).clone().css('display','block').appendTo('body');
　　　　var top = Math.round(($clone.height() - $clone.find('.modal-content').height()) / 2);
　　　　top = top > 0 ? top : 0;   
　　　　$clone.remove();   
　　　　$(this).find('.modal-content').css("margin-top", top);   
　　　　});   
};   

$('#register').on('show.bs.modal', centerModals);
	//禁用空白处点击关闭
	$('#register').modal({
	backdrop: 'static',
	keyboard: false,//禁止键盘
	show:false
});
//页面大小变化是仍然保证模态框水平垂直居中
$(window).on('resize', centerModals); 