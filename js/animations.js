// let currentSection = "#intro"

// let trigger = false;

// $(".nav-menu-mobile").find("a").each((index, el) => [
//     $(el).click((e) => {

//         trigger = false;

//         // Make scrollable section after redirect

//             $("#wrapper").css("padding-bottom", "0px");



//         if($(`${$(el).attr("href")}`).height() >= $(window).height()) {
//             $("#wrapper").css("padding-bottom", $(`${$(el).attr("href")}`).outerHeight() - $(window).height() + "px");

//         } 

//         // console.log($(`$(el).attr("href")}`));

//         console.log($(e.target).attr("href"))


//         if( $(el).attr("href") != "#mainScreen") {


//             $(".burger-menu").removeClass("moveOut");


//             // $(".burger-menu").addClass("fixed-burger");

//             setTimeout(() => {
//                 $(".burger-menu").toggleClass("move-fixed-burger");
//             }, 400);

//             // $(".header-logo").toggleClass("logoInPlace");

//             // trigger = true;

//             $(".burger-menu").click(() => {
//                 setTimeout(() => {
//                     $(".burger-menu").toggleClass("alignBurger")
//                 }, 400);

//             })



//         } else {
//             $(".burger-menu").removeClass("alignBurger")


//             $(".burger-menu").addClass("moveOut");

//             // $(".burger-menu").removeClass("fixed-burger");

//             // setTimeout(() => {
//             //     $(".burger-menu").removeClass("move-fixed-burger");
//             // }, 200);

//             $(".header-logo").removeClass("logoInPlace");
//         }

//         // console.log(typeof $(`${$(el).attr("href")}`).height());
        
//         setTimeout(() => {
//             if(menuOpened) {
//                 setTimeout(() => {
//                     $(".overlap").animate({"margin-left": "140%"}, 400);

//                     setTimeout(() => {
//                         $(".profession").removeClass("disappear");
//                     }, 300)

//                 }, 250)
//             } else {
//                 $(".overlap").animate({"margin-left": 0}, 500);

//             }
        
        
//             setTimeout(() => {
//                 bars.toggleClass("moveOut");
//             }, 300);

//             bars.toggleClass("toggleBars");

        
//             setTimeout(() => {
//                 $(".nav-menu-mobile").toggleClass("popUp");
//             }, 200);
        
//             setTimeout(() => {
//                 $(".nav-menu-mobile li").toggleClass("getInPlace");
//             }, 250);
        
//             menuOpened = !menuOpened;
//         }, 200);

//         currentSection = $(el).attr("href");

//     })
    
// ]);

// $(".burger-menu").click(() => {
//     if (currentSection != "#mainScreen" && !$(".burger-menu").hasClass("toggleBars")) {
//         trigger = true;
//     } else {
//         trigger = false;

//     }

//     console.log(trigger)
// });

// // $(".burger-menu").click(() => {
// //     if(trigger) {

// //         $(".burger-menu").animate({marginLeft: "-3em"}, 400);

// //         // console.log("my chuest");
// //         trigger = false;
// //     } else if(!trigger && ){
// //         // $(".burger-menu").animate({marginLeft: "0em"}, 400);
// //     }
// // });

