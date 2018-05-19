const canvas = document.getElementById('pixelCanvas');
var color = document.getElementById('colorPicker').value;
var button = document.querySelector("input[type='submit']");

// prevents page reload and crafts grid
button.onclick = (event) => {
    event.preventDefault();
    makeGrid();
}

function makeGrid() {
    const height = document.getElementById('inputHeight').value;
    const width = document.getElementById('inputWidth').value;

    // destroy previous grif(if it exists)
    const clearGrid = () => {
        var parent = document.getElementById('pixelCanvas');
        while (parent.firstChild) {
            parent.removeChild(parent.firstChild);
        }
    }
    clearGrid();

    // loop to create grid
    for (x = 0; x < height; x++) {
        var tr = document.createElement('tr');

        // fills column of each row before releasing
        for (y = 0; y < width; y++) {
            var td = document.createElement('td');
            tr.appendChild(td);
        }
        // attaches filled row to canvas
        canvas.appendChild(tr);
    }
}

canvas.addEventListener('click', (event) => {
    // specify tagName to prevent entire table being colored
    if (event.target.tagName === 'TD') {
        event.target.style.backgroundColor = document.getElementById('colorPicker').value;
    }})