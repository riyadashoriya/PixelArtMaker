# PixelArtMaker

Develop a one-page web application that lets users draw an amazing 8-bit pixel masterpiece image on a customized panel.
You can:
1. Dynamically set the size of the table as an N by M grid.
2. Choose a color.
3. Click a cell in the grid to fill that cell with the chosen color.

Note: You must be using the current version of Edge, Firefox, or Chrome. Due to implementation differences, this exercise does not work effectively in Safari or Opera.

PS: document.createDocumentFragment() can be used to create table effectively. This will prevent reflow and repaint of the document every single time a td or tr is added. Document fragment is in memory and not a part of main dom tree.
This improves the performance of the web page.
