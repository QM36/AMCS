(function (argument) {
	$("#button").click(function() {
		if($("#input")[0].value == "") {
			alert("请输入关键字");
		}else {
			var url = `show.html?key=${$("#input")[0].value}`;
			window.location.href = url;
		}
	});
})();

