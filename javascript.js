
// These are variables created here to be used for later.
var runnerButton = document.getElementById("popupRunner");
var closeButton = document.getElementById("popupCloser");
var selector = document.getElementById("add-ingredients-select");
var amountSelector = document.getElementById("amountSelector");
var ingredientType= "";

// This Event Listener is used for everytime the page gets loaded to be able to load all the saved ingredients from before.
document.addEventListener("DOMContentLoaded", (loadpage))

function loadpage()
{
    //console.log ("Page just loaded. The local storage is " + localStorage);

        var listOfIngredients = document.getElementById("add-ingredients-select");

        // This for loop, runs through the whole list of items. If the item exists in the local storage, it should be set to appear on screen every time the user loads the page, until the user removes the item from the local storage.
        for (var i = 1; i < listOfIngredients.length; i++)
        {
            var txt =listOfIngredients[i].text;
            var item = localStorage.getItem(txt);
            if (item != null)
                {
                    var ingredientAdded = (txt + " " +  item);
                    addIngredientsButton(ingredientAdded, txt);
                }
            else 
                {

                }
        }

}

// A function that runs when the user clicks on the "Add ingredients button" and another one for when the user closes the "window". It's all basically just a toggle between what the CSS is showing.
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
        // In order to get the ingredient type added to the inventory aswell, I decided to create a variable with the type, and let each else if statement be able to update that value before the information gets added to the inventory. It will be initialized by empty and created at the top. 
        ingredientType= "";
        
    }
    else if (selector.value == "Chicken" || selector.value == "Mayonnaise" || selector.value == "Lettuce" || selector.value == "Pickles" || selector.value == "Capers" || selector.value == "Dried Parsley" || selector.value == "Salmon" || selector.value == "Spinach"|| selector.value ==  "Parmesan Cheese" || selector.value ==  "Tagilatelle Pasta")
    {        
        document.getElementById('amountSelector').style.visibility="visible";    
        document.getElementById("ingredient-type-text").innerHTML= "grams";
        ingredientType = "grams";
    }   
    else if (selector.value == "Yellow Onions"|| selector.value ==  "Bell Pepper"|| selector.value == "Lime"|| selector.value == "Whole Wheat Tortillas" || selector.value == "Fish Sticks" || selector.value == "Lemon" || selector.value == "Whole Wheat Hamburger Buns" || selector.value == "Hamburger Cheese" || selector.value ==  "Garlic")
    {
        document.getElementById('amountSelector').style.visibility="visible"; 
        document.getElementById("ingredient-type-text").innerHTML= "pieces";
        ingredientType = "pieces";
    }
    else if (selector.value == "Sour Cream" || selector.value =="White Cooking Wine" || selector.value == "Cooking Cream")
    {
        document.getElementById('amountSelector').style.visibility="visible"; 
        document.getElementById("ingredient-type-text").innerHTML= "decilitres";
        ingredientType = "decilitres";
    }
    else if (selector.value == "Fajita Seasoning" || selector.value == "Salsa")
        {
            document.getElementById('amountSelector').style.visibility="visible"; 
            document.getElementById("ingredient-type-text").innerHTML= "packages";
            ingredientType = "packages";
        }
        else if (selector.value == "Oil" || selector.value == "Worcestershire Sauce" || selector.value == "Sugar" || selector.value == "Salt")
        {
        document.getElementById('amountSelector').style.visibility="visible"; 
        document.getElementById("ingredient-type-text").innerHTML= ".";
        ingredientType = "";
    }

}

function createIngredient()
{
    var ingredientAdded = (selector.value + " " + amountSelector.value + " " + ingredientType);
    addIngredientsButton(ingredientAdded, selector.value)
}

 function addIngredientsButton(ingredientAdded, removeButtonKey)
{
    // Create a list node and a button.
var node = document.createElement("li");
var deleteItemButton = document.createElement("button");
var textnode = document.createTextNode(ingredientAdded);
console.log(textnode);
// Save items to the local storage, where the selector value is the key to what item the user has added, also taking in the amount value and the ingredient type gets set as the keys value. You can see this under the Applications tab on the developers tools in selected web browser. 
localStorage.setItem(selector.value, amountSelector.value + " " + ingredientType);
deleteItemButton.innerHTML = "Remove";

node.appendChild(textnode);
document.getElementById("storageIngredientsList").appendChild(node);
deleteItemButton.classList.add("delete-item-button");
deleteItemButton.addEventListener("click", function()
{
    node.removeChild(textnode);
    deleteItemButton.remove();
    localStorage.removeItem(removeButtonKey);
});
node.appendChild(deleteItemButton);
deleteItemButton.classList.add("delete-item-button");
    // Close down the popup
    popupCloser();


}



