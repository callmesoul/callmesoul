/**
 * Created by CallMeSoul on 2015/9/13.
 */
$(document).ready(function(){
    $("#top").click(function(){
        $("html,body").animate({scrollTop:0},200)
    })
    $(".retrun-list").click(function(){
        history.back(-1);
    })
})