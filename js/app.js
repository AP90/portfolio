// carousel on mobile 
let i = 0;
let images = [];
let time = 3000;

images[0] = "styles/images/prepxp2.png";
images[1] = "styles/images/hiit-timer.png";
images[2] = "styles/images/kuroinu.png";
images[3] = "styles/images/parker-belgravia.png";

function changeImg() {

    document.slide.src = images[i];
    $(".slide-img").fadeToggle("slow");
    if (i < images.length - 1) {
        i++;
        setTimeout(function() {
            $(".slide-img").fadeToggle("slow"); 
        }, 2000);
    } else {
        i = 0;
        setTimeout(function() {
            $(".slide-img").fadeToggle("slow"); 
        }, 2000);
    }
    setTimeout("changeImg()", time);
}

window.onload = changeImg;



// arrow & project links for workpage

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

// nav links for home page

$(".nav-link-1").on("click", function() {
    $(".homepage").fadeOut("slow", function() {
        $(".project1-page").fadeIn("slow");
    });
})


$(".nav-link-2").on("click", function() {
    $(".homepage").fadeOut("slow", function() {
        $(".skillspage").fadeIn("slow");
    });
});

$(".nav-link-3").on("click", function() {
    $(".homepage").fadeOut("slow", function() {
        $(".aboutpage").fadeIn("slow");
    });
});

$(".nav-link-4").on("click", function() {
    $(".homepage").fadeOut("slow", function() {
        $(".contactpage").fadeIn("slow");
    });
});


// navbar x animation

$(".icon").on("click", function() {
    // used to show navcontent div
    $(".navcontent").fadeToggle("slow");
    animateIcon();
})

// utility methods

function animateIcon() {
    // used for icon animation
    $(".icon").toggleClass("active");
    // hide body overflow to stop scrolling away from hamburger icon
    $("body").toggleClass("hidden");
}

function fadeEverything() {
    $(".project1-page, .project2-page, .project3-page, .project4-page, .project5-page, .project6-page, .skillspage, .aboutpage, .contactpage, .homepage").fadeOut("fast");
}

function fadeOutNav() {
    fadeEverything();
    setTimeout(function() {
        $(".navcontent").fadeToggle("slow");
    }, 200);
    animateIcon();
}

// navlinks for tablet and mobile menu

$(".nav-link-1--tablet").on("click", function() {
    fadeOutNav();
    $(".project1-page").fadeIn("slow");
});

$(".nav-link-2--tablet").on("click", function() {
    fadeOutNav();
    $(".skillspage").fadeIn("slow");
});

$(".nav-link-3--tablet").on("click", function() {
    fadeOutNav();
    $(".aboutpage").fadeIn("slow");
});

$(".nav-link-4--tablet").on("click", function() {
    fadeOutNav();
    $(".contactpage").fadeIn("slow");
});


// handle emails

let contactName = $(".contact__name");
let contactMessage = $(".contact__message");
let contactEmail = $(".contact__email");

$(".contact__send").on("click", () => {
    let name = contactName.val();
    let email = contactEmail.val();
    let message = contactMessage.val();
    if (name.length > 0 && email.length > 0 && message.length > 0) {
        emailjs.send("gmail","github_portfolio",{name, email, message});
        alert("Thanks! Your email has been sent!");
        contactName.val("");
        contactMessage.val("");
        contactEmail.val("");
    }
});
