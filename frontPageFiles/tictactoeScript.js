$(document).ready(function()
{       
            // About the game section //
            var aboutTheGameButtonSwitch = 0;
            $('#theAboutButton').on('click', function(){
                if (aboutTheGameButtonSwitch == 0){
                    // switching from game section to about the game section //
                    $('#wholeSection').fadeOut();
                    
                    $("#theAboutParagraph" ).css({ fontSize: "25px", color: "whitesmoke", position: 'absolute', backgroundColor: 'lightseagreen'});
                    $("#theAboutParagraph" ).css({ padding: "100px"});
                    $('#theAboutParagraph').css({'height': '220px', 'width': '800px', 'top': '250px', 'left': '200px'});
                    $('#theAboutButton').text("<< Start playing");
                    $('#gameHeadeText').html("About the game");
                    $('#theAboutParagraph').append(" <div id='aboutTheParagraph'> You probably already know how to play Tic-Tac-Toe. It's a really simple game, right? That's what most people think. But if you really wrap your brain around it, you'll discover that Tic-Tac-Toe isn't quite as simple as you think! Tic-Tac -Toe (along with a lot of other games) involves looking ahead and trying to figure out what the person playing against you might do next. </div>");
                    aboutTheGameButtonSwitch = 1;  
                }
                // Switch back to display the game section //
                else if (aboutTheGameButtonSwitch == 1){   
                    $('#wholeSection').show()
                    location.reload(true);
                    $('#theAboutParagraph').css('display', 'none')
                    $('#theAboutButton').text("About the game >")
                    $('#theAboutParagraph').text(null)
                    aboutTheGameButtonSwitch = 0;
                }})
            
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
