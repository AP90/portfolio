$(".nav-link-1").on("click", function() {
    $(".homepage").fadeOut("slow", function() {
        $(".project1-page").fadeIn("5000ms");
    });
})

$(".arrow").on("click", function() {
    $(".project1-page, .project2-page, .project3-page, .project4-page, .project5-page, .project6-page, .skillspage, .aboutpage, .contactpage").fadeOut("slow", function() {
        setTimeout(function() {
            $(".homepage").fadeIn("slow");
        }, 800)
    });
});


$(".project-2").on("click", function() {
    $(".project1-page, .project3-page, .project4-page, .project5-page, .project6-page").fadeOut("slow", function() {
        setTimeout(function() {
            $(".project2-page").fadeIn("slow");
        }, 800)
    });
});

$(".project-1").on("click", function() {
    $(".project2-page, .project3-page, .project4-page, .project5-page, .project6-page").fadeOut("slow", function() {
        setTimeout(function() {
            $(".project1-page").fadeIn("slow");
        }, 800)
    });
});

$(".project-3").on("click", function() {
    $(".project1-page, .project2-page, .project4-page, .project5-page, .project6-page").fadeOut("slow", function() {
        setTimeout(function() {
            $(".project3-page").fadeIn("slow");
        }, 800)
    });
});

$(".project-4").on("click", function() {
    $(".project1-page, .project2-page, .project3-page, .project5-page, .project6-page").fadeOut("slow", function() {
        setTimeout(function() {
            $(".project4-page").fadeIn("slow");
        }, 800)
    });
});

$(".project-5").on("click", function() {
    $(".project1-page, .project2-page, .project3-page, .project4-page, .project6-page").fadeOut("slow", function() {
        setTimeout(function() {
            $(".project5-page").fadeIn("slow");
        }, 800)
    });
});

$(".project-6").on("click", function() {
    $(".project1-page, .project2-page, .project3-page, .project4-page, .project5-page").fadeOut("slow", function() {
        setTimeout(function() {
            $(".project6-page").fadeIn("slow");
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


// navbar x animation
// $(".icon").click(() => {
//     $(".icon").toggleClass("active", () => {
        
//     });
//     $(".navcontent").fadeToggle("slow");
// })

$(".icon").on("click", function() {
    $(".navcontent").fadeToggle("slow");
})

$(".icon").on("click", function() {
    $(".icon").toggleClass("active");
})