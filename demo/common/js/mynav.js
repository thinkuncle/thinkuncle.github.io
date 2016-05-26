// 导航js
$(function (){
	console.log("初始化导航菜单");
	console.log(mymenu);
	var title = mymenu.title;
	console.log(title);
	// 遍历导航集合
	var navStr = "<div id='nav'>";
	for(var i=0; i < mymenu.nav.length; i++){
	    console.log(mymenu.nav[i].name);
	    console.error(mymenu.nav[i].info);
	    // 遍历导航链接集合
	    navStr += "<h2>"+ mymenu.nav[i].name +"</h2>";
	    navStr += "<ul>";
	    for(var j=0; j < mymenu.nav[i].info.length; j++){
	    	var url = mymenu.nav[i].info[j].url;
	    	var name = mymenu.nav[i].info[j].name;
	    	var target = mymenu.nav[i].info[j].target || "_self";
	    	var desc = mymenu.nav[i].info[j].desc || "";
	    	navStr += "<li>";
	    	navStr += '<a href="'+ url +'" target="' + target + '" title="' + desc + '" >';
	    	navStr += name;
	    	navStr += "</a>";
	    	navStr += "</br>";
	    	navStr += desc;
	    	navStr += "</li>";
	    }
	    navStr += "</ul>"
	}
	navStr += "</div>";
	$("body").html(navStr);
});

