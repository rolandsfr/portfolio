setBackgroundImg();

let bars = $(".burger-menu");
let menuOpened = false;

$(window).on("load", () => {
    setTimeout(() => {
        $(".preloader").animate({opacity: 0}, 400, () => {
           $(".preloader").hide() 
        })
    }, 1500)

    setTimeout(() => {
        new WOW().init();
    }, 1000)
    
})

$(window).resize(() => {
    if($(document).width() <= 816) {
        $(".top-menu").show()
        $(window).scroll(() => {
            if($(document).scrollTop() > 10) {
                $(".top-menu").addClass("scrolled")
            } else {
                $(".top-menu").removeClass("scrolled")

            }

            if($(document).scrollTop() > 250) {
                $(".top-menu").css("border-bottom", "1px solid #f0f0f0")
            } else {
                $(".top-menu").css("border-bottom", "none")
            }
        })
    } else {
        $(".top-menu").hide()
    }

    $(".footer-links a").click((e) => {
        e.preventDefault()
        if($(document).width() <= 816) {
            navigateToSection(e, 700);
        } else {
            $("html, body").animate({scrollTop: $($(e.target).attr("href")).offset().top - 40}, 700)
        }
    });
})

$(window).scroll(() => {
    if($(document).width() <= 816) {
        if($(document).scrollTop() > 10) {
            $(".top-menu").addClass("scrolled")
        } else {
            $(".top-menu").removeClass("scrolled")

        }

        if($(document).scrollTop() > 250) {
            $(".top-menu").css("border-bottom", "1px solid #f0f0f0")
        } else {
            $(".top-menu").css("border-bottom", "none")
        }
    } else {
        $(".top-menu").removeClass("scrolled")
    }
})

let container = document.createElement("div");
let container_spec = document.createElement("div");
container = $(container).addClass("container")
container_spec = $(container_spec).addClass("container spec")

if($(document).width() < 1025) {
    $(".basic-info").wrap(container)
    $(".view-portfolio").wrap(container_spec)
} else {
    $(".basic-info").unwrap(".container")
    $(".view-portfolio").unwrap(".container")
}

$(window).resize(() => {
    $(".basic-info").unwrap(".container")
        $(".view-portfolio").unwrap(".container")

    if($(document).width() < 1025) {
        $(".basic-info").wrap(container)
        $(".view-portfolio").wrap(container_spec)
    } else {
        $(".basic-info").unwrap(".container")
        $(".view-portfolio").unwrap(".container")
    }
})

$(".desktop-nav a").click((e) => {
    e.preventDefault();

    $("html, body").animate({scrollTop: $($(e.target).attr("href")).offset().top - 40}, 700)
})


bars.on("click", () => {
    $(".overlap").animate({"margin-left": "0"}, 400);
        
    setTimeout(() => {
        $(".nav-menu-mobile").addClass("popUp");
        $(".nav-menu-mobile li").addClass("getInPlace");
    }, 150);
});

bars.click("click", () => {
    setTimeout(() => {
        $(".close-menu").addClass("open-menu");
    }, 500)
})

$(".close-menu span").click(() => {
    $(".close-menu").removeClass("open-menu");
    setTimeout(() => {
        $(".overlap").animate({"margin-left": "240%"}, 400);
    }, 150);
        
    $(".nav-menu-mobile").toggleClass("popUp");
    $(".nav-menu-mobile li").removeClass("getInPlace");
})

$(".nav-menu-mobile a").click((e) => {
   navigateToSection(e, 10);

    $(".close-menu").removeClass("open-menu");
    setTimeout(() => {
        setTimeout(() => {
            $(".overlap").animate({"margin-left": "240%"}, 400);
        }, 150);
            
        $(".nav-menu-mobile").toggleClass("popUp");
        $(".nav-menu-mobile li").removeClass("getInPlace");
    }, 150)
})

$(".footer-links a").click((e) => {
    e.preventDefault()
    if($(document).width() <= 816) {
        navigateToSection(e, 700);
    } else {
        $("html, body").animate({scrollTop: $($(e.target).attr("href")).offset().top - 40}, 700)
    }
});

function navigateToSection(e, speed) {
    let padding =  $($(e.target).attr("href")).outerHeight() - $($(e.target).attr("href")).height();
    let navHeight = $(".top-menu").outerHeight();

    if($(e.target).attr("href") === "#slogan") {
        $("html, body").animate({scrollTop: $($(e.target).attr("href")).offset().top}, speed)
    } else {
        $("html, body").animate({scrollTop: $($(e.target).attr("href")).offset().top - padding - navHeight / 2}, speed)
    }
}

$(".toggle-details").click((e) => {
    e.preventDefault();
    $(e.target).closest(".work").find(".work-descr-inner").toggleClass("toggled").slideToggle();

    if($(e.target).closest(".work").find(".work-descr-inner").hasClass("toggled")) {
        $(e.target).html("Close details");
    } else {
        $(e.target).html("See details");
    }
})

$(".about-wrapper").height($(".about-wrapper .container").height())

let currentSectionCount = 1;


   $("#wrapper > section").each((index, el) => {
    $(window).scroll((e) => {
     if($(window).scrollTop() >= $("#wrapper > section").eq(index).offset().top) {

        currentSectionCount = $(el).attr("data-section");
        

        $(".section-id").html("# 0" + currentSectionCount)

     }
    });
   })

if($(window).width() >= 1024) {
    let container = document.createElement("div");
    let el = $(container).addClass("container")
    $(".aboutViewport").wrap(el);
}

$(".view-portfolio").click((e) => {
    e.preventDefault();

    $("html, body").animate({scrollTop: $($(e.target).attr("href")).offset().top + "px"}, 700, () => {

    });
})

// if($(window).width() < 1024) {
//     $("body").css("height", $("#wrapper > section").eq(--currentSectionCount).height());

//     let hammertime = new Hammer( document.getElementById('wrapper'));

//     hammertime.on("swipe", () => {
//         $("html, body").animate({scrollTop: $("#wrapper > section").eq(++currentSectionCount).offset().top}, 1000)
//         console.log(":p")

//     })
// } else {
//     $("body").css("height", "auto");
// }