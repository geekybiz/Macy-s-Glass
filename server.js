//Express modules
var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var mongoose = require('mongoose');
var mongoURI = 'mongodb://localhost:27017/macysApp';

//Mongoose Connection
mongoose.set('debug', true);
mongoose.connect(mongoURI);
mongoose.connection.once('open', function() {
console.log('Connected to mongoDB at: ', mongoURI);
});

//Express Connection
var port = 8080;
var app = express();

app
  .use(bodyParser.json())
  .use(cors())
  .use(express.static(__dirname + '/public'))


//Controllers
var ProductsController = require('./api/controllers/ProductsController');
var CartController = require('./api/controllers/CartController.js');
var OrderController = require('./api/controllers/OrderController.js');
var UserController = require('./api/controllers/UserController.js');

//Endpoints -- Represents the View of the Backend --CRUD
app.post('/products', ProductsController.create);
app.get('/products', ProductsController.read);
app.get('/products/:id', ProductsController.readOne);
app.put('/products/:id', ProductsController.update);
app.delete('/products/:id', ProductsController.delete);

app.post('/users', UserController.create);
app.get('/users', UserController.read);
app.get('/users/:id', UserController.readOne);
app.put('/users/:id', UserController.update);
app.delete('/users/:id', UserController.delete);

app.post('/orders', OrderController.create);
app.get('/orders', OrderController.read);
app.get('/orders/:id', OrderController.readOne);
app.put('/orders/:id', OrderController.update);
app.delete('/orders/:id', OrderController.delete);

app.post('/cart', CartController.create);
app.get('/cart', CartController.read);
app.get('/cart/;id', CartController.readOne);
app.put('/cart/:id', CartController.update);
app.delete('/cart/:id', CartController.delete);




//Port verification
app.listen(port, function(){
  console.log("Listening on port: ", port);
});
