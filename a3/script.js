var rhombusMain = document.getElementById('rhombus');

function createRhombus(height, evenColor, oddColor, symbol) {
    rhombusMain.innerHTML = "<p>3</p>";
    for (var i = 0; i <= height; i++) {
        for (var j = 0; j <= height; j++) {
            if (j <= i) {
                rhombusMain.innerHTML += "*";
            }
            else
            {
                rhombusMain.innerHTML += "_";
            }
        }

        rhombusMain.innerHTML += "<br>";
    }
};