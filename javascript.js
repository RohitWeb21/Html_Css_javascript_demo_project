document.getElementById("submitBtn").addEventListener('click', function() {
    // var RegExp = (/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);

    var name = document.getElementById("userName").value;
    var email = document.getElementById("Email").value;
    var textbox = document.getElementById("Textarea").value;
    var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    document.getElementById("userNameMSG").innerText = "";
    document.getElementById("emailHelp").innerText = "";
    document.getElementById("TextMSG").innerText = "";

    if (name == "") {
        document.getElementById("userNameMSG").innerText = "Fill The Name ";
        document.getElementById("userNameMSG").style.color = "#5221E6";
        document.getElementById("userName").focus();
    } else if (email == "") {
        document.getElementById("emailHelp").innerText = "Fill The Email  ";
        document.getElementById("emailHelp").style.color = "#5221E6";
        document.getElementById("Email").focus();
    } else if (!email.match(mailformat)) {
        document.getElementById("emailHelp").innerText = "Fill The Email formatly like xyz@gmail.com";
        document.getElementById("emailHelp").style.color = "#5221E6";
        document.getElementById("Email").focus();
    } else if (textbox == "") {
        document.getElementById("TextMSG").innerText = "Write the message";
        document.getElementById("TextMSG").style.color = "#5221E6";
        document.getElementById("Textarea").focus();
    } else {
        alert("Thanks for the comment " + name + " Have A Good Time ");
        return true;
    }



});

debugger
let nav = document.getElementsByClassName("nav-link");
// let addClass=document.getElementsByClassName("")
nav[0].onclick = function() {

    removeNavClass();
    this.classList.add("price");
}
nav[1].onclick = function() {

    removeNavClass();
    this.classList.add("price");
}
nav[2].onclick = function() {

    removeNavClass();
    this.classList.add("price");
}
nav[3].onclick = function() {

    removeNavClass();
    this.classList.add("price");
}
const removeNavClass = () => {
    var b
    for (b of nav) {
        b.classList.remove("price")
    }
}

$(window).on("load", () => {
    $(".preLoader").fadeOut("slow");
});



// aos slide show
AOS.init({
    offset: 120,
    delay: 0,
    duration: 1500,
    easing: 'ease',
    once: false,
    mirror: false,
    anchorPlacement: 'top-bottom',
    disable: false,
    startEvent: 'DOMContentLoaded',
});