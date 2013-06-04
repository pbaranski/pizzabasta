window.show70 = function () {

    var m70 = $(".m70");
    var d70 = $(".d70");
    var x70 = $(".x70");
    var m70h = $(".m70h");
    var d70h = $(".d70h");
    var x70h = $(".x70h");


    if ($(".m70").hasClass("hideIt")) {


        m70.removeClass("hideIt");
        d70.removeClass("hideIt");
        x70.removeClass("hideIt");

        m70h.removeClass("hideIt");
        d70h.removeClass("hideIt");
        x70h.removeClass("hideIt");

        m70.addClass("bg-color-m70");
        d70.addClass("bg-color-m70");
        x70.addClass("bg-color-m70");

    } else {

        m70.addClass("hideIt");
        d70.addClass("hideIt");
        x70.addClass("hideIt");
        m70h.addClass("hideIt");
        d70h.addClass("hideIt");
        x70h.addClass("hideIt");

    }


}

window.show20 = function () {
    var m20h = $(".m20h");
    var m20 = $(".m20");
    var d20 = $(".d20");
    var x20 = $(".x20");

    if ($(".m20").hasClass("hideIt")) {

        window.console.log("70% spoken");
        m20.removeClass("hideIt");
        d20.removeClass("hideIt");
        x20.removeClass("hideIt");

        m20h.removeClass("hideIt");

        m20.addClass("bg-color-m20");
        d20.addClass("bg-color-m20");
        x20.addClass("bg-color-m20");

    } else {

        m20.addClass("hideIt");
        d20.addClass("hideIt");
        x20.addClass("hideIt");
        m20h.addClass("hideIt");

    }


}

window.bigSmall = function () {
    var bigSmall1 = $(".bigSmall1");
    var bigSmall2 = $(".bigSmall2");

    if (bigSmall1.hasClass("hideIt")) {
       bigSmall1.removeClass("hideIt");
       bigSmall2.addClass("hideIt");

    }else{
        bigSmall2.removeClass("hideIt");
        bigSmall1.addClass("hideIt");


    }
}


window.bigX = function () {
    var bigX1 = $(".bigX1");
    var bigX2 = $(".bigX2");

    if (bigX1.hasClass("hideIt")) {
        bigX1.removeClass("hideIt");
        bigX2.addClass("hideIt");

    }else{
        bigX2.removeClass("hideIt");
        bigX1.addClass("hideIt");


    }
}

function ScrollPage() {

    var pageHeight = document.body.scrollHeight;

    window.scrollTo(0, pageHeight/2)

}

