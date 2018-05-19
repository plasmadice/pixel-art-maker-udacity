## Pixel Art Maker Project
This project is created for Udacity's Front End Web Developer Nanodegree course

### How to use
Select your grid `height` and `width`. Pick a color if you like. Click `Submit`. Click anywhere on the grid to fill in that cell.

### How it works
Vanilla javascript and DOM manipulation are used. The makeGrid() function is called to clear the previous grid(if it exts) and to draw the new grid using the dimensions provided.

An event listener is attached to the canvas, which will apply the currently selected color to the grid.