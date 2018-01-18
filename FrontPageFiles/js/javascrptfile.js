
$(document).ready(function(){    
// hidding the about paragraph page //
$('#theAboutParagraph').hide()
    
// The about page function //
function theAboutbuttonAnimation(){
    var switchTurns = true;    
    $('#theAboutButton').on('click', function(){
    if (switchTurns == true){
    $("#wholeSection").fadeOut();
    $('#theAboutParagraph').fadeIn();
    $("#h1Message").html('About the Measurement conversion');
    $('#theAboutButton').html('< Go Back');
    $('#theAboutButton').css({backgroundColor: 'wheat'});
    $('#h1Message').css({color: 'wheat'});
    switchTurns = false;}
    
else if (switchTurns == false){
    $("#wholeSection").fadeIn();
    $('#theAboutParagraph').fadeOut();
    $("#h1Message").html('Welcome to WLTS Measurment converter site');
    $('#theAboutButton').html('About >');
    $('#theAboutButton').css({backgroundColor: '#A8F72B'});
    $('#h1Message').css({color: '#46DF46'});
    switchTurns = true;}
    })};
    theAboutbuttonAnimation();

// switching views function //
function switchViewColors(buttonId, backgroundColor, colorCode){
    return  $(buttonId).css(backgroundColor, colorCode);
};

// Board Message controll //
function changeTexts(textId, boardText){
   return $(textId).text(boardText);
}; 

function temperatureButtonFormula(){
// setting the colors and texts when hovered over the  weight button //
    switchViewColors('#temperatureId','background-color', '#A8F72B');  
    switchViewColors('#mainSection', 'background-color', '#A8F72B');
    switchViewColors('#speedId', 'background-color', 'lightgray');
    switchViewColors('#weightId', 'background-color', 'lightgray');
    switchViewColors('#lengthId','background-color', 'lightgray');  
    switchViewColors('#h1Message').css('color', '#50c878');
    switchViewColors('#subHeader').css('color', '#50c878');
    switchViewColors('#leftInputLabel').css('color', '#50c878');
    switchViewColors('#middleInputLabel').css('color', '#50c878');
    switchViewColors('#rightInputLabel').css('color', '#50c878');
    changeTexts('#boardMessage', 'Temperature converter');
    changeTexts('#leftInputLabel', 'Fahrenheit');
    changeTexts('#middleInputLabel', 'Celcius');
    changeTexts('#rightInputLabel', 'Kelvin');
    $('#leftInput').val(null);
    $('#centerInput').val(null);
    $('#rightInput').val(null);
    $('#theAboutButton').css({backgroundColor: '#A8F72B'});

    // implementing the math formula for Weight conversion from Fahrenheit to Celsius and Kelvin //
    $('#leftInput').on('input', function(){
    fahrenheitInputValue = $('#leftInput').val();
    $('#centerInput').val((fahrenheitInputValue-32)/1.8);
    $('#rightInput').val(((fahrenheitInputValue-32)/1.8)+273.15);
    })
// implementing the math formula for Weight conversion from Celsius to Fahrenheit and Kelvin //
    $('#centerInput').on('input', function(){
    celsiusInputValue = $('#centerInput').val();
    $('#leftInput').val((celsiusInputValue*1.8)+32);
    $('#rightInput').val(celsiusInputValue+273.15);
    })
// implementing the math formula for Weight conversion from Kelvin to Celsius and Fahrenheit //
    $('#rightInput').on('input', function(){
    kelvinInputValue = $('#rightInput').val();
    $('#centerInput').val(kelvinInputValue-273.15);
    $('#leftInput').val(((kelvinInputValue-273.15)*1.8)+32);
    })};
        
// When hovered over the Temperature button // 
    function hoverOverTemperatureButton(){
    $('#temperatureId').hover(function(){
    temperatureButtonFormula();
    });}

// calling the two Temperature functions above //
    temperatureButtonFormula();
    hoverOverTemperatureButton();

// When hovered over the Weight button // 
    function hoverOverWeightButton(){
    $('#weightId').hover(function(){
// setting the colors and texts when hovered over the  weight button //
    switchViewColors('#weightId','background-color', '#5F7C8C');  
    switchViewColors('#mainSection', 'background-color', '#5F7C8C');
    switchViewColors('#speedId', 'background-color', 'lightgray');
    switchViewColors('#lengthId', 'background-color', 'lightgray');
    switchViewColors('#temperatureId', 'background-color', 'lightgray');
    switchViewColors('#h1Message').css('color', '#5F7C8C');
    switchViewColors('#subHeader').css('color', '#5F7C8C');
    switchViewColors('#leftInputLabel').css('color', '#5F7C8C');
    switchViewColors('#middleInputLabel').css('color', '#5F7C8C');
    switchViewColors('#rightInputLabel').css('color', '#5F7C8C');
    changeTexts('#boardMessage', 'Weight converter');
    changeTexts('#leftInputLabel', 'Pounds');
    changeTexts('#middleInputLabel', 'Kilograms');
    changeTexts('#rightInputLabel', 'Ounces');
    $('#leftInput').val(null);
    $('#centerInput').val(null);
    $('#rightInput').val(null);
    $('#theAboutButton').css({backgroundColor: '#5F7C8C'});

// implementing the math formula for Weight conversion from Pounds to Kilograms and Ounces //
    $('#leftInput').on('input', function(){
    poundsInputValue = $('#leftInput').val();
    $('#centerInput').val(poundsInputValue/2.2046);
    $('#rightInput').val(poundsInputValue*16);})
// implementing the math formula formula for Weight from Kilograms to Pounds and Ounces //
    $('#centerInput').on('input', function(){
    kilogramsInputValue = $('#centerInput').val();
    $('#leftInput').val(kilogramsInputValue*2.2046)
    $('#rightInput').val(kilogramsInputValue*35.274)
                    })
// implementing the math formula formula for Weight from Ounces to Pounds and Kilograms //
    $('#rightInput').on('input', function(){
    ouncesInputValue = $('#rightInput').val();
    $('#leftInput').val(ouncesInputValue*0.0625);
    $('#centerInput').val(ouncesInputValue/35.274);
    })})};
    hoverOverWeightButton();
            
// When hovered over the Speed button //
    function hoverOverSpeedButton(){
    $('#speedId').hover(function(){
    switchViewColors('#speedId','background-color', '#2C89DC');  
    switchViewColors('#mainSection', 'background-color', '#2C89DC');
    switchViewColors('#temperatureId', 'background-color', 'lightgray');
    switchViewColors('#weightId', 'background-color', 'lightgray');
    switchViewColors('#lengthId','background-color', 'lightgray');  
    switchViewColors('#h1Message').css('color', '#2C89DC');
    switchViewColors('#subHeader').css('color', '#2C89DC');
    switchViewColors('#leftInputLabel').css('color', '#2C89DC');
    switchViewColors('#middleInputLabel').css('color', '#2C89DC');
    switchViewColors('#rightInputLabel').css('color', '#2C89DC');
    changeTexts('#boardMessage', 'Speed converter');
    changeTexts('#leftInputLabel', 'MPH');
    changeTexts('#middleInputLabel', 'KPH');
    changeTexts('#rightInputLabel', 'Knots');
    $('#leftInput').val(null);
    $('#centerInput').val(null);
    $('#rightInput').val(null);
    $('#theAboutButton').css({backgroundColor: '#2C89DC'});

// implementing the math formula for Speed conversion from MPH to KPH and Knots //
    $('#leftInput').on('input', function(){
    mphInputValue = $('#leftInput').val();
    $('#centerInput').val(mphInputValue*1.609344);
    $('#rightInput').val(mphInputValue/1.150779)
    })

// implementing the math formula for Speed conversion from KPH to MPH and Knots //
    $('#centerInput').on('input', function(){
    kphInputValue = $('#centerInput').val();
    $('#leftInput').val(kphInputValue/1.609344);
    $('#rightInput').val(kphInputValue/1.852)
    })

// implementing the math formula for Speed conversion from Knots to KPH and MPH //
    $('#rightInput').on('input', function(){
    knotsInputValue = $('#rightInput').val();
    $('#centerInput').val(knotsInputValue*1.852);
    $('#leftInput').val(knotsInputValue*1.150779)
    })
    })};
    hoverOverSpeedButton();

// When hovered over the Length button //             
    function hoverOverLengthButton(){
    $('#lengthId').hover(function(){
    switchViewColors('#lengthId','background-color', '#E39B7D');  
    switchViewColors('#mainSection', 'background-color', '#E39B7D');
    switchViewColors('#speedId', 'background-color', 'lightgray');
    switchViewColors('#temperatureId', 'background-color', 'lightgray');
    switchViewColors('#h1Message').css('color', '#E39B7D');
    switchViewColors('#subHeader').css('color', '#E39B7D');
    switchViewColors('#leftInputLabel').css('color', '#E39B7D');
    switchViewColors('#middleInputLabel').css('color', '#E39B7D');
    switchViewColors('#rightInputLabel').css('color', '#E39B7D');
    changeTexts('#boardMessage', 'Length converter');
    changeTexts('#leftInputLabel', 'Feet');
    changeTexts('#middleInputLabel', 'Meters');
    changeTexts('#rightInputLabel', 'Inches');
    $('#leftInput').val(null);
    $('#centerInput').val(null);
    $('#rightInput').val(null);
    $('#theAboutButton').css({backgroundColor: '#E39B7D'});

// implementing the math formula for lenght conversion from Feet to Meters and Inches //
    $('#leftInput').on('input', function(){
    feetInputValue = $('#leftInput').val();
    $('#centerInput').val(feetInputValue/3.2808);
    $('#rightInput').val(feetInputValue*12)
    })

// implementing the math formula for lenght conversion from Meters to Feet and Inches //
    $('#centerInput').on('input', function(){
    meterInputValue = $('#centerInput').val();
    $('#leftInput').val(meterInputValue*3.2808);
    $('#rightInput').val(meterInputValue*39.370)
    })

// implementing the math formula for lenght conversion from Inches to Meter and Feet //
    $('#rightInput').on('input', function(){
    inchesInputValue = $('#rightInput').val();
    $('#centerInput').val(inchesInputValue/39.370);
    $('#leftInput').val(inchesInputValue*0.083333)
    })})};
    hoverOverLengthButton();        
});
