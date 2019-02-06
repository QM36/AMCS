(function () {
	var key = window.location.search.match(/(?!u)(key=)([^&]+)/);
	if(!key) {
		window.location.href = "index.html"
	}else {
		key = decodeURIComponent(key[2]);
		console.log("key: " + key);
	}

	var drawingUnder = document.getElementById("canvasunder");
	var drawingOn = document.getElementById("canvason");

	var down = false;
	var brush = true;
	var size = 10; //控制画笔与橡皮的大小
	var color = "red";
	var imageUrl = key;
	var ratio;

	showPic (imageUrl);

	if (drawingOn.getContext){
		var contextOn = drawingOn.getContext("2d");
	}
	$("#canvason").mousedown(function(event) {
		down = true;
		x=event.pageX;
		y=event.pageY;
		contextOn.lineWidth = size * ratio;
		contextOn.strokeStyle = color;
		if(brush) {
			contextOn.beginPath();
			contextOn.moveTo((x-100) * ratio, (y-120) * ratio);
		} else {
			contextOn.clearRect((x-100-size/2) * ratio, (y-120-size/2) * ratio , size * ratio, size * ratio);
		}
	});
	$("#canvason").mouseup(function(event) {
		down = false;
	});
	$("#canvason").mousemove(function(event) {
		if(down) {
			x=event.pageX;
			y=event.pageY;
			contextOn.lineWidth = size * ratio;
			contextOn.strokeStyle = color;
			if (brush) {
				contextOn.lineTo((x-100) * ratio, (y-120) * ratio);
				contextOn.stroke();
			} else {
				contextOn.clearRect((x-100-size/2) * ratio, (y-120-size/2) * ratio , size * ratio, size * ratio);
			}
		}
	});
	$("#brush").click(function() {
		brush = true;
		$("#rubber").css("opacity", "0.5");
		$("#brush").css("opacity", "1");
		console.log("brush : " + brush);
	});
	$("#rubber").click(function() {
		brush = false;
		$("#brush").css("opacity", "0.5");
		$("#rubber").css("opacity", "1");
		console.log("brush : " + brush);
	});
	function showPic (imageUrl) {
		if (drawingUnder.getContext){
			var contextUnder = drawingUnder.getContext("2d");
    		var image = new Image ();
			image.src = imageUrl;
			image.onload = function () {
				drawingUnder.width = image.width;
				drawingUnder.height = image.height;
				drawingOn.width = image.width;
				drawingOn.height = image.height;
				ratio = image.height / 530; //530是画布的高度可以自定义
				contextUnder.drawImage(image, 0, 0, image.width, image.height);
				$("#clean").click(function() {
					contextOn.clearRect(0, 0, image.width, image.height);
				});
			}
		}
	}
	function clearPic (imageUrl) {
	    var image = new Image();
	    var width, height;
	    var contextUnder;
	    image.src = imageUrl;
	    image.onload = function () {
            width = image.width;
            height = image.height;
            contextUnder = drawingUnder.getContext("2d");
            contextUnder.clearRect(0, 0, width, height);
        }
    }
	$("#open").change(function(event) {
		var file = event.target
		if (!file.files || !file.files[0]) {
            return;
        }
        var reader = new FileReader();
        reader.onload = function (evt) {
        	imageUrl = evt.target.result;//这里是base64编码
            showPic (imageUrl);
        }
        reader.readAsDataURL(file.files[0]);
	});
	$("#size").click(function(event) {
		size = event.target.dataset.num;
		$("#big,#middle,#small,#minmum").css("opacity", "0.5");
		$(`#${event.target.id}`).css("opacity", "1");
		console.log(event.target.id, event.target.dataset.num);
	});
	$("#color").click(function(event) {
		color = event.target.id;
		$("#red,#yellow,#blue,#green,#black").css("opacity", "0.5");
		$(`#${event.target.id}`).css("opacity", "1");
		console.log(event.target.id);
	});
	$("#empty").click(function () {
	    showPic(imageUrl);
	    drawingUnder.className = "";
    })
    $("#pencil").click(function () {
        clearPic(imageUrl);
        drawingUnder.className = "pencil-effect";
        drawingUnder.style.backgroundImage = "url(" + imageUrl + "), url(" + imageUrl + ")";
    });
    $("#emboss").click(function () {
        clearPic(imageUrl);
        drawingUnder.className = "emboss-effect";
        drawingUnder.style.backgroundImage = "url(" + imageUrl + "), url(" + imageUrl + "), url(" + imageUrl + ")";
    });
    $("#chalkboard").click(function () {
        clearPic(imageUrl);
        drawingUnder.className = "chalkboard-effect";
        drawingUnder.style.backgroundImage = "url(" + imageUrl + "), url(" + imageUrl + ")";
    });
    $("#colored-chalkboard").click(function () {
        clearPic(imageUrl);
        drawingUnder.className = "colored-chalkboard-effect";
        drawingUnder.style.backgroundImage = "url(" + imageUrl + "), url(" + imageUrl + "), url(" + imageUrl + ")";
    })
    $("#flannel").click(function () {
        clearPic(imageUrl);
        drawingUnder.className = "flannel-effect";
        drawingUnder.style.backgroundImage = "url(" + imageUrl + "), url(" + imageUrl + "), url(" + imageUrl + ")";
    });
    $("#low-ink-x").click(function () {
        clearPic(imageUrl);
        drawingUnder.className = "low-ink-x-effect";
        drawingUnder.style.backgroundImage = "url(" + imageUrl + "), url(" + imageUrl + "), url(" + imageUrl + ")";
    });
    $("#low-ink-y").click(function () {
        clearPic(imageUrl);
        drawingUnder.className = "low-ink-y-effect";
        drawingUnder.style.backgroundImage = "url(" + imageUrl + "), url(" + imageUrl + "), url(" + imageUrl + ")";
    });
    $("#collage").click(function () {
        clearPic(imageUrl);
        drawingUnder.className = "collage-effect";
        drawingUnder.style.backgroundImage = "url(" + imageUrl + "), url(" + imageUrl + "), url(" + imageUrl + "),url(" + imageUrl + "), url(" + imageUrl + "), url(" + imageUrl + ")";
    });
})();