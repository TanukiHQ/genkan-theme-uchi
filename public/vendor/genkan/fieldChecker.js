// Show password on mousedown on Sign up form
$('#showPassword').on('mousedown taphold', function () {
    $("#registerPassword").attr("type", "text")
    $("#registerPassword").attr("class", "input is-primary is-active")
    $("#icon-showPassword").addClass("fa-eye")
    $("#icon-showPassword").removeClass("fa-eye-slash")
    $("#showPasswordText").text("Release to hide password")
}).on('mouseup mouseleave taphold', function () {
    $("#registerPassword").attr("type", "password")
    $("#registerPassword").attr("class", "input")
    $("#icon-showPassword").addClass("fa-eye-slash")
    $("#icon-showPassword").removeClass("fa-eye")
    $("#showPasswordText").text("Hold to show password")
})

// We use Regex for validating input
// Visit the link below for documentation related to regex
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search

ValidatePassword = () => {
    var str = $('#newPassword').val(); 
    if (str.length <= 0) {
        $("#passwordMessage").css("visibility", "visible");
        $("#passwordMessage").text("Password length must be at least 8 characters");
        $("#passwordMessage").addClass("is-danger");
        $("#registerButton").prop("disabled", true);
    }
    else if (str.search(/[A-Z]/) == -1) {
        $("#passwordMessage").css("visibility", "visible");
        $("#passwordMessage").text("Password must contain at least 1 uppercase letter");
        $("#passwordMessage").addClass("is-danger");
        $("#registerButton").prop("disabled", true);
    }
    else if (str.search(/[a-z]/) == -1) {
        $("#passwordMessage").css("visibility", "visible");
        $("#passwordMessage").text("Password must contain at least 1 lowercase letter");
        $("#passwordMessage").addClass("is-danger");
        $("#registerButton").prop("disabled", true);
    }
    else if (str.search(/[0-9]/) == -1) {
        $("#passwordMessage").css("visibility", "visible");
        $("#passwordMessage").text("Password must contain at least 1 number");
        $("#passwordMessage").addClass("is-danger");
        $("#registerButton").prop("disabled", true);
    }
    else if (str.search(/[$&+,:;=?@#|'<>.^*()%!-]/) == -1) {
        $("#passwordMessage").css("visibility", "visible");
        $("#passwordMessage").text("Password must contain at least 1 special character");
        $("#passwordMessage").addClass("is-danger");
        $("#registerButton").prop("disabled", true);
    }
    else {
        $("#passwordMessage").css("visibility", "visible");
        $("#passwordMessage").text("Looks Good!");
        $("#passwordMessage").removeClass("is-danger");
        $("#passwordMessage").addClass("is-success");
        $("#registerButton").prop("disabled", false);
    }
}

ValidatePhoneNumber = () => {
    var str = $('#phoneNumberInput').val(); 
    if (str.length <= 0) {
        $("#phoneMessage").css("visibility", "visible");
        $("#phoneMessage").text("Please enter your phone number");
        $("#phoneMessage").addClass("is-danger");
        $("#submitButton").prop("disabled", true);
    }
    else if (str.length > 8) {
        $("#phoneMessage").css("visibility", "visible");
        $("#phoneMessage").text("Phone number should only contain 8-digits");
        $("#phoneMessage").addClass("is-danger");
        $("#submitButton").prop("disabled", true);
    }
    else if(str.search(/^[0-9]*$/) == -1){
        $("#phoneMessage").css("visibility", "visible");
        $("#phoneMessage").text("Please enter a valid phone number without any spacing or dashes");
        $("#phoneMessage").addClass("is-danger");
        $("#submitButton").prop("disabled", true);
    }
    else {
        $("#phoneMessage").css("visibility", "visible");
        $("#phoneMessage").text("Looks Good!");
        $("#phoneMessage").removeClass("is-danger");
        $("#phoneMessage").addClass("is-success");
        $("#submitButton").prop("disabled", false);
    }
}