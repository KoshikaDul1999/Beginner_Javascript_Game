for(var i=25; i>0; i--){
    let slider = document.createElement("div");
    slider.setAttribute("class","slider animate");
    slider.setAttribute("id","slider"+i);
    document.getElementsById("game").append(slider);
}
var slideWidth = 400;
function stopSliding(slider){
    var sliderCurrent = document.getElementById("slider".concat(slider));
    var sliderAbove = document.getElementById("slider".concat(slider+1));
    if(slider==1){
        var sliderBelow = sliderCurrent;
    }else{
        var sliderBelow = document.getElementById("slider".concat(slider-1));
    }
    var left = window.getComputedStyle(sliderCurrent).getPropertyValue("left");
    sliderCurrent.classList.remove("animate");
    sliderCurrent.style.left = left;
    var width = parseInt.getComputedStyle(sliderCurrent).getPropertyValue("width");
    var leftBelow = parseInt.getComputedStyle(sliderBelow).getPropertyValue("left");
    left = parseInt(left);
    var difference = left - leftBelow;
    var absDiffernce = Math.abs(difference);
    if(difference>width||difference<-width){
        var score = "Score: ".concat(slider-1);
        alert(score);
        Location.reload();
    }
    if(difference<0){
        left = left + absDiffernce;
    }else{
        left = left - difference;
        sliderCurrent.style.left = left.toString().concat("px");
    }
    var offset = (width - absDiffernce).toString().concat("px");
    sliderCurrent.style.width = offset;
    sliderAbove.style.width = offset;
    sliderAbove.style.visibility = "visible";
    slideWidth = slideWidth + absDiffernce;
    document.documentElement.style.setProperty('--width',slideWidth)
    var onclick = "stopSliding(" + (slider+1) + ")";
    document.getElementById("btn").setAttribute("onclick", onclick);
}