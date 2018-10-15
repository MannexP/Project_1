# Project_1

#Jeapordy Project #1

#Overview
Project #1 is a one player game of Jeopardy. The win event occurs when the player has completed each question correctly. If a user answers a question incorrectly, the game will reset. Upon landing on the page, the user can click a tile to open a window with a Jeopardy style question. The use hasanoption of three answers. If answered correctly user will here a bell and the tile will display green, if answered incorreclty a buzzer will sound, the game tile will turn red and the game will restart. Once all questions are  answered correctly, a 'Winner' prompt will appear and the game will be refreshed.

#Live site
https://compassionate-poitras-93ea84.netlify.com

#Technologies Used
Languages - HTML5, CSS3, Javascript
Design - Bootstrap,Font Meme, SweetAlert
Project Planning & User Stories - Trello
VS Code

#Wire Frame

#Initial Wireframe
https://www.figma.com/file/NaKfCsTRPtrOG4Ls9y4hUfcK/PROJECT-1?node-id=0%3A1

#Trello
https://trello.com/b/2NIeFRzA/project-1


#Problems w/ Game
Scalability! As i began to pseudo code a player 1 and player 2 game play. I realized how many lines of code would have to be changed in order to create that function within the game. I began to look at the game as an object and not as cause and event click functions. The approach taken works, but does not create a cohesive game. As is, the game is functional and serves its purpose to the user.

#Phase 2
Creating an OOP game. Inserting  questions, answers and tiles into an object, in order to manipulate the  DOM through calling keys and values from the object which is the game. Createan event target function that will loop through the object, pull the data and present it through a prompt/modal or something similar. Another feature could be so that the loop randomizes the question appeared. 
