var position = { row: 0, col: 0 };
var gridHeight = 5;
var gridWidth = 7;

$( document ).ready( function() {


  for (var i = 0; i < gridHeight; i++) {
    for (var j = 0; j < gridWidth; j++) {
      $("#gridBox").append("<div class='row-"+i+" col-"+j+" cell'></div>");
    };
    $("#gridBox").append("<br>");
  };

  $(".cell.row-"+position.row+".col-"+position.col).addClass("active");

  $( document ).keydown( function( event ) {
    if (37 <= event.which && event.which <= 40) {
      event.preventDefault()
      switch (event.which) {
        case 37: //left arrow
          if (position.col > 0) { position.col--};
          break;
        case 38: //up arrow
          if (position.row > 0) { position.row--};
          break;
        case 39: //right arrow
          if (position.col < gridWidth - 1 ) { position.col++};
          break;
        case 40: //down arrow
          if (position.row < gridHeight - 1 ) { position.row++};
          break;
      }
      $(".cell").removeClass("active");
      $(".cell.row-"+position.row+".col-"+position.col).addClass("active");
    };
  } );

  $( document ).keypress( function( event ) {
  $(".active").empty();
  $(".active").append(String.fromCharCode(event.which));

  } );

});

/*
THINGS TO WORK ON
make repository, host website
vectoring position of chacter entry
making active random color
capture delete key
grid size fills screen
center characters in div

MORE INTENSE WORK ON
resize divs to fit just character
be able to export by highlighting and copying or other export
*/