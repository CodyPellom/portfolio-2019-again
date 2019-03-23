$('document').ready(function(){

    $('#blogToggle').hide();
    $('#workToggle').hide();
    $('#aboutToggle').hide();
   
   $('#navOff').mouseover(function(){
    $('#navOff').attr("src","../Symbols/MenuAnimate.gif");
    });
    
    $('#hoverArea').mouseover(
    function(){
        $('#fadeToggle').fadeOut();
        $('#fadeToggle').hide();
    });

    $('#hoverArea').mouseleave(
        function(){
        $('#fadeToggle').fadeIn();
        $('#fadeToggle').show();
    });

    $('#blogLink').mouseenter(function(){
        $('#blogToggle').fadeIn();
        $('#blogToggle').show();   
    });
    $('#blogLink').mouseleave(function(){
        $('#blogToggle').fadeOut();
        $('#blogToggle').hide();
    })
    $('#workLink').mouseenter(function(){
        $('#workToggle').fadeIn();
        $('#workToggle').show();
    })
    $('#workLink').mouseleave(function(){
        $('#workToggle').fadeOut();
        $('#workToggle').hide();
    })
    $('#aboutLink').mouseenter(function(){
        $('#aboutToggle').fadeIn();
        $('#aboutToggle').show();
    })
    $('#aboutLink').mouseleave(function(){
        $('#aboutToggle').fadeOut();
        $('#aboutToggle').hide();
    })
});

function showYCoordinate(event){
    var y = event.screenY;
    var coords = "Y Coordinate: "+ y
    document.getElementById("hoverArea").innerHTML = coords;
}
