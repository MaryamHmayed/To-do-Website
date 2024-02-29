
const button=document.getElementById("login-button")
 


button.addEventListener("click",function(){
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    if (username=='AdminSEF123' && password=='SeF@ctORy$$456'){
    window.location.assign("/pages/main.html")
    }
    else {alert("invalid username or password")}
})



