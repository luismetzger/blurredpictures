function hidebox(){
$(".velo_opc-2").fadeOut(500);	
}
function getlistwork()
  {
	// alert();
	$.ajax({
        cahe: false,
        url: "portafolio.php",
        type: "POST",
        data: "ID=Photography",
        success: function(e) {
            $("#list-work").html(e);
            gridMyWork(300);
            $("#list-work").css("width", $(window).width());
            $("#work .details").css("height", $("#list-work").height());
            $("#work .details").css("width", $(window).width());
            $("#work .details").css("right", -$(window).width());
            if ($(window).width() > 884) {
                var t = $("#list-work").height();
                var n = t / 2;
                var r = $(".round_developer").height();
                var i = r / 2;
                $(".round_content").css("top", n - i);
                var s = $("#list-work").width();
                var o = s / 2;
                var u = 425;
                $(".round_content").css("left", o - u)
            }
            if ($(window).width() < 883) {
                var s = $("#list-work").width();
                var a = $(".round_developer").width();
                var o = s / 2;
                var f = a / 2;
                $(".round_content").css("left", o - f);
                var t = $("#list-work").height();
                var r = 485;
                var l = t / 2;
                var i = r / 2;
                $(".round_content").css("width", $(".round_developer").width());
                $(".round_content").css("top", l - i)
            }
            $(".velo_opc").css("height", $("#list-work").height());
            $(".velo_opc").css("width", $("#list-work").width());

                    var n = $("#work").offset();
                    var r = n.top;
                    var i = r - opc_nav;
                  /*  $("html,body").animate({
                        scrollTop: i
                    }, 1e3) */
					
			
        }         
    });
    $.ajax({
        cahe: false,
        url: "blog.php",
        type: "POST",
        data: "ID=blog",
        success: function(e) {
            /*setTimeout(function() {
             //  $(".blog-entrys .content").html(e);
                $(".loading").fadeOut("fast");
                $("#blog .blog-entrys .content").css("width", $(".entry").length * 345);
                $("#blog .blog-entrys").jScrollPane({
                    showArrows: true
                });
                $("#blog .entry").last().css("border-right", 0)
            }, 1e3)*/
        },
        beforeSend: function() {
            var e = Math.floor(Math.random() * (3 - 1 + 1)) + 1;
            $("#blog .loading").css("background-image", "url(../wp-content/themes/yolive/images/giphy" + e + ".gif)");
            $("#blog .loading").css("left", $("#blog").width() / 2 - 92);
            $("#blog .loading").css("top", $("#blog").height() / 2 - 92);
            $("#blog .loading").fadeIn("fast")
        }
    });
 
	  
  }
function gridMyWork(e) {
    var t = $(window).width();
    var n = 0;
    var r = $("div.highlights .item").size();
    var i = e;
    if ($(window).width() > 820) {
        var i = 300;
        var s = 200
    } else {
        var s = 100
    }
    for (var o = 1; o < r; o++) {
        var u = Math.floor(t / o);
        if (u >= s && u <= i) {
            n = u;
            break
        }
    }
    $(".item").css("height", n);
    $(".item").css("width", n)
}

