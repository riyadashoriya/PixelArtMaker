
// When size is submitted by the user, call makeGrid()
document.getElementById('submit').addEventListener("click", function(e){
  //Prevent refresh of page when form is submitted.
  e.preventDefault();
  //Get the user input height and width.
  let height = document.getElementById('inputHeight').value;
  let width = document.getElementById('inputWidth').value;
  let table = document.getElementById('pixelCanvas');
  //Clear the table elements, whenever new dimensions are entered.
  table.innerHTML = "";
  //Create table
  makeGrid(height, width, table);
});

var color = document.getElementById('colorPicker');
//Change the color whenever a new color is selected
document.getElementById('colorPicker').addEventListener("change", function(){
  color = colorPicker.value;
});

//Call this function to create a table when size of table is submitted
function makeGrid(height, width, table) {
  for(var i = 0; i < height; i++) {
    let tr = document.createElement('tr');
    for (var j = 0; j < width; j++) {
        let td = document.createElement('td');
        td.addEventListener("click", function() {
          //Whenever any cell is clicked, change the color of the cell.
          td.style.backgroundColor = color;
        });
        tr.appendChild(td);
    }
    table.appendChild(tr);
  }
}
