// 判断输入合法
function judge(userName, password, repassword) {
    if (userName == ""){
        alert("用户名不能为空。");
        return false;
    }else if(password == "" || repassword == ""){
        alert("密码不能为空。");
        return false
    }else if(password != repassword){
        alert("输入密码不一致。");
        $("#password").val("");
        $("#re-password").val("");
        return false;
    }else{
        return true;
    }
}

window.onload = function () {
    $("#register_botton").click(function () {
        var userName = $("#userName").val();
        var password = $("#password").val();
        var repassword = $("#re-password").val();

        // test
        console.log("user: " + userName + ", psw: " + password + ",re: " + repassword);

        if(judge(userName, password, repassword)){
            // set storage
            window.localStorage.setItem('userName', userName);
            window.localStorage.setItem('password', password);

            // jump to index.html
            window.location.href = "index.html";
        }
    })
}