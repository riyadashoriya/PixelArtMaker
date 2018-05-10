// Select color input
var color = document.getElementById('colorPicker').value;

// When size is submitted by the user, call makeGrid()
document.getElementById('submit').addEventListener("click", function(e){
  e.preventDefault();
  let height = document.getElementById('inputHeight').value;
  let width = document.getElementById('inputWidth').value;
  let table = document.getElementById('pixelCanvas');
  table.innerHTML = "";
  makeGrid(height, width, table);
});

function makeGrid(height, width, table) {
  for(var i = 0; i < height; i++){
    let tr = document.createElement('tr');
    for (var j = 0; j < width; j++){
        let td = document.createElement('td');
        tr.appendChild(td);
    }
    table.appendChild(tr);
  }
}
