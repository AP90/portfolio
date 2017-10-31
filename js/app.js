$(".nav-link-1").on("click", function() {
    $(".homepage").fadeOut("slow", function() {
        $(".workpage").fadeIn("5000ms");
    });
})

$(".arrow").on("click", function() {
    $(".workpage").fadeOut("slow", function() {
        $(".homepage").fadeIn("5000ms");
    });
});