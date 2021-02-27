function setBackgroundImg() {
    $("[data-src]").each(function(index, el) {
        $(el).css("background-image", "url(" + $(el).attr("data-src") + ")");
    });
}

function navigateToSection(e, speed) {
    let padding =  $($(e.target).attr("href")).outerHeight() - $($(e.target).attr("href")).height();
    let navHeight = $(".top-menu").outerHeight();

    e.preventDefault()

    if($(document).width() >= 1024) navHeight = 0
    else navHeight = $(".top-menu").outerHeight();

	$(window).resize(() => {
		if($(document).width() >= 1024) navHeight = 0
    	else navHeight = $(".top-menu").outerHeight();
	})

    if($(e.target).attr("href") === "#slogan") {
        $("html, body").animate({scrollTop: $($(e.target).attr("href")).offset().top - navHeight}, speed, () => {
            autoScroll = true;
        })
    } else {
        $("html, body").animate({scrollTop: $($(e.target).attr("href")).offset().top - padding - navHeight / 2}, speed, () => {
            autoScroll = true;
        })
    }

    return false;
}