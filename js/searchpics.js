(function (argument) {
	$("#button").click(function() {
		var url = `show.html?key=${$("#input")[0].value}`;
		window.location.href = url;
	});
})();

