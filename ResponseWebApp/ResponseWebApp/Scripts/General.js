$(function() {
    $("a.mobile")
        .click(function() {
            $(".sidebar").slideToggle("fast");
        });

    $("#nav li a")
        .click(function () {
            $("#nav li a").removeClass("selected");
            $(this).toggleClass("selected");
        });
});