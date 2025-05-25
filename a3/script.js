var rhombusMain = document.getElementById('rhombus');
var height = document.getElementById('height').value;
/* 
For whatever reason the height must be declared in JS. Otherwise,
xxx.value outputs the entire element itself. None of the other inputs
requre it. Debugging that one was a pain, and I don't fully understand
why it happened at the moment
*/

function createRhombus(height, evenColor, oddColor, symbol) {
    createTopLayer(height);
    createBottomLayer(height);
};

function createTopLayer(currentY) {
    var padding = height - currentY;
    var newLine = "<br>";

    for (var i = 0; i < padding; i++)
    {
        newLine += "_";
    }

    for (var i = 0; i < currentY * 2; i++)
    {
        newLine += "*";
    }

    rhombusMain.innerHTML = newLine + rhombusMain.innerHTML;

    if (currentY > 1)
    {
        createTopLayer(currentY - 1)
    }
}

function createBottomLayer(currentY) {
    var padding = height - currentY;
    var newLine = "<br>";

    for (var i = 0; i < padding; i++)
    {
        newLine += "_";
    }

    for (var i = 0; i < currentY * 2; i++)
    {
        newLine += "*";
    }

    rhombusMain.innerHTML = newLine + rhombusMain.innerHTML;

    if (currentY > 1)
    {
        createTopLayer(currentY - 1)
    }
}