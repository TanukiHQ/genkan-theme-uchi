// Show password on mousedown on Sign up form
$('#showPassword').on('mousedown taphold', function () {
    $("#newPassword").attr("type", "text")
    $("#newPassword").attr("class", "input is-primary is-active")
    $("#icon-showPassword").addClass("fa-eye")
    $("#icon-showPassword").removeClass("fa-eye-slash")
    $("#showPasswordText").text("Release to hide password")
}).on('mouseup mouseleave taphold', function () {
    $("#newPassword").attr("type", "password")
    $("#newPassword").attr("class", "input")
    $("#icon-showPassword").addClass("fa-eye-slash")
    $("#icon-showPassword").removeClass("fa-eye")
    $("#showPasswordText").text("Hold to show password")
})
