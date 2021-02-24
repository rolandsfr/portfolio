function setBackgroundImg() {
    $("[data-src]").each(function(index, el) {
        $(el).css("background-image", "url(" + $(el).attr("data-src") + ")");
    });
}
