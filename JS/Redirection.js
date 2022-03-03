function getval() {
    var Select__Redirect = document.getElementById('Redirection');

    if (Select__Redirect.value == "1") {
        window.location.href = "8K.html";
    } else if (Select__Redirect.value == "2") {
        window.location.href = "10k.html";
    }
    else if (Select__Redirect.value == "3") {
        window.location.href = "10Q.html";
    }
    else if (Select__Redirect.value == "4") {
        window.location.href = "Form3.html";
    }
    else if (Select__Redirect.value == "5") {
        window.location.href = "Form4.html";
    }
    else if (Select__Redirect.value == "6") {
        window.location.href = "Form5.html";
    }
    else if (Select__Redirect.value == "7") {
        window.location.href = "ProxyForm.html";
    }
}