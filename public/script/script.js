document.addEventListener("DOMContentLoaded", ready);
function ready()
{
    var containerBack = document.querySelector(".sign-in-container-background");
    if(containerBack)
    {
        containerBack.style.maxWidth = screen.availWidth;
    }
    
}
document.addEventListener("DOMContentLoaded", readyImgSlider);
function readyImgSlider()
{
    var containerBack = document.querySelector(".imageWidth");
    if(containerBack)
    {
        containerBack.style.maxWidth = screen.availWidth;
    }
    
}

document.addEventListener("DOMContentLoaded", readyNavBar);
function readyNavBar()
{
    document.querySelector(".navbar-width").style.maxWidth = screen.availWidth;
}
document.addEventListener("DOMContentLoaded", BtnSubmitReady);
function BtnSubmitReady()
{
    var BtnSubmitClick = document.querySelector(".btn-submit-click");

    if(BtnSubmitClick)
    {
        document.querySelector(".btn-submit-click").addEventListener("click",function()
        {
            alert("Your date is "+document.querySelector(".datepicker").value);
        });    
    }    
}


document.addEventListener("DOMContentLoaded", SliderReady);
function SliderReady()
{
    function ChangeImage(button,imgNameCurrent,imgNameNext)
    {
        button.addEventListener("click",function()
        {
            var slider = document.getElementById("Slider");
            var sliderClassName = slider.className;
            var newSliderClassName = "";
            sliderClassName.split(" ").forEach(function(element)
            { 
                if(element!=imgNameCurrent)
                {
                    newSliderClassName += element + " ";
                }
                 
            })
            slider.className = newSliderClassName;
            slider.className += imgNameNext;
              
        });
    }

    var BtnSliderLeft = document.querySelector(".btn-slider-left");
    if(BtnSliderLeft)
    {
        ChangeImage(BtnSliderLeft,"image"," image-1 ");
    }

    var BtnSliderRight = document.querySelector(".btn-slider-right");
    if(BtnSliderRight)
    {
        BtnSliderRight.addEventListener("click",function()
        {
            ChangeImage(BtnSliderRight,"image-1","image");             
        });
    }

}
