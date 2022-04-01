TIC TAC TOE PROJECT

TO-DO
1. Connect html, css, and js X 
2. Create module for the game itself X
3. Create module for the gameboard X
4. Create a factory function for the players X 
5. Write html for the page X
6. Write basic css for the page X
7. Write function to allow player to place an X on the board WITHOUT overwriting X
8. Write logic that declares a winner (IIFE?) X
9. Create function that creates a popup to allow each player to choose their name and X/O
9b. Store the value of the name form when the submit button is hit X
9c. Allow player to choose their symbol X
10. Create function that declares the winning player X
11. Create option to play against a computer player X 
11a. Create a message if there's a tie X 
12. Make it so that the computer selects a random legal move X

13. Create an unbeatable computer player setting

FURTHER TWEAKS
1. Incorporate the minmax algorithm

MINIMAX ALGORITHM
1. Assign a point value to each outcome scenario (+10 for computerWin, 0 for tie, -10 for computerLoss)
2. Run the minimax algorithm on each possible move
3. If necessary, run it again and again (recursion!) until end states are possible
4. Use depth as a way of tracking how to get to a victory as quickly as possible, or to prolong a draw as long as possible
4a. Depth can also be used to track min and max
4a. Depth can be a counter - every time the algorithm runs recursively, depth increases


14. Create a medium computer player setting (33% chance of playing minimax, 66% chance random)
14a. Create a hard computer player setting (66% chance of playing minimax, 33% change random)
15. Replace X's and O's with images (or a cool font?)