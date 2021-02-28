$(document).ready(function() {
// alert("you are entering the city");
// alert("Get ready!");
$("#man").draggable()
$("#dog").draggable()
$("#man").hover(function(){
$("#dog").show();
});
$("#help").hover(function(){
$("#helpinstruction").show();
});

$("#invisible").click(function(){
$("#man").hide();
        });

    })
