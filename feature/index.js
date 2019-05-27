// var express = require('');
// var app = express();
// app.get('helloThere', function(request, response){
//     response.send('hello there, from espress!')
// });

// app.listen(1444, function(){
//     console.log('Listening at Port 1444');
// });

var coll = document.getElementsByClassName("collapseExpand");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}