
var runnerButton = document.getElementById("popupRunner");
var closeButton = document.getElementById("popupCloser");
var itemArray = ["","Chicken", "Yellow Onions", "Bell Pepper", "Fajita Seasoning", "Oil", "Sour Cream", "Salsa", "Lime", "Whole Wheat Tortillas"];
var selector = document.getElementById("add-ingredients-select");
var amountSelector = document.getElementById("amountSelector");

function popupRunner()
{
 document.getElementById('popup').style.visibility="visible";
 console.log("Button clicked");
 }

function popupCloser()
{
 document.getElementById('popup').style.visibility="hidden";
 document.getElementById('amountSelector').style.visibility="hidden";  
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
        document.getElementById('amountSelector').style.visibility="hidden";    
        document.getElementById("ingredient-type-text").innerHTML= "";
    }
    else if (selector.value == "Chicken")
    {        
        document.getElementById('amountSelector').style.visibility="visible";    
        document.getElementById("ingredient-type-text").innerHTML= "grams";
    }   
    else if (selector.value == "Yellow Onions"|| selector.value ==  "Bell Pepper"|| selector.value == "Lime"|| selector.value == "Whole Wheat Tortillas")
    {
        document.getElementById('amountSelector').style.visibility="visible"; 
        document.getElementById("ingredient-type-text").innerHTML= "pieces";
    }
    else if (selector.value == "Sour Cream")
    {
        document.getElementById('amountSelector').style.visibility="visible"; 
        document.getElementById("ingredient-type-text").innerHTML= "decilitres";
    }
    else if (selector.value == "Fajita Seasoning" || selector.value == "Salsa")
        {
            document.getElementById('amountSelector').style.visibility="visible"; 
            document.getElementById("ingredient-type-text").innerHTML= "packages";
        }
        else if (selector.value == "Oil")
        {
        document.getElementById('amountSelector').style.visibility="visible"; 
        document.getElementById("ingredient-type-text").innerHTML= ".";
    }


    //function revealAmountSelector

}

 function addIngredientsButton()
{
    // Create a list node.
var node = document.createElement("li");

// Create a text node

var textnode = document.createTextNode(selector.value + " " + amountSelector.value);

node.appendChild(textnode);
document.getElementById("storageIngredientsList").appendChild(node);
    console.log ("You are trying to add " + selector.value + amountSelector.value + " to the inventory");
    // Close down the popup
    popupCloser();


}


