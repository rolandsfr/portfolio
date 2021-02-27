(function(){
    emailjs.init("user_z3F7jyQ8qvbeOobnstw7p");
})();

$("form").submit((e) => {
    e.preventDefault();
    $(".form-error").hide()
    $(".form-error").removeClass("success");

    $("form input[type=text], #message").css("border", "none")

    // Validating input values
    if($("form textarea, form input[type=email], form input[type=name]").val() === ""){
        $(".form-error").show().html("Please, fill in all the fields.")
        $("form textarea, form input[type=email], form input[type=name]").css("border", "1px solid #DC000F");
    } else {
        // Sending the email
        $(".form-error").html("");

        // Gatherting information
        let templateParams = {
            name: $("#name").val(),
            email: $("#email").val(),
            message: $("#message").val()
        }

        emailjs.send('gmail', 'msg', templateParams)
            .then(function(response) {
                console.log("ayo bby")
                $(".form-error").html("Your message was successfully sent!").addClass("success").show();
                $("#email, #name, form textarea").val("");
                $("form input, form textarea").css("border", "none");
                $("#email").focus()
            }, function(error) {
                $(".form-error").html("Something went wrong... Refresh page and try again.").show();
            });
    }
})