function initialize() {
    var e = [{
        stylers: [{
            saturation: -100
        }, {
            weight: .6
        }, {
            invert_lightness: true
        }, {
            gamma: .9
        }]
    }, {
        featureType: "road.arterial",
        elementType: "geometry"
    }, {
        featureType: "poi.business",
        elementType: "labels",
        stylers: [{
            visibility: "off"
        }]
    }];
    var t = {
        zoom: 9,
        center: new google.maps.LatLng(39.739236, -104.990251),
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        disableDefaultUI: true,
        panControl: false,
        zoomControl: false,
        scaleControl: false,
        styles: e
    };
    //var n = new google.maps.Map(document.getElementById("map-canvas"), t)
}
var gridWidth = 300;
var opc_nav = 45;
var active_work = false;
$(document).ready(function() {
    function e(e) {
        $(e).each(function() {
            $("<img/>")[0].src = this
        })
    }
    e(["../wp-content/themes/yolive/images/giphy.gif", "../wp-content/themes/yolive/images/giphy.gif", "../wp-content/themes/yolive/images/giphy.gif", "../wp-content/themes/yolive/images/giphy.gif", "../wp-content/themes/yolive/images/giphy.gif", "../wp-content/themes/yolive/images/giphy.gif", "./wp-content/themes/yolive/images/ico_tw_hover.png", "./wp-content/themes/yolive/images/ico_menu.png", "./wp-content/themes/yolive/images/nav_right.png", "./wp-content/themes/yolive/images/nav_left.png", "./wp-content/themes/yolive/images/nav_close.png", "./wp-content/themes/yolive/images/bg_transp.png", "./wp-content/themes/yolive/images/bg_black.png", "./wp-content/themes/yolive/images/bg_work_2.png", "./wp-content/themes/yolive/images/ico_in_hover.png"]);
    if ($(window).width() >= 833) {
        opc_nav = 45
    } else {
        opc_nav = 0
    }
    if ($(window).width() < 820) {
        $("#blog").attr("ID", "blog-mobile");
        $(".var").attr("section", "#blog-mobile")
    } else {
        $(".var").attr("section", "#blog");
        $("#blog-mobile").attr("ID", "blog")
    }
    if ($(window).width() < 884) {
        $("#about").css("height", $(".text_about").height() + 30)
    }
    if ($(window).width() < 820) {
        $("#work .details").css("margin-right", -$(window).width());
        $("#work .details .ficha").empty()
    }

    if ($(window).height() > 400) {
        $("#home").css("height", $(window).height())
    }
    if ($(window).height() > 800) {
        $("#home").css("height", 800)
    }
    if ($(window).height() < 400) {
        $("#home").css("height", 800)
    }
    $("#home .logo").css("margin-top", $("#home").height() / 2 - $("#home .logo").height() / 2);
    $(".redes").css("left", $(window).width() / 2 - $(".redes").width() / 2);
    if ($(window).width() > 800) {
        $('#habla .form input[type="submit"]').live({
            mouseenter: function() {
                $('input[type="submit"]').css("background", "#fff");
                $('input[type="submit"]').css("color", "#000");
                $('input[type="submit"]').css("border-color", "#FFF")
            },
            mouseleave: function() {
                $('input[type="submit"]').css("background", "transparent");
                $('input[type="submit"]').css("color", "#FFF");
                $('input[type="submit"]').css("border-color", "#FFF")
            }
        })
    }
    $(".item").live({
        mouseenter: function() {
            $(".item .hover").css("height", $(this).height());
            $(".item .hover").css("width", $(this).width());
            $(this).find(".hover").stop(true, true).fadeIn(500)
        },
        mouseleave: function() {
            $(this).find(".hover").stop(true, true).fadeOut("slow")
        }
    });
    $("#blog .entry").live({
        mouseenter: function() {
            $(this).find(".hover").stop(true, true).fadeIn(500);
            $(this).css("color", "#fff")
        },
        mouseleave: function() {
            $(this).find(".hover").stop(true, true).fadeOut(500);
            $(this).css("color", "#000")
        }
    });
    $('input[type="text"],textarea').focus(function() {
        if ($(this).val() == "NAME:" || $(this).val() == "E-MAIL:" || $(this).val() == "SUBJECT:" || $(this).val() == "MESSAGE:") {
            $(this).val("")
        }
    });
    $('input[type="text"],textarea').focusout(function() {
        if ($(this).val() == "") {
            if ($(this).attr("class") == "nombre") {
                $(this).val("NAME:")
            }
            if ($(this).attr("class") == "email") {
                $(this).val("E-MAIL:")
            }
            if ($(this).attr("class") == "asunto") {
                $(this).val("SUBJECT:")
            }
            if ($(this).attr("class") == "mensaje") {
                $(this).val("MESSAGE:")
            }
        }
    });
    $("textarea").focus(function() {
        $(this).stop(true, true).animate({
            height: 100
        }, 1e3)
    });
    $("textarea").focusout(function() {
        $(this).stop(true, true).animate({
            height: 30
        }, 1e3)
    });
    $(document).on("click", "#list-work .item", function() {
        var e = $(this).attr("id-nav");
        if ($(window).width() < 820) {
            window.location.href = "?p=" + e;
            return false
        }
        $("#work .details").css("display", "block");
        $("#work .details").css("height", $("#work").height());
        $("#work .details .bg_right").css("height", $("#work").height());
        $("#work .details .bg_right").css("width", 909);
        $("#work .details").css("width", $(window).width());
        $("#work .details").css("right", -$(window).width());
        var t = $("#work").offset();
        var n = t.top;
        var r = n - opc_nav;
        $("html,body").animate({
            scrollTop: r
        }, 1e3);
        $("#work .details").animate({
            "margin-right": $(window).width()
        }, 1e3, function() {
            $.ajax({
                cahe: false,
                url: "portafolio_detalle.php",
                type: "POST",
                data: "IDnav=" + e,
                success: function(e) {
                    setTimeout(function() {
                        $("#work .details .ficha").hide().html(e).fadeIn("slow");
                        $(".loading").fadeOut("fast")
                    }, 1e3)
                },
                beforeSend: function() {
                    var e = Math.floor(Math.random() * (3 - 1 + 1)) + 1;
                    $("#work .loading").css("background-image", "url(../wp-content/themes/yolive/images/giphy" + e + ".gif)");
                    $("#work .loading").css("left", $("#work .velo_opc").width() / 2 - 92);
                    $("#work .loading").css("top", $("#work .velo_opc").height() / 2 - 92);
                    $("#work .loading").fadeIn("fast")
                }
            })
        })
    });
    $(document).on("click", ".ico_menu", function() {
        if ($("#nav-float").is(":visible")) {
            $("#nav-float").css("display", "none")
        } else {
            $("#nav-float").css("display", "block")
        }
    });
    $(document).on("click", "#nav li a, #nav-float li a", function() {
        var e = $($(this).attr("section")).offset();
        var t = e.top;
        var n = t - opc_nav;
        $("html,body").animate({
            scrollTop: n
        }, 1e3)
    });
	$(".velo_opc-2").hide();
    $(document).on("click", ".round_content a", function() {
        active_work = true;
        $("#work .velo_opc a").fadeOut(500);
		$(".velo_opc-2").fadeIn("fast");
        var e = $(this).attr("id");
        $.ajax({
            url: "portafolio.php",
            type: "POST",
            data: "ID=" + e,
            cahe: false,
            success: function(t) {
                setTimeout(function() {
                    $("#work .velo_opc").fadeOut(500);
                    $("#list-work").html(t);
                    $(".loading").fadeOut("fast");
                    if (e == "Photography") {
                        gridWidth = 300
                    }
                    if (e == "Developer") {
                        gridWidth = 290
                    }
                    gridMyWork(gridWidth);
                    $("#work .opcs").fadeIn("fast");
                    var n = $("#work").offset();
                    var r = n.top;
                    var i = r - opc_nav;
                    $("html,body").animate({
                        scrollTop: i
                    }, 1e3)
                }, 1e3)
            },
            beforeSend: function() {
                var e = Math.floor(Math.random() * (3 - 1 + 1)) + 1;
                $("#work .loading").css("background-image", "url(../wp-content/themes/yolive/images/giphy" + e + ".gif)");
                $("#work .loading").css("left", $("#work .velo_opc").width() / 2 - 92);
                $("#work .loading").css("top", $("#work .velo_opc").height() / 2 - 92);
                $("#work .loading").fadeIn("fast")
            }
        })
    });
    $(document).on("click", ".opcs_pagination a", function() {
        var e = $(this).attr("IDnav");
        var t = $(this).attr("id");
        $.ajax({
            url: "portafolio/page/" + e + "/",
            type: "POST",
            data: "ID=" + t,
            cahe: false,
            success: function(e) {
                $("#work .velo_opc").fadeOut(500);
                $("#list-work").html(e);
                $(".loading").fadeOut("fast");
                if (t == "Photography") {
                    gridWidth = 300
                }
                if (t == "Developer") {
                    gridWidth = 290
                }
                gridMyWork(gridWidth);
                $("#work .opcs").fadeIn("fast");
                var n = $("#work").offset();
                var r = n.top;
                var i = r - opc_nav;
                $("html,body").animate({
                    scrollTop: i
                }, 1e3)
            },
            beforeSend: function() {
                $(".loading").fadeIn("fast")
            }
        })
    });
    $(document).on("click", "#blog .blog-single .close", function() {
        $("#blog .blog-entrys").css("width", $(window).width());
        $("#blog .blog-single-ajax").css("display", "none");
        $("#blog .blog-single-ajax").empty();
        $("#blog .blog-entrys").css("display", "block");
        $("#blog .blog-entrys").jScrollPane({
            showArrows: true
        }).data("jsp").destroy();
        $("#blog .blog-entrys").jScrollPane({
            showArrows: true
        }).data("jsp").reinitialise()
    });
    $(document).on("click", "#close", function() {
        $("#work .details").animate({
            "margin-right": -$(window).width()
        }, 1e3, function() {
            $("#work .details .ficha").empty();
            $("#work .details").css("display", "none")
        })
    });
    $(document).on("click", "#work .opcs", function() {
        $(".velo_opc").css("height", $("#list-work").height());
        $(".velo_opc").css("width", $("#list-work").width());
        $(".round_content").css("top", $("#list-work").height() / 2 - 200);
		/* For Portfolio Back Button*/
        $("#work .velo_opc").fadeIn("fast");
        $("#work .velo_opc a").fadeIn(500);
		$(".velo_opc-2").hide()
    })
});
$(window).resize(function() {
    if ($("#work .details").is(":hidden")) {
        $("#work .details").css("right", -$(window).width())
    }
    $("#work .details").css("width", $(window).width());
    if ($(window).width() < 820) {
        $("#work .details").css("margin-right", -$(window).width());
        $("#work .details .ficha").empty();
        $("#work .details").css("display", "none")
    }
    $("#blog-mobile").css("width", $(window).width());
    $("#blog-mobile .entry").css("width", $(window).width());
    $("#blog-mobile .blog-entrys .content").css("width", $(window).width());
    $("#blog-mobile .blog-entrys").css("width", $(window).width());
    $("#list-work").css("width", $(window).width());
    $("#habla").css("width", $(window).width());
    $("#habla #map-canvas").css("width", $(window).width());
    $("#habla .bg_static").css("width", $(window).width());
    $(".velo_opc").css("height", $("#list-work").height());
    $(".velo_opc").css("width", $("#list-work").width());
    if ($(window).width() < 884) {
        $("#about").css("height", $(".text_about").height() + 30)
    }
    $(".redes").css("left", $(window).width() / 2 - $(".redes").width() / 2);
    if ($(window).height() > 400) {
        $("#home").css("height", $(window).height())
    }
    if ($(window).height() > 800) {
        $("#home").css("height", 800)
    }
    if ($(window).height() < 400) {
        $("#home").css("height", 800)
    }
    $("#home .logo").css("margin-top", $("#home").height() / 2 - $("#home .logo").height() / 2);
    if ($(window).width() > 884) {
        var e = $("#list-work").height();
        var t = e / 2;
        var n = $(".round_developer").height();
        var r = n / 2;
        $(".round_content").css("top", t - r);
        var i = $("#list-work").width();
        var s = i / 2;
        var o = 425;
        $(".round_content").css("left", s - o);
        $("#work .velo_opc .round_content").css("width", 830)
    }
    if ($(window).width() < 883) {
        var i = $("#list-work").width();
        var u = $(".round_developer").width();
        var s = i / 2;
        var a = u / 2;
        $(".round_content").css("left", s - a);
        var e = $("#list-work").height();
        var n = 485;
        var f = e / 2;
        var r = n / 2;
        $(".round_content").css("width", $(".round_developer").width());
        $(".round_content").css("top", f - r)
    }
    gridMyWork(gridWidth);
    if ($(window).width() >= 833) {
        opc_nav = 45
    } else {
        opc_nav = 0
    }
    if ($(window).width() > 900) {
        $("#nav-float").css("display", "none")
    }
    if ($(window).width() < 800) {
        $("#blog .blog-entrys").jScrollPane({
            showArrows: true
        }).data("jsp").destroy();
        $("#blog").attr("id", "blog-mobile");
        $(".var").attr("section", "#blog-mobile")
    } else {
        $(".var").attr("section", "#blog");
        $("#blog-mobile").attr("ID", "blog");
        $("#blog .blog-entrys, #blog").css("width", $(window).width());
        $("#blog .entry").css("width", 300);
        $("#blog .blog-entrys .content").css("width", $(".entry").length * 345)
    }
    if ($("#blog .blog-entrys").is(":visible")) {
        $("#blog .blog-entrys").css("width", $(window).width());
        $("#blog .blog-entrys").jScrollPane({
            showArrows: true
        }).data("jsp").reinitialise()
    }
    if ($("#blog .blog-single").is(":visible")) {
        $("#blog .blog-single").css("width", $(window).width());
        $("#blog .blog-single").jScrollPane({
            showArrows: true
        }).data("jsp").reinitialise()
    }
});
$(window).scroll(function() {
    if ($(this).scrollTop() > 136) {
        $("#nav").css({
            position: "fixed",
            top: 0,
            right: 0
        });
        $("#nav").stop().animate({
            backgroundPosition: "0px 0px"
        });
        $("#nav li.separation a").stop().animate({
            backgroundPosition: "8px -58px"
        });
        $("#nav li.separation a").stop().animate({
            backgroundPosition: "8px -58px"
        });
        $("#nav li.separation a").attr("section", "#home")
    }
    if ($(this).scrollTop() == 0) {
        $("#blog .blog-single-ajax").fadeOut(0);
        $("#blog .blog-single-ajax").empty();
        $(".loading").fadeOut(0);
        $("#blog .blog-entrys").css("display", "block");
        $("#nav").css({
            position: "fixed",
            top: 0,
            right: 0
        });
        $("#nav").stop().animate({
            backgroundPosition: "0px -47px"
        });
        $("#nav li.separation a").stop().animate({
            backgroundPosition: "8px 20px"
        });
        $("#nav li.separation a").attr("section", "#work");
        $("#work .details").animate({
            "margin-right": -$(window).width()
        }, 800, function() {
            $("#work .details .ficha").empty();
            $("#work .details").css("display", "block");
            $(".velo_opc").css("height", $("#list-work").height());
            $(".velo_opc").css("width", $("#list-work").width());
            $(".round_content").css("top", $("#list-work").height() / 2 - 200);
            $("#work .velo_opc").fadeIn("fast");
            $("#work .velo_opc a").fadeIn(500);
            if (active_work == true) {
                $.ajax({
                    cahe: false,
                    url: "portafolio.php",
                    type: "POST",
                    data: "ID=Photography",
                    success: function(e) {
                        setTimeout(function() {
                            $("#list-work").html(e);
                            gridMyWork(300);
                            $("#list-work").css("width", $(window).width());
                            $("#work .details").css("height", $("#list-work").height());
                            $("#work .details").css("width", $(window).width());
                            $("#work .details").css("right", -$(window).width());
                            if ($(window).width() > 884) {
                                var t = $("#list-work").height();
                                var n = t / 2;
                                var r = $(".round_developer").height();
                                var i = r / 2;
                                $(".round_content").css("top", n - i);
                                var s = $("#list-work").width();
                                var o = s / 2;
                                var u = 425;
                                $(".round_content").css("left", o - u)
                            }
                            if ($(window).width() < 883) {
                                var s = $("#list-work").width();
                                var a = $(".round_developer").width();
                                var o = s / 2;
                                var f = a / 2;
                                $(".round_content").css("left", o - f);
                                var t = $("#list-work").height();
                                var r = 485;
                                var l = t / 2;
                                var i = r / 2;
                                $(".round_content").css("width", $(".round_developer").width());
                                $(".round_content").css("top", l - i)
                            }
                            active_work = false
                        }, 1e3)
                    }
                })
            }
            $("#hablame")[0].reset();
            $("#button").attr("value", "SEND");
            $("#button").css("border-color", "#fff");
            $(".error").html("");
            $("input[type='text'], textarea").css("border-bottom-color", "#fff");
            $('input[type="submit"]').css("color", "#fff")
        })
    }
});
jQuery(function(e) {
    function n() {
        if (t.animate == true) {
            if (e(t.el + " p").length > 0) {
                e(t.el).children("p").fadeOut(500, function() {
                    e(this).parent(0).empty().append('<p style="display: none;">' + t.items[t.count] + "</p>").children("p").fadeIn(500)
                })
            } else {
                e(t.el).empty().append('<p style="display: none;">' + t.items[t.count] + "</p>").children("p").fadeIn(750)
            }
        } else {
            e(t.el).empty().append("<p>" + t.items[t.count] + "</p>")
        }
        setTimeout(function() {
            if (t.count == t.total) {
                t.count = 0
            } else {
                t.count++
            }
            n()
        }, t.delay)
    }
    var t = {
        el: ".twitter-stream",
        items: new Array,
        count: 0,
        total: -1,
        delay: 6e3,
        animate: true
    };
    e(t.el + " p").each(function(n) {
        t.items[n] = e(this).html();
        t.total++
    }).hide();
    n()
});
google.maps.event.addDomListener(window, "load", initialize)
