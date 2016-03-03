var express = require('express');
var app = express();

var exphbs = require('express-handlebars');
app.engine('handlebars', exphbs({
  defaultLayout: 'main',
  partialsDir: [__dirname + '/views/partials'],
  helpers: {
  }
}));
app.set('view engine', 'handlebars');

var path = require('path');
app.use(express.static(path.join(__dirname, 'public')));

var data = require('./economic_data');

app.get('/', function (req, res) {
  res.render('home', data);
});

app.listen(process.env.PORT, function () {
  console.log('Listening on ' + process.env.PORT);
});
