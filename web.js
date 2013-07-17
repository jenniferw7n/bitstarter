var express = require('express');
var app = express.createServer(express.logger());

app.get('/', function(request, response) {
var fs = require('fs');

  var buffer_index = fs.readFileSync(index.html);
  var response_txt = buf.toString( buffer_index );
   response.send(response_txt);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
