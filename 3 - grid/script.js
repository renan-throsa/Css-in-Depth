window.onload = function () {
    var currentDateElement = document.getElementById("current-date");
    var currentDate = new Date();
    currentDateElement.textContent = currentDate.getFullYear();
};

function greetUser(event) {
    var form = event.target;
    var username = form.username.value;
    var password = form.password.value;

    alert(`You're logged as ${username}`)
    form.username.value = ""
    form.password.value = ""
    return false;
}

