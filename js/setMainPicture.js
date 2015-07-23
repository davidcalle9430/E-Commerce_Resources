$(".thumbnail").click(function() {
    var sourcee = $(this).find("img").attr("src");
    $("#main_photo").attr("src", sourcee );
});
