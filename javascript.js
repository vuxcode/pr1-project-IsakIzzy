
var runnerButton = document.getElementById("popupRunner");
var closeButton = document.getElementById("popupCloser");
var itemArray = ["","Chicken", "Yellow Onions", "Bell Pepper", "Fajita Seasoning", "Oil", "Sour Cream", "Salsa", "Lime", "Whole Wheat Tortillas"];
const selector = document.getElementById("add-ingredients-select");
var amountSelector = document.getElementById("amount-selector");

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
    // Depending on which selection the user makes, I want the text to change into the most reasonable value for counting the product.  
    if (selector.value == "")
    {
        document.getElementById('amount-selector').style.visibility="hidden";    
        console.log("Working?");
        document.getElementById("empty").innerHTML = "";
    }
    else if (selector.value == "Chicken")
    {
        document.getElementById('amount-selector').style.visibility="visible";    
        document.getElementById("grams").innerHTML = "grams";
    }   
    else if (selector.value == "Yellow Onions", "Bell Pepper", "Lime")
    {
        document.getElementById("pieces").innerHTML = "pieces";
    }

    //function revealAmountSelector

}

