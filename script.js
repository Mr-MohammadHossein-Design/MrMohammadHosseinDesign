function login() {

    let phone = document.getElementById("phone").value;
    let password = document.getElementById("password").value;


    // اطلاعات آزمایشی ورود
    let correctPhone = "09123456789";
    let correctPassword = "123456";


    if (phone === correctPhone && password === correctPassword) {

        window.location.href = "download.html";

    } else {

        document.getElementById("message").innerHTML =
        "شماره تلفن یا رمز عبور اشتباه است";

    }

}
