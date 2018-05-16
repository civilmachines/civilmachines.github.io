jQuery(document).ready(function(e) {
    "use strict";

    function t() {
        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
            return false
        }
        return true
    }

    function n() {
        var e = window.navigator.userAgent;
        var t = e.indexOf("MSIE ");
        if (t > 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./)) return parseInt(e.substring(t + 5, e.indexOf(".", t)));
        return false
    }

    function v() {
        var t = e(window).height();
        var n = e(window).width();
        var r = e(".navigation .nav");
        e("#banner, #header .container").css("height", t + "px");
        var i = e("#banner").find(".bg-parallax").height();
        e("#header, #banner").css({
            height: i + "px"
        })
    }

    function m() {
        var t = e(window).height();
        var n = (t - e(".nav").height() - 40) / 2;
        if (t > e(".nav").height()) {
            e(".nav").css("top", n + "px");
            e(".logo-nav").css("height", n + "px")
        } else {
            e(".nav").css("top", "0")
        }
    }

    function g() {
        if (e(window).height() < e(".nav").height()) {
            e(".navigation").css("overflow-y", "scroll")
        } else {
            e(".navigation").css("overflow-y", "visible")
        }
    }

    function y() {
        if (e(".logo-nav").height() <= 140) {
            e(".logo-nav").hide()
        } else {
            e(".logo-nav").show()
        }
    }

    function S() {
        var t = e(".team-content .item").find("img").height() - 1;
        e(".team-content .item").find(".hiring").height(t)
    }

    function x() {
        var t = e(window).width();
        var n = e(".blog-page").height();
        var r = e(".sidebar").children().height() + 120;
        e(".sidebar").css({
            height: n,
            minHeight: r
        });
        e("#page-wrap").css("minHeight", r);
        if (t >= 1700) {
            var i = (t - e(".container").width()) / 2 - 30;
            e(".sidebar").css({
                width: i + "px"
            })
        } else {
            var s = e(".sidebar").parent('[class^="col-"]').width();
            e(".sidebar").width(s)
        }
    }

    function N() {
        var t = e(window).height();
        var n = e(window).height() + 1;
        if (t < e(".pp-contact .inner").height()) {
            e(".pp-contact").css({
                overflowY: "scroll",
                height: n
            });
            e(".open-pp-contact").click(function() {
                e("html").css("overflow", "hidden")
            });
            e(".close-contact").click(function() {
                e("html").css("overflow", "visible")
            })
        } else {
            e(".pp-contact").css({
                overflowY: "hidden",
                height: "auto"
            });
            e(".open-pp-contact").click(function() {
                e("html").css("overflow", "visible")
            });
            e(".close-contact").click(function() {
                e("html").css("overflow", "visible")
            })
        }
    }

    function C() {
        e("#banner .bg-parallax").parallax("50%", .3);
        e(".about .bg-parallax").parallax("50%", .3);
        e(".client .bg-parallax").parallax("50%", .3);
        e(".work .bg-parallax").parallax("50%", .3);
        e(".andmore .bg-parallax").parallax("50%", .3);
        e(".service .bg-parallax").parallax("50%", .3);
        e(".team .bg-parallax").parallax("50%", .3);
        e(".funfact .bg-parallax").parallax("50%", .3);
        e(".blog-time .bg-parallax").parallax("50%", .3);
        e(".footer .bg-parallax").parallax("50%", .3)
    }
    e(window).load(function() {
        e(".preloader").animate({
            left: "100%"
        }, 1e3, "easeInOutExpo");
        if (e(".head-title .rotate").length) {
            var r = "flipCube",
                i = 4e3;
            if (n() == 9) {
                r = "fade";
                i = 2e3
            }
            if (n() == 10) {
                r = "fade"
            }
            e(".head-title .rotate").textrotator({
                animation: r,
                speed: i
            })
        }
        if (t()) {
            e(".home #header").addClass("header-anim");
            e(".home .navigation").addClass("nav-anim");
            e(".home .nav-open").addClass("nav-open-anim");
            e(".home .page-right-nav").addClass("page-right-nav-anim")
        }
        var s = e("#work-wrap");
        s.isotope();
        e("#filters a").click(function() {
            e(".select-filter").removeClass("select-filter");
            e(this).parent("li").addClass("select-filter");
            var t = e(this).attr("data-filter");
            e("#work-wrap").isotope({
                filter: t
            });
            return false
        });
        e(window).resize(function() {
            s.isotope()
        });
        e("#all").click()
    });
    var r = "custom_style";
    var i = [{
        featureType: "all",
        stylers: [{
            saturation: -100
        }, {
            gamma: .5
        }]
    }];
	
	
	
	
	
	
	
    e(window).resize(function() {
        m();
        v();
        g();
        y()
    }).trigger("resize");
    var b = e(".navigation");
    e("#page-wrap").prepend('<span class="nav-open"></span>');
    b.prepend('<span class="nav-close"></span>');
    var w = e(".nav-open");
    var E = e(".nav-close");
    w.on("click", function(t) {
        b.addClass("nav-open-add");
        e(this).css("opacity", "0");
        t.stopPropagation()
    });
    E.on("click", function() {
        b.removeClass("nav-open-add");
        w.css("opacity", "1")
    });
    e(".nav li a").on("click", function(t) {
        var n = e(this);
        e("html, body").stop().animate({
            scrollTop: e(n.attr("href")).offset().top
        }, 800, "easeInOutExpo");
        b.removeClass("nav-open-add");
        w.css("opacity", "1");
        t.preventDefault()
    });
    e("html").on("click", function() {
        b.removeClass("nav-open-add");
        w.css("opacity", "1")
    });
    b.on("click", function(e) {
        e.stopPropagation()
    });
    e(".cs-scroll").click(function() {
        e("html,body").animate({
            scrollTop: e("#about").offset().top
        }, 800, "easeInOutExpo");
        return false
    });
    e(".andmore-content .item").height(e(this).width());
    e(window).resize(function() {
        e(".andmore-content .item").height(e(this).width())
    });
    e(window).on("load", function() {
        S()
    });
    e(window).on("resize", function() {
        S()
    }).trigger("resize");
    if (e(".andmore-content").length) {
        e(".andmore-content .item p").appear(function() {
            var t = e(".countup", this).html();
            e(".countup", this).countTo({
                from: 0,
                to: t,
                speed: 2e3,
                refreshInterval: 50
            })
        })
    }
    e(".funfact-slider").owlCarousel({
        navigation: true,
        slideSpeed: 1e3,
        transitionStyle: "fadeUp",
        singleItem: true,
        pagination: false,
        navigationText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right "></i>']
    });
    e(".blog-time-slider").owlCarousel({
        autoPlay: 1e4,
        items: 4,
        itemsDesktop: [1199, 3],
        itemsDesktopSmall: [992, 2],
        itemsTablet: [767, 2],
        itemsTabletSmall: [600, 1],
        slideSpeed: 600,
        navigation: true,
        pagination: false
    });
    e(window).bind("resize load", function() {
        x()
    }).trigger("resize");
    e(".single-slider").owlCarousel({
        autoPlay: 1e4,
        items: 4,
        itemsDesktop: [1700, 3],
        itemsDesktopSmall: [1199, 2],
        itemsTablet: [992, 2],
        itemsTabletSmall: [600, 1],
        slideSpeed: 600,
        navigation: true,
        pagination: false,
        navigationText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right "></i>']
    });
    var T = e(".post-content-slider h4.title-slider").text();
    e(".post-content-slider .owl-buttons").prepend('<h4 class="title-slider">' + T + "</h4>");
    e(".pp-contact").prepend('<span class="close-contact"></span>');
    e(".open-pp-contact").on("click", function() {
        e(".pp-contact").addClass("open-contact-add")
    });
    e(".close-contact").on("click", function() {
        e(".pp-contact").removeClass("open-contact-add")
    });
    e("html").on("click", function() {
        e(".pp-contact").removeClass("open-contact-add")
    });
    e(".page-right-nav").on("click", function(e) {
        e.stopPropagation()
    });
    e(window).bind("resize load", function() {
        N()
    }).trigger("resize");
    if (e(".ajax-popup-link").length) {
        e(".ajax-popup-link").magnificPopup({
            type: "ajax",
            callbacks: {
                close: function() {
                    e(".pp-sidebar p").getNiceScroll().remove()
                }
            }
        })
    }
    if (e("#send-message-form").length > 0) {
        e("#send-message-form").validate({
            rules: {
                name: {
                    required: true,
                    minlength: 2
                },
                email: {
                    required: true,
                    email: true
                },
                message: {
                    required: true,
                    minlength: 10
                }
            },
            messages: {
                name: {
                    required: "Please enter your first name.",
                    minlength: e.format("At least {0} characters required.")
                },
                email: {
                    required: "Please enter your email.",
                    email: "Please enter a valid email."
                },
                message: {
                    required: "Please enter a message.",
                    minlength: e.format("At least {0} characters required.")
                }
            },
            submitHandler: function(t) {
                e("#submit-contact").html("Sending...");
                e(t).ajaxSubmit({
                    success: function(t, n, r, i) {
                        e("#contact-content").slideUp(600, function() {
                            e("#contact-content").html(t).slideDown(600)
                        })
                    }
                });
                return false
            }
        })
    }
    if (t()) {
        C()
    }
    e(window).bind("load", function() {
        C()
    })
	
	
	
	
	
		
})