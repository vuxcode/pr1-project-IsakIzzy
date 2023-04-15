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



# Project Summary

> Before the final submission date you should include a "PROJECT SUMMARY" in this section here. 

# User Guide

> Write a clear user guide for how someone should use your program.