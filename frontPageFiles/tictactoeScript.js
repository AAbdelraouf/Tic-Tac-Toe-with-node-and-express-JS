$(document).ready(function()
{       
            // About the game button //
            $('#theAboutButton').on('click', function(){
                location.href = 'https://tictactogame.herokuapp.com/about'
               })
            
            // Board game message on top of the table //
            function gameMessage(parameterMsg)
            {
                $("#boardmessage").text(parameterMsg)
            };

            // two variables to determine turns//
            var player = 1;
            var turnChar = "x"            

            // on click event for the boxes //
            $('.square').on('click', function(){
            var squareSelected = $(this);
              
            // if x wins  //    
            if (lookForWinner("x") ){ 
                gameMessage("x already won, start over")    
            }
            // if o wins  //
            else if (lookForWinner("o")){
                gameMessage("o already won, start over")
            }
            // if box is empty //
            else if (squareSelected.text() !== "" )
            {
                $('.square').css('border-color', null);
                $(this).css({"border-color": "lightcoral", "border-width":"2px", "border-style":"solid"});
                $('#boardmessage').css('color', 'lightcoral');
                gameMessage("Box occupied");   
            }
 
            // implementing letter 'x' in empty boxes //
            else if (player === 1){
                        squareSelected.text(turnChar);
                        $('#boardmessage').css('color', 'lightblue');
                        $('.square').css('border-color', null)
                        gameMessage("now is o's turn");
                        squareSelected.css("background-color", 'lightgreen');
                        squareSelected.css("color", 'white');

                        if (lookForWinner("x"))
                        {
                            turnChar = null;
                            $('#resetButton').css('background-color', 'lightseagreen');
                            $('#resetButton').css('color', 'white');
                            gameMessage("x has won");
                            $('#boardmessage').css('color', 'white');
                            $('#boardmessage').css('background-color', 'lightgreen');
                        }
                        else{
                            player =2;
                            turnChar = "o"
                        }}
                    
               // switching from letter  "x" to  letter "o" //
                else if (player === 2){
                    squareSelected.text(turnChar);
                    $('#boardmessage').css('color', 'lightgreen');
                    $('.square').css('border-color', '');
                    gameMessage("now is x's turn");
                    squareSelected.css("background-color", 'lightblue');
                    squareSelected.css("color", 'white');
                    
                    if (lookForWinner("o"))
                    {
                        turnChar = null;
                        $('#resetButton').css('background-color', 'lightseagreen');
                        $('#resetButton').css('color', 'white');
                        $('#boardmessage').css('color', 'white');
                        $('#boardmessage').css('background-color', 'lightblue');
                        gameMessage("o has won");
                    }
                    else{
                        player =1;
                        turnChar = "x"
                    }}
                // now back to "x" //
                else {
                    squareSelected.text("x");
                    gameMessage("now is o's turn")
                    squareSelected.css("background-color", 'lightgreen');}
               drawGameScenerio();
            
              // Draw game functionality //
              function drawGameScenerio(){
                 for (drawLoop = 0; drawLoop <= $('.square').length; drawLoop++)
                     if (
                         $('#square1').text() !== "" &&
                         $('#square2').text() !== "" &&
                         $('#square3').text() !== "" &&
                         $('#square4').text() !== "" &&
                         $('#square5').text() !== "" &&
                         $('#square6').text() !== "" &&
                         $('#square7').text() !== "" &&
                         $('#square8').text() !== "" &&
                         $('#square9').text() !== "" 
                         )
                         {
                             if (lookForWinner("x"))
                             {
                                gameMessage("x has won");
                                }
                             else if (lookForWinner("o"))
                             {
                                gameMessage("o has won");
                             }
                             else {
                                $('#boardmessage').css('color', 'lightcoral');
                                gameMessage("Draw game");
                                $('#boardmessage').css('background-color', 'lightcoral');
                                $('#boardmessage').css('color', 'white');
                                $('#resetButton').css('background-color','lightcoral'); 
                                $('#resetButton').css('color','white');
                                $('.square').css('border-color', '');
                             }};}

             // Reset button functionality
             $("#resetButton").click(function(){
                for (resetLoop = 0; resetLoop <= $('.square').length; resetLoop++)
                {
                $(".square").text(null);
                $('.square').css("background-color", '');
                location.reload(true);
                }
            });}) 
           
            // checking for winner function //
             function lookForWinner (letter)
             {
             for (startLoop = 0; startLoop <= $(".square").length; startLoop++)
             {
                 if (
                     $("#square4").text() == (letter) &&  $("#square5").text() == (letter) &&  $("#square6").text() == (letter) ||
                     $("#square7").text() == (letter) &&  $("#square8").text() == (letter) &&  $("#square9").text() == (letter) ||
                     $("#square1").text() == (letter) &&  $("#square4").text() == (letter) &&  $("#square7").text() == (letter) ||
                     $("#square2").text() == (letter) &&  $("#square5").text() == (letter) &&  $("#square8").text() == (letter) ||
                     $("#square3").text() == (letter) &&  $("#square6").text() == (letter) &&  $("#square9").text() == (letter) ||
                     $("#square1").text() == (letter) &&  $("#square2").text() == (letter) &&  $("#square3").text() == (letter) ||
                     $("#square1").text() == (letter) &&  $("#square5").text() == (letter) &&  $("#square9").text() == (letter) ||
                     $("#square3").text() == (letter) &&  $("#square5").text() == (letter) &&  $("#square7").text() == (letter) 
                      )
                     {
                         return true;
                     }
                 else 
                 {
                     return false;
                 }
                 }};
        });
