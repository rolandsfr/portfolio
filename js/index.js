// Initializing data-src attribute's functionality
setBackgroundImg();

let bars = $(".burger-menu"),
    menuOpened = false,
    autoScroll = false;

// Hiding prelaoder and initializing wow animations
$(window).on("load", () => {
    setTimeout(() => {
        $(".preloader").animate({opacity: 0}, 400, () => {
           $(".preloader").hide() 
        })
    }, 1500)

    setTimeout(() => {
        if($(document).width() >= 1024) {
            new WOW().init();
        }
    }, 1000)
})

// Top navigation changes it's background on scroll on mobile devices
$(window).resize(() => {
    if(autoScroll) {
        setTimeout(showNavOnResize, 500)
    } else {
        showNavOnResize()
    }

    $(".about-wrapper").height($(".about-wrapper .container").height())
})

$(window).scroll(() => {
    if(autoScroll) {
        setTimeout(showNav(), 2000)
        autoScroll = false;
    } else {
        showNav()
    }
})

function showNav() {
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
        $(".top-menu").removeClass("scrolled");
    }
}

function showNavOnResize() {
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
}

// Wrapping and unwrapping #mainScreen elements for responsiveness reasons
let container = document.createElement("div"),
    container_spec = document.createElement("div");

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

    $("html, body").animate({scrollTop: $($(e.target).attr("href")).offset().top - 40}, 700, () => {
        autoScroll = true;
    })
})

// Navigational scrolling
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
    e.preventDefault()
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
    if($(document).width() <= 816) {
        navigateToSection(e, 700);
    } else {
        $("html, body").animate({scrollTop: $($(e.target).attr("href")).offset().top - 40}, 700)
    }
});

$(".view-portfolio").click((e) => {
    e.preventDefault();
    navigateToSection(e, 700);
})

// #aboutMe section's wrapping for responsiveness reasons
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