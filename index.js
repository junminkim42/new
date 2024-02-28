$(document).ready(function(){
    $(".btn2>li").click(function(){
        let list = $(this).index();
        $(".btn2>li").removeClass("on");
        $(".btn2>li").eq(list).addClass("on");

        let book=$(this).index();
        $(".article>ul").removeClass("off");
        $(".article>ul").eq(book).addClass("off");

    });

    $(".carousel2>.l_btn").click(function(){
        $(".carousel2>.tour").stop().animate({"margin-left":"-180px"},function(){
            $(".carousel2>.tour>li").last().prependTo(".carousel2>.tour");
            $(".carousel2>.tour").css({"margin-left":"-630px"});
        });
    });
    $(".carousel2>.r_btn").click(function(){
        $(".carousel2>.tour").stop().animate({"margin-left":"-1080px"},function(){
            $(".carousel2>.tour>li").first().appendTo(".carousel2>.tour");
            $(".carousel2>.tour").css({"margin-left":"-630px"});
        });
    });
    setInterval(function(){
        $(".carousel2>.tour").stop().animate({"margin-left":"-1080px"},1000,function(){
            $(".carousel2>.tour>li").first().appendTo(".carousel2>.tour");
            $(".carousel2>.tour").css({"margin-left":"-630px"});
        });
    }, 4000);



    $(".navigation_icons>li").mouseenter(function(){
        $(".navigation_icons>li>div").css({"transform":"translateX:10px"});
    })

    // $(".events").click(function(){
    //     $("#modal").stop().fadeIn(200);
    // });
    // $("#modal").click(function(){
    //     $("#modal").stop().fadeOut(200);
    // });

    let i = 0;
    let count = $(".panel>li").length;

    $(".m_btn>li").click(function(){
        i = $(this).index();
        $(".m_btn>li").removeClass("ok");
        $(".m_btn>li").eq(i).addClass("ok");

        $(".panel>li").stop().fadeOut();
        $(".panel>li").eq(i).stop().fadeIn();
    });

    setInterval(function(){
        if(i == count-1){
            i = 0;
        }else{
            i++;
        }
        $(".m_btn>li").removeClass("ok");
        $(".m_btn>li").eq(i).addClass("ok");

        $(".panel>li").stop().fadeOut(1000);
        $(".panel>li").eq(i).stop().fadeIn(1000);
    }, 5000);

    // let pos1 = $("#main").offset().top-72;
    // let pos2 = $("#tour_reserv").offset().top-72;
    // let pos3 = $("#travel_news").offset().top-72;
    // let pos4 = $("#about_us").offset().top-72;
    // let pos5 = $("#festival").offset().top-72;

    // $(window).scroll(function(){
    //     let scroll = $(this).scrollTop();

    //     $(".number>li>a").removeClass("on")
    //     if(scroll>=pos1 && scroll<=pos2){
    //         $(".number>li").eq(0).children("a").addClass("on");
    //     }else if(scroll>=pos2 && scroll<=pos3){
    //         $(".number>li").eq(1).find("a").addClass("on");
    //     }else if(scroll>=pos3 && scroll<=pos4){
    //         $(".number>li").eq(2).find("a").addClass("on");
    //     }else if(scroll>=pos4 && scroll<=pos5){
    //         $(".number>li").eq(3).find("a").addClass("on");
    //     }else if(scroll>=pos5){
    //         $(".number>li").eq(4).find("a").addClass("on");
    //     }
    // });

    // $(".number>li>a").click(function(e){
    //     e.preventDefault();
    //     let above = $(this).attr("href");
    //     let distance = $(above).offset().top;

    //     $("html,body").stop().animate({"scrollTop":distance},400);
    //     $(".number>li>a span").eq(above).animate().css({"display":"block"});
    // });

    let pos1 = $("#main").offset().top;
let pos2 = $("#tour_reserv").offset().top;
let pos3 = $("#travel_news").offset().top;
let pos4 = $("#about_us").offset().top;
let pos5 = $("#festival").offset().top;

$(window).scroll(function(){
    let scroll = $(this).scrollTop();

    $(".number>li>a").removeClass("on")
    if(scroll >= pos1 && scroll <= pos2){
        $(".number>li").eq(0).children("a").addClass("on");
    } else if(scroll >= pos2 && scroll <= pos3){
        $(".number>li").eq(1).find("a").addClass("on");
    } else if(scroll >= pos3 && scroll <= pos4){
        $(".number>li").eq(2).find("a").addClass("on");
    } else if(scroll >= pos4 && scroll <= pos5){
        $(".number>li").eq(3).find("a").addClass("on");
    } else if(scroll >= pos5){
        $(".number>li").eq(4).find("a").addClass("on");
    }
});

    $(".number>li>a").click(function(e){
        e.preventDefault();
        let above = $(this).attr("href");
        let distance = $(above).offset().top; // 여기서 72px를 빼줍니다.

        $("html,body").stop().animate({"scrollTop":distance},400);
    });

    $(window).scroll(function () {
		if ($(this).scrollTop() >= 1000 && $(this).scrollTop() <= 3800) {
			$(".gotop").fadeIn(300);
		} else{
			$(".gotop").fadeOut(300);
		}
	});

    $(".gotop").click(function (event) {
		event.preventDefault();
		$('html, body').animate({ scrollTop: 0 }, 300);
	});

});