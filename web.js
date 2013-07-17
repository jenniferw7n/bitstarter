var express = require('express');
var app = express.createServer(express.logger());


app.get('/', function(request, response) {

var fs = require('fs');
 var response_txt =  fs.readFileSync("index.html").toString();
   response.send(response_txt);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
