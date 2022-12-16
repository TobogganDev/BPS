$(".picto").click(function() {
    $("nav").toggleClass("open");
    $(".picto").toggleClass("close_icon");
});

$("#devis").click(function() {
    $("#devis_content").toggleClass("open_service")
    $("#devis_arrow").toggleClass("open_arrow")
});

$("#balisage").click(function() {
    $("#balisage_content").toggleClass("open_service")
    $("#balisage_arrow").toggleClass("open_arrow")
});

$("#signalisation").click(function() {
    $("#signalisation_content").toggleClass("open_service")
    $("#signalisation_arrow").toggleClass("open_arrow")
});

$("#public").click(function() {
    $("#public_content").toggleClass("open_service")
    $("#public_arrow").toggleClass("open_arrow")
});

$("#pose").click(function() {
    $("#pose_content").toggleClass("open_service")
    $("#pose_arrow").toggleClass("open_arrow")
});

$("#protection").click(function() {
    $("#protection_content").toggleClass("open_service")
    $("#protection_arrow").toggleClass("open_arrow")
});