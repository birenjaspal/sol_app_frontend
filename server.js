var express = require('express'),
    app = express();

var port = 4040;

app.use(express.static('public'));

app.listen(port, function() {
  console.log("auth frontend running on port: ", port);
});
