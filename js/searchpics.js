(function (argument) {
	$("#button").click(function() {
		if($("#input")[0].value == "") {
			
		}else {
			var url = `show.html?key=${$("#input")[0].value}`;
			window.location.href = url;
		}
	});
})();

