// imports and variables.
var express = require('express'),
		app = express(),
	 exphbs = require('express-handlebars'),
	   port = (process.env.PORT || 3000);

// setting up a rendering engine
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
// then assigning that engine to be the view engine.
app.set('view engine', 'handlebars');

// doing something on every request.
app.use(function (req, res, next) {
  // console.log("got a request");
  var environment = process.env.NODE_ENV;
  console.log(environment);
  next();
});

// dealing with the request and responding.
app.get(/.*/,function(req, res)
{
	res.render('home');
});

// set it off listening.
app.listen(port);
console.log("\n"+'Listening on port ' + port + "\n");