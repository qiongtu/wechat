
$(function(){

    $("#moments").click(
        function(){
            // $("#title-right-menu").toggle( )
            // $("#dynamic_moments").css({"display":"block"})
            $("#dynamic_moments").css({"left":"0px"})
            // $("#title_moments").css({"display":"flex"})
            $("#title_moments").css({"left":"0px"})

        }
    )

    $("#AAA").click(
        function(){
            $("#dynamic_moments").css({"left":"100%"})
            $("#title_moments").css({"left":"100%"})
        }
    )

    //
})
