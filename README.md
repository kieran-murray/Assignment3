# Assignment3

MULTI-USER INTERACTIONS
07/03/2021
Kieran Murray

Overview of what you did (i.e. what are the controls? Why this design?

For this assignment I created a competitive pickup game. Users compete against each other to collect as many mushrooms as they can. There's a red button with no explantion and if either player choses to press it then a fog layer is activated, so the users have to rely on each other not to push the button. Then if a user clicks the "evil mushroom" it grows and act as like a sort of distraction. 


What was challenging

I found it really difficult to understand what exactly was happening with the socket.io as I'm not exactly all too familiar with javascript. Understanding the various events and calling on them. I also found it difficult to implement my custom events into the application. I wasn't getting much feedback from the console as to where I was going wrong.


What went well

Ironically I solved most of the issues I was having with A2 in this assignment. I figured out how to delete objects, use a pickup that was less glitchy than the one I had and use a physics system....but both the pickup and physics system I didn't end up needing. 

To solve the socket.io issue I rewrote the practice code again and researched individual commands (like socket.on) to try to understand the parameters and what the event actually does. Then I wrote pseudo code for the custom events I wanted to add in and once the logic seemed to make sense I tried implementing it. Unfortunately the code did not work when trying to put it in and I couldn't find any socket.io/A-frame resources that related to what I was trying to do. So for the fog one, because it was similar to the tutorial I got it working but I wasn't too sure why the "delete object" and "grown" events weren't happening as I wasn't getting any errors. I kept the code I wrote in the file though.
