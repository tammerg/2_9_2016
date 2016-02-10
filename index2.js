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

app.get('/icecream/favorite', function(req, res){
  res.render('icecream', icecream.ice1)
});
app.get('/icecream/favorite2', function(req, res){
  res.render('icecream', icecream.ice2)
});
app.get('/icecream/favorite3', function(req, res){
  res.render('icecream', icecream.ice2)
});
app.get('/icecream/favorite4', function(req, res){
  res.render('icecream', icecream.ice4)
});
