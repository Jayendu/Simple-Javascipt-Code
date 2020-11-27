var num1 = 10;
var num2 = 5;
var num3 = 100;

var discount1 = 10;
var discount2 = 25;

var speaker = 256000;
var smartphone = 195000;
var laptop = 312000;

var lg = "larger";
var sm = "smaller";
var eq = "equal";

var idArray = [
    document.getElementById("demo"),
    document.getElementById("demo1"),
    document.getElementById("demo2"),
    document.getElementById("demo3"),
    document.getElementById("demo4"),
    document.getElementById("demo5"),
    document.getElementById("demo6"),
    document.getElementById("demo7"),
    document.getElementById("demo8"),
    document.getElementById("demo9"),
]

var speak_dis = getPercentageOne(speaker, discount1, discount2);
var smart_dis = getPercentageTwo(smartphone, discount1, discount2)
var lap_dis = getPercentageThree(laptop, discount1, discount2)

function getPercentageOne(speaker, discount1, discount2){
    if(speaker >= 300000){
        speak_dis = speaker * discount1 / 100;
        return speak_dis;
    }else if(speaker < 300000){
        speak_dis = speaker * discount2 / 100;
        return speak_dis;
    }
}

function getPercentageTwo(smartphone, discount1, discount2){
    if(smartphone >= 300000){
        smart_dis = smartphone * discount1 / 100;
        return smart_dis;
    }else if(smartphone < 300000){
        smart_dis = smartphone * discount2 / 100;
        return smart_dis;
    }
}

function getPercentageThree(laptop, discount1, discount2){
    if(laptop >= 300000){
        lap_dis = laptop * discount1 / 100;
        return lap_dis;
    }else if(laptop < 300000){
        lap_dis = laptop * discount2 / 100;
    }
}

idArray[0].innerHTML = "speaker discount = " + speak_dis;
idArray[1].innerHTML = "smartphone discount = " + smart_dis;
idArray[2].innerHTML = "laptop discount = " + lap_dis;

var finalPriceSpeak = finalPriceOne(speaker, speak_dis);
var finalpriceSmart = finalPriceTwo(smartphone, smart_dis);
var finalPriceLap = finalPriceThree(laptop, lap_dis);

function finalPriceOne(speaker, speak_dis){
    finalPriceSpeak = speaker - speak_dis;
    return finalPriceSpeak;
}

function finalPriceTwo(smartphone, smart_dis){
    finalpriceSmart = smartphone - smart_dis;
    return finalpriceSmart;
}

function finalPriceThree(laptop, lap_dis){
    finalPriceLap = laptop - lap_dis;
    return finalPriceLap;
}

idArray[3].innerHTML = "speaker final Price = Rs." + finalPriceSpeak + "/=";
idArray[4].innerHTML = "smartphone final Price = Rs." + finalpriceSmart + "/=";
idArray[5].innerHTML = "laptop final Price = Rs." + finalPriceLap + "/=";

var numOneRes = numFunctionOne(num1, num2, num3);
var numTwoRes = numFunctionTwo(num1, num2, num3);
var numThreeRes = numFunctionThree(num1, num2, num3);

function numFunctionOne(num1, num2, num3){
    numOneRes = num1 / num2 * num2 / num3;
    return numOneRes;
}

function numFunctionTwo(num1, num2, num3){
    numTwoRes = num2 / num3 * num1 / num3;
    return numTwoRes;
}

function numFunctionThree(num1, num2, num3){
    numThreeRes = num3 / num2 * num2 / num1;
    return numThreeRes;
}

idArray[6].innerHTML = "Num Function 1 = " + numOneRes;
idArray[7].innerHTML = "Num Function 2 = " + numTwoRes;
idArray[8].innerHTML = "Num Function 3 = " + numThreeRes;

var multiOne = disMultiOne(speak_dis, numOneRes, numTwoRes);
var multiTwo = disMultiTwo(smart_dis, numOneRes, numTwoRes);
var multiThree = disMultiThree(lap_dis, numOneRes, numTwoRes);

function disMultiOne(speak_dis, numOneRes, numTwoRes){
    if(speak_dis >= 50000){
        multiOne = speak_dis * numOneRes;
        return multiOne; 
    }else{
        multiOne = speak_dis * numTwoRes;
        return multiOne;
    }
}

function disMultiTwo(smart_dis, numOneRes, numTwoRes){
    if(smart_dis >= 50000){
        multiTwo = smart_dis * numOneRes;
        return multiTwo;
    }else{
        multiTwo = smart_dis * numTwoRes;
        return multiTwo;
    }
}

function disMultiThree(lap_dis, numOneRes, numTwoRes){
    if(lap_dis >= 50000){
        multiThree = lap_dis * numOneRes;
        return multiThree;
    }else{
        multiThree = lap_dis * numTwoRes;
        return multiThree;
    }
}

var idArrayTwo = [
    document.getElementById("demo0.1"),
    document.getElementById("demo1.1"),
    document.getElementById("demo2.1"),
    document.getElementById("demo3.1"),
    document.getElementById("demo4.1"),
    document.getElementById("demo5.1"),
    document.getElementById("demo6.1"),
    document.getElementById("demo7.1"),
    document.getElementById("demo8.1"),
    document.getElementById("demo9.1"),
]

idArrayTwo[0].innerHTML = "Multi 1 = " + multiOne;
idArrayTwo[1].innerHTML = "Multi 2 = " + multiTwo;
idArrayTwo[2].innerHTML = "Multi 3 = " + multiThree;

var finalOne = finalFuncOne(finalPriceSpeak, multiOne);
var finalTwo = finalFuncTwo(finalpriceSmart, multiTwo);
var finalThree = finalFuncThree(finalPriceLap, multiThree);

function finalFuncOne(finalPriceSpeak, multiOne){
    finalOne = finalPriceSpeak + multiOne;
    return finalOne;
}

function finalFuncTwo(finalpriceSmart, multiTwo){
    finalTwo = finalpriceSmart + multiTwo;
    return finalTwo;
}

function finalFuncThree(finalPriceLap, multiThree){
    finalThree = finalPriceLap + multiThree;
    return finalThree;
}

idArrayTwo[3].innerHTML = "FINAL Speaker PRICE = Rs." + finalOne + "/=";
idArrayTwo[4].innerHTML = "FINAL Smartphone PRICE = Rs." + finalTwo + "/=";
idArrayTwo[5].innerHTML = "FINAL Laptop PRICE = Rs." + finalThree + "/=";
