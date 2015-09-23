var express = require('express'),
		app = express(),
	   port = (process.env.PORT || 3000);

app.use(function (req, res, next) {
  console.log("got a request");
  next();
});

app.get(/.*/,function(req, res)
{
	res.send('Fishing is great! Isn\'t it');
});

app.listen(port);
console.log("\n"+'Listening on port ' + port + "\n");