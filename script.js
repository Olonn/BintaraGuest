function checkPassword() {
    var password = document.getElementById("password").value;
    if (password === "8558GU3St#") {
        window.location.href = "https://bintara.com.my/";
    } else {
        alert("Incorrect password. Please try again.");
    }
}

function toggleButton() {
    var checkbox = document.getElementById("terms");
    var button = document.getElementById("loginButton");
    button.disabled = !checkbox.checked;
}
