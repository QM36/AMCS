// 退出登录
function logout() {
    window.localStorage.setItem("userName", "");
    window.localStorage.setItem("password", "");
    location.reload(false);
}

window.onload = function () {
    // get storage
    var userName = window.localStorage.getItem("userName");
    var password = window.localStorage.getItem("password");

    // test
    console.log("user: " + userName + ", psw: " + password);

    // 调整为已登录状态
    if(userName != "" && password != "") {
        var oldDiv = $("div")[2];
        var newDiv = document.createElement("div");
        newDiv.innerHTML = "Welcome " + "<a href='info.html'>" + userName + "</a>" + " ! " + "<a onclick='logout()' href='javascript:void(0)'>退出</a>";
        newDiv.className = "logindiv"
        console.log(newDiv);
        oldDiv.parentNode.replaceChild(newDiv, oldDiv);
    }else {
        console.log("is null!");
    }
}