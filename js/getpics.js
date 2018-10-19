$("button").click(function(){
   getpics();
});

function getpics () {
	key = $('.input').html();
	$.ajax(
	{
		url: "https://www.easy-mock.com/mock/5bc87a74f6421702c6455d6d/amcs/getallurl",
		type: "GET",
		data:key,
		success: function (data) {
			var html = "";
			for(var i = 0; i < data.data.length; i++) {
			html += `<div class="col-md-4 col-sm-6 ">
		                    <div class="box">
		                        <img src=${data.data[i].url}>
		                        <div class="box-content">
		                            <div class="box-inner-content">
		                                <h3 class="title">Williamson</h3>
		                                <span class="post">Web Developer</span>
		                                <ul class="icon">
		                                    <li><a class="fa fa-search" href="#"></a></li>
		                                    <li><a class="fa fa-link" href="#"></a></li>
		                                </ul>
		                            </div>
		                        </div>
		                    </div>
		                </div>`
			}
			console.log(data);
			$(".row").append(html);
		},
		error: function () {
			console.log("error");
		}
	});
}