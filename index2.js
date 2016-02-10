var express = require ('express');
var expressHandlebars = require ('express-handlebars');
var app = express();
var PORT = process.env.NODE_ENV || 8080;
var icecream = {
  ice1: {
    name: 'vanilla',
    price: '4',
    awesomeness: '8',
  },
  ice2: {
    name: 'chocolate',
    price: '5',
    awesomeness: '0',
  },
  ice3: {
    name:'neopalitan',
    price:'3',
    awesomeness:'1',
  },
  ice4: {
    name: 'strawberry',
    price: '3',
    awesomeness: '10',
  }
}

app.listen(PORT, function(){
  console.log('listening on port %s', PORT);
});

app.engine('handlebars', expressHandlebars({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.get('/:icecream', function(req, res){
  var flavor = req.params.icecream.this
  res.render('icecream', flavor);
});
