
var runnerButton = document.getElementById("popupRunner");
var closeButton = document.getElementById("popupCloser");

function popupRunner()
{
 document.getElementById('popup').style.visibility="visible";
 console.log("Button clicked");
 }

function popupCloser()
{
 document.getElementById('popup').style.visibility="hidden";
 console.log("CloseButton clicked");
}
//JS for changing text based on selection. 

function check()
{    
    console.log("Working!");
    var selector = document.getElementById("add-ingredients-select");
    console.log(selector.value);
}
var ingredientSelector = document.getElementById("add-ingredients-select");
console.log(ingredientSelector.name);