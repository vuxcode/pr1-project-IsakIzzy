
var runnerButton = document.getElementById("popupRunner");
var closeButton = document.getElementById("popupCloser");
var itemArray = ["","Chicken", "Yellow Onions", "Bell Pepper", "Fajita Seasoning", "Oil", "Sour Cream", "Salsa", "Lime", "Whole Wheat Tortillas"];
let selector = document.getElementById("add-ingredients-select");

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
    console.log(selector.value);
    console.log(selector.length);
}

function updateText()
{
    if (selector == 1)
    {
        console.log("Chicken Selected");
    }
}

