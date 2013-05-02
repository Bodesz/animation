/**
 * js logo animation effects
 */
 
$(document).ready(function () {
    $("a.anim-logo").hover(function () {
        $(this).parent(".brand-log").children(".mouseover").children(".log").css({
            animation: "animElogOut 0.8s ease both",
            "-moz-animation": "animElogOut 0.8s ease both",
            "-webkit-animation": "animElogOut 0.8s ease both",
            "-o-animation": "animElogOut 0.8s ease both"
        });
        $(this).parent(".brand-log").children(".mouseover").children(".blackhead").css({
            animation: "animElog 0.8s ease both",
            "-moz-animation": "animElog 0.8s ease both",
            "-webkit-animation": "animElog 0.8s ease both",
            "-o-animation": "animElog 0.8s ease both"
        })
    }, function () {
        $(this).parent(".brand-log").children(".mouseover").children(".log").css({
            animation: "animElog 0.8s ease both",
            "-moz-animation": "animElog 0.8s ease both",
            "-webkit-animation": "animElog 0.8s ease both",
            "-o-animation": "animElog 0.8s ease both"
        });
        $(this).parent(".brand-log").children(".mouseover").children(".blackhead").css({
            animation: "animElogOut 0.8s ease both",
            "-moz-animation": "animElogOut 0.8s ease both",
            "-webkit-animation": "animElogOut 0.8s ease both",
            "-o-animation": "animElogOut 0.8s ease both"
        })
    })
})
