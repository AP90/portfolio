$(".nav-link-1").on("click", function() {
    $(".homepage").fadeOut("slow", function() {
        $(".project1-page").fadeIn("5000ms");
    });
})

$(".arrow").on("click", function() {
    $(".project1-page, .project2-page, .project3-page, .skillspage, .aboutpage, .contactpage").fadeOut("slow", function() {
        setTimeout(function() {
            $(".homepage").fadeIn("slow");
        }, 800)
    });
});


$(".project-2").on("click", function() {
    $(".project1-page, .project3-page").fadeOut("slow", function() {
        setTimeout(function() {
            $(".project2-page").fadeIn("slow");
        }, 800)
    });
});

$(".project-1").on("click", function() {
    $(".project2-page, .project3-page").fadeOut("slow", function() {
        setTimeout(function() {
            $(".project1-page").fadeIn("slow");
        }, 800)
    });
});

$(".project-3").on("click", function() {
    $(".project1-page, .project2-page").fadeOut("slow", function() {
        setTimeout(function() {
            $(".project3-page").fadeIn("slow");
        }, 800)
    });
});

$(".nav-link-2").on("click", function() {
    $(".homepage").fadeOut("slow", function() {
        setTimeout(function() {
            $(".skillspage").fadeIn("slow");
        });
    });
});

$(".nav-link-3").on("click", function() {
    $(".homepage").fadeOut("slow", function() {
        setTimeout(function() {
            $(".aboutpage").fadeIn("slow");
        });
    });
});

$(".nav-link-4").on("click", function() {
    $(".homepage").fadeOut("slow", function() {
        setTimeout(function() {
            $(".contactpage").fadeIn("slow");
        });
    });
});