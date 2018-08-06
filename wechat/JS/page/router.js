$(function(){

    $("#title").load("../../page/title/title.html")
    $("#dynamic").load("../../page/dynamic/wechat_dy.html")



    //切换
    $(".wechat_icon").click(function() {

        $("#dynamic").load($(this).data("page"))
        $("#title").load($(this).data("title"))


    })


})