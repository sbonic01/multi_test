var http = require('http');
var url = require("url");
var port = process.env.PORT || 3000;

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
var path = url.parse(req.url).pathname;
var querystr = url.parse(req.url, true).query.id;
res.write("url is: " + path + "<hr>");
  if (path == "/")
  {
    s = "<form action='/process' method='get'>"+
            "<input type='text' name='id'><br>" +
            "<input type='submit'>" +
            "</form>";
	  res.write(s);
  }
  else if (path == "/process")
	  res.write ("Processing, the value of id is: " + querystr);
  res.end();
}).listen(port);
