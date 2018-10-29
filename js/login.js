window.onload = function () {
    $("#login_botton").click(function () {
        var userName = $("#userName").val();
        var password = $("#password").val();

        // test
        console.log("user: " + userName + ", psw: " + password);

        // set storage
        window.localStorage.setItem('userName', userName);
        window.localStorage.setItem('password', password);

        // jump to index.html
        window.location.href = "index.html";
    })
}