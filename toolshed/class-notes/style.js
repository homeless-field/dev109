var today = new Date();
var hourNow = today.getHours();
var greeting;
colors = ['white', 'black', 'custom'];


if (hourNow > 18) {

  greeting = 'Good evening';

} else if (hourNow > 12) {

  greeting = 'Good afternoon';

} else if (hourNow > 0) {

  greeting = 'Good morning';

} else {

  greeting = 'Welcome';

}

document.write(greeting); // Document represents the entire page. write() allows HTML to be added
var text = document.getElementById('ExampleText');
text.textContent = "This text has changed: " + colors[1];
'1' > 0; // This is true. I'm gonna throw up