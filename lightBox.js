/**
 * Created by zy on 2017/11/23.
 */
"use strict";

function lightbBox(id){
    $("body").append(`
    <div id="lightboxMeng">
        <img src="" alt="" class="bigImg"/>
        <img src="images/close.png" class="close" alt=""/>
        <img src="images/toPre.png" class="left" alt=""/>
        <img src="images/toNext.png" class="right" alt=""/>
    </div>
    `)
    $("#lightboxMeng").hide();
    var xb;
    $("#"+id+" figure").each(function(index,dom){
        $(dom).click(function(){

            $("#lightboxMeng").show();
            $(".bigImg")[0].src=$(this).find("img")[0].src;
            xb=index;
            //console.log(this);
            //for(var i=0;i<$("#"+id+" figure").length;i++){
            //    if(this==$("#"+id+" figure")[i]){
            //         xb = i;
            //    }
            //}
        });
    })

    $(document).on("click",".close",function(){
        $("#lightboxMeng").hide();
    });

    $(document).on("click",".left",function(){
        if(xb==0){
            xb=$("#"+id+" figure").length
        }
        xb--;
        $(".bigImg")[0].src=$("#"+id+" figure>img")[xb].src;
    });
    $(document).on("click",".right",function(){
        //console.log("xb",xb);
        //console.log("length",$("#"+id+" figure").length);
        xb++;
        if(xb==$("#"+id+" figure").length){
            xb=0;
        }
        $(".bigImg")[0].src=$("#"+id+" figure>img")[xb].src;
        //console.log(xb);
    })
}

