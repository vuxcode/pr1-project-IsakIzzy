
var runnerButton = document.getElementById("popupRunner");
var closeButton = document.getElementById("popupCloser");
// The item array is currently not used. Maybe I should keep all the ingredients as a comment instead.
var itemArray = ["","Chicken", "Yellow Onions", "Bell Pepper", "Fajita Seasoning", "Oil", "Sour Cream", "Salsa", "Lime", "Whole Wheat Tortillas"];
var selector = document.getElementById("add-ingredients-select");
var amountSelector = document.getElementById("amountSelector");
var ingredientType= "";
// ADD A DELETE BUTTON
// var deleteItemButton = document.getElementById("deleteItemButton");


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
        // In order to get the ingredient type added to the inventory aswell, I decided to create a variable with the type, and let each else if statement be able to update that value before the information gets added to the inventory. It will be initialized by empty and created at the top. 
        ingredientType= "";
        
    }
    else if (selector.value == "Chicken" || selector.value == "Mayonnaise" || selector.value == "Lettuce" || selector.value == "Pickles" || selector.value == "Capers" || selector.value == "Dried Parsley")
    {        
        document.getElementById('amountSelector').style.visibility="visible";    
        document.getElementById("ingredient-type-text").innerHTML= "grams";
        ingredientType = "grams";
    }   
    else if (selector.value == "Yellow Onions"|| selector.value ==  "Bell Pepper"|| selector.value == "Lime"|| selector.value == "Whole Wheat Tortillas" || selector.value == "Fish Sticks" || selector.value == "Lemon" || selector.value == "Whole Wheat Hamburger Buns" || selector.value == "Hamburger Cheese")
    {
        document.getElementById('amountSelector').style.visibility="visible"; 
        document.getElementById("ingredient-type-text").innerHTML= "pieces";
        ingredientType = "pieces";
    }
    else if (selector.value == "Sour Cream")
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
        else if (selector.value == "Oil" || selector.value == "Worcestershire Sauce" || selector.value == "Sugar")
        {
        document.getElementById('amountSelector').style.visibility="visible"; 
        document.getElementById("ingredient-type-text").innerHTML= ".";
        ingredientType = "";
    }


    //function revealAmountSelector

}

 function addIngredientsButton()
{
    // Create a list node and a button.
var node = document.createElement("li");
var deleteItemButton = document.createElement("button");
// TRYING TO CREATE A ID FOR THE NEWLY CREATED BUTTON
// deleteItemButton.setAttribute("onclick") = "deleteItemButton"
// Create a text node

var textnode = document.createTextNode(selector.value + " " + amountSelector.value + " " + ingredientType);
deleteItemButton.innerHTML = "Remove";

node.appendChild(textnode);
document.getElementById("storageIngredientsList").appendChild(node);
deleteItemButton.classList.add("delete-item-button");
deleteItemButton.addEventListener("click", function()
{
    node.removeChild(textnode);
    deleteItemButton.remove();
});
node.appendChild(deleteItemButton);
deleteItemButton.classList.add("delete-item-button");
    // Close down the popup
    popupCloser();


}

// AS OF NOW, THIS DOES NOT WORK
/*function deleteItemsButton()
{
    console.log("Delete item button clicked");
}
*/



