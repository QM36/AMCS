function mouseover(){
    console.log("mouse over!");
    $("#change-image-span").css("display", "block");
    $("#change-head-image").css("cursor", "pointer");
}

function mouseout(){
    $("#change-image-span").css("display", "none");
}

function onchangepsw(){
    $("#change-psw-span").css("cursor", "pointer");
}

window.onload = function () {
    var userName = window.localStorage.getItem("userName");
    console.log(userName);
    $(".info-row-div input").val(userName);
}