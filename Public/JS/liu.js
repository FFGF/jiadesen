jQuery(function(){  
     //使用id选择器;例如:tab对象->tr->td对象.  
    $("#accountp").each(function(i){  
         //获取td当前对象的文本,如果长度大于25;  
         if($(this).text().length>6){  
                //给td设置title属性,并且设置td的完整值.给title属性.  
    $(this).attr("title",$(this).text());  
                //获取td的值,进行截取。赋值给text变量保存.  
    var text=$(this).text().substring(0,2)+"..."+$(this).text().substring($(this).text().length - 2);  
                //重新为td赋值;  
                $(this).text(text);  
         }  
      });  
}); 