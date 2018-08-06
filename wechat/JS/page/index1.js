

$(function(){


    // $("#dynamic").load("dynamic2.html")
    // $("#title").load("title2.html")



    //改变标签页
    function loadpage(obj){
        $("#dynamic").load(obj.data("dynamicpage"))
        $("#title").load(obj.data("titlepage"))
    }

    function setpage1(pagestat){
        if(pagestat==1){
            $("#A").css({"background-image":"url(../../img/-8个图标/message-icon-press.svg"})
            $("#AA").css({"color":"rgb(82,169,54)"})
        }else{
            $("#A").css({"background-image":"url(../../img/-8个图标/message-icon.svg)"})
            $("#AA").css({"color":"#8a8a8a"})
        }
    }
    function setpage2(pagestat){
        if(pagestat==1){
            $("#B").css({"background-image":"url(../../img/-8个图标/namebook-icon-press.svg)"})
            $("#BB").css({"color":"rgb(82,169,54)"})
        }else{
            $("#B").css({"background-image":"url(../../img/-8个图标/namebook-icon.svg)"})
            $("#BB").css({"color":"#8a8a8a"})
        }
    }

    function setpage3(pagestat){
        if(pagestat==1){
            $("#C").css({"background-image":"url(../../img/-8个图标/discovery-icon-press.svg"})
            $("#CC").css({"color":"rgb(82,169,54)"})
        }else{
            $("#C").css({"background-image":"url(../../img/-8个图标/discovery-icon.svg)"})
            $("#CC").css({"color":"#8a8a8a"})
        }
    }

    function setpage4(pagestat){
        if(pagestat==1){
            $("#D").css({"background-image":"url(../../img/我3.svg)"})
            $("#DD").css({"color":"rgb(82,169,54)"})
        }else{
            $("#D").css({"background-image":"url(../../img/我.svg)"})
            $("#DD").css({"color":"#8a8a8a"})
        }
    }

    //点击menu，改变颜色

    // 点击微信
    $("#A").click(
        function(){
            setpage1(1)
            setpage2(0)
            setpage3(0)
            setpage4(0)
            loadpage($(this))
        }
    )


    //点击通讯录
    $("#B").click(
        function(){
            setpage1(0)
            setpage2(1)
            setpage3(0)
            setpage4(0)
            loadpage($(this))
        }
    )
    //点击发现

    $("#C").click(
        function(){
            setpage1(0)
            setpage2(0)
            setpage3(1)
            setpage4(0)
            loadpage($(this))
        }
    )
    //点击我
    $("#D").click(
        function(){
            setpage1(0)
            setpage2(0)
            setpage3(0)
            setpage4(1)
            loadpage($(this))
        }
    )

    //打开页面直接点击我
    // alert($("#namebook-icon"))
    // $("#namebook-icon").click();

    //-----------------end
    }
)