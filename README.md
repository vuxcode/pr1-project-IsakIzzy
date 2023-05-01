[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-8d59dc4de5201274e310e4c54b9627a8934c3b88527886e3b421487c677d23eb.svg)](https://classroom.github.com/a/9iUTyIJt)
[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-c66648af7eb3fe8bc4f294546bfd86ef473780cde1dea487d3c4ff354943c9ae.svg)](https://classroom.github.com/online_ide?assignment_repo_id=10702130&assignment_repo_type=AssignmentRepo)
# Project Instructions
Follow the instructions here: https://vuxcode.netlify.app/new/pr1/lessons/major-project-brief/

REMEMBER TO "COMMIT" YOUR CHANGES REGULARLY TO SHOW HOW YOU HAVE BUILT THIS PROJECT! 

The final program is not the goal! The aim of the project is to show how you have developed your program, the steps you have taken and the problems you have solved!

# Project Notes

> You can use this section of the file to keep notes about your project as you work on it.
4-08-23
I think I need to divide the site into three different sections. Left section, middle section and right section. The Left and Right sections should be equally large, the middle section however, should be a bit larger, since it has more text then the other ones. I think the left and right sections needs to be split up into two, vertically for the two different parts on each one. 

Maybe I use too many div classes now. But I like to use it a lot for organization. 

4-09-23
I need to add some content to divs for it to appear..
Now the divs are devided on different lines. Gotta get them to be next to each other. 
I think I have all the divs I need now. They just aren't lined up the way I want them to yet. 
Is Github gonna be able to save Swedish characters, or do I need to add something for it to work?
I figured that display:inline in the CSS for the three different main sections is what I was looking for.
I thought at least. It didn't work. Put it in the mains CSS. If I put it in the CSS for all the three main sections, it just removed all the background color..
Changing to inline-block kinda worked... but they aren't looking exactly like I wanted. They got some padding for some reason, which maybe makes sense so that text in different sections don't collide, but the middle section is a bit lower then the other two. 

I want the two side sections to cover 25 percent of the screen each, and that the middle section should cover 50 % of the screen. Putting that number in css didn't work like i wanted it to though. Perhapse I need flexbox or something for it to work.
Setting it to 49 percent worked.... must be because there are a small space between the divs... (will have to look into this a bit further later on.)

Margin 0 px on body in CSS?? 

There is something I still missing. When I make the window smaller, the right section places itself under the left section... this is't something I want. I want them to always be lined at the sides. Perhapse there could be that smaller sizes makes the user need to scroll to the sides to see the full page, rather then the sections moving positions. (On phones there should be a different design though, but that's not something I will prioritize for now.)
Tried margin auto. Didn't work.
4-10-23
Today I will try to get the functions for a timer down. 
I will try to look a bit at how a countdown in JS should work. Before that, I decided to calculate the user input into seconds. The user can still enter minutes, but the minutes will be calculated into seconds with simple math. Im not sure if this is what I need yet.
Found a method called setTimeout() that I think might be what Im looking for.

4-15-23:

Since the project is getting a bit larger now, and Im planing to expand with more pages, I decided to move all the CSS to a separate css file called style. Instead, I will reference to this file in the head section on each page.
Yesterday, I made Fajitas. I took a picture and the recipe will be the first recipe on the page. 
I wanted to take pictures of all the steps. But the images didn't live up to my expectations. Perhapse I'll try to do that in another recipe or some other time. 

I think I know what I need to make the browse function work. 
Its about using select and different option values in HTML. The next part is to have it recognize what is in storage and not. I could technically add options to each item with around 40 different values. But there must be a more efficient way to do this. There must be a way to reference to a options function. I will try to reference to it just like I refrenced to CSS. 

4-17-23:

I just realized something and wanted to write it down... I think I am overthinking the whole thing about letting the user choose weather an item is gonna be listed in for instance, liters, grams or packages etc. 

I figured that letting the user select a number is the easy part. But why should the user have to select what the item is meassured in? Why don't I just assign a set value. It will be much less code, and it actually mostly will make the most sense for the user aswell. Since I know know how the <Option> and <Select> inputs work, it would be nice to also let the user search for item. But in the beginning for this page, it won't be essential since it won't be that large for now... 

So here is an example of how I mean and how I want the page to work instead. I think this will be much easier to create and also easier for the user to interact with.

Let´s say the user has been to the food store and wants to add milk, tomato, chicken and salt to their inventory.
Instead of having the user first have to pick the item, then a number and after that it´s property, I should just assign a set property for each item.

So for instance:
The user clicks milk. 
The program will give the user to choose a number, and the text after will automatically be " Liters Milk". 
User puts in 2 and the inventory will say 2 Liters Milk.
If the next recipe the user makes uses 0.5 L of milk, the storage will be changed to 1.5 Liters of Milk after finnished. 

The other items makes sense to set like this:
Tomato 3 pieces (is this the correct english word for "styck"? :) )
Chicken 1000 grams
Salt 1 package. (It makes no sense to measure this. Since this is a "basic ingredient", it makes sense to not remove this from the inventory. Instead, if the user would run out of salt, the user should remove the item from the inventory list by themselves. However, if the recipe uses a package, lets say crushed tomatoes or something like that, it should be removed automatically.)


Styled the buttons. Will try to make the background get darker for a new window on the same site, like some websites do with logins. on the same site for the user to add items.

I am trying to make the options for ingredients change the text. I found out how to do it by simply typing the function into the console. I even got it to change the text based on which ingredient was selected. But Im trying to figure out how to do it without the console. 

Putting the onclick in the select element worked after multiple attempts at stuff.. Nice.

Now everything works. Now I just need to figure how to make them appear at the right places and also to store the choice. 

Except, if i click something and then return to blank. After that the selector wont appear again.

Added the ingredient types as an updateable variable to item selection popup. 

5/1-2023

I added a button for removing items from the list. I am going to try to make it work the way I want it. I might want to have the user be able to edit already added items. Also I dont want the user to be able to add items without a valid number, but since I have some items without any numbers, like oil for example, I think this might not be worth prioritizing for now. It would be convenient for the user, but it is more important that the user just can remove items. I have found a way to add a CSS class to the items Edit / Remove button upon creating it. 

When removing the button and text, the list dot is still there. Need to figure out how to remove that.

Found a way to fix this bug. The dots arent there, but I think thats okay. I changed the list-style-type to none in the CSS.
I was afraid that removing the item this way would remove all the items listed. But fortunatly it just removes the same item as was created to the list, which is what I wanted.

Margin on the button doesnt seem to work for some reason. It is a bit to close to the text now..

optgroup was something that will be very useful. It will make it much easier for the user to navigate to get the right item. I added it to the options.

Now when theres a bit more progress to this, I will put all the information on all the recipe pages aswell
# Project Summary

> Before the final submission date you should include a "PROJECT SUMMARY" in this section here. 

# User Guide

> Write a clear user guide for how someone should use your program.
