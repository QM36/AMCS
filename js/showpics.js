(function () {

var key = window.location.search.match(/(?!u)(key=)([^&]+)/);
if(!key) {
	window.location.href = "index.html"
}else {
	key = decodeURIComponent(key[2]);
	$("#input").val(key);
	console.log("搜索关键词是："+key);
	getpics(key);
}

$("#search").click(function() {
	key = $("#input")[0].value;
	if (key == '') {
	}else {
		key = decodeURIComponent(key);
		$("input").val(key);
		console.log("搜索关键词是："+key);
		getpics(key);
	}
});
function getpics (key) {
	$.ajax(
	{
		url: "https://www.easy-mock.com/mock/5bc87a74f6421702c6455d6d/amcs/getallurl",
		type: "GET",
		data:`key=${key}`,
		success: function (response) {
			var html = "";
			for(var i = 0; i < response.data.length; i++) {
			html += `<div class="col-md-4 col-sm-6 ">
		                    <div  id="pics" class="box">
		                        <img src=${response.data[i].url}>
		                        <div class="box-content">
		                            <div class="box-inner-content">
		                                <div id="bg"class="post">${response.data[i].describe}</div>
		                                <ul class="icon">
		                                    <li><a class="fa fa-search" href="process.html?key=${response.data[i].url}" target="blank"></a></li>
		                                    <li><a class="fa fa-link" href="${response.data[i].url}" target="blank"></a></li>
		                                </ul>
		                            </div>
		                        </div>
		                    </div>
		                </div>`
			}
			console.log(response);
			$(".row").empty();
			$(".row").append(html);
		},
		error: function () {
			console.log("error");
		}
	});
}
$("#favicon").mouseover(function(){
	$("#manageuser").show();
});
$("#manageuser").mouseover(function(){
	$("#manageuser").show();
});
$("#manageuser").mouseout(function(){
	$("#manageuser").hide();
});
})();
