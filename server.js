//Express modules
var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var mongoose = require('mongoose');
var mongoURI = 'mongodb://localhost:27017/macysApp';
var session = require('express-session');

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
  .use(session({secret: 'secret'}));




//Controllers
var ProductsController = require('./api/controllers/ProductsController');
var CartController = require('./api/controllers/CartController.js');
var OrderController = require('./api/controllers/OrderController.js');
var UserController = require('./api/controllers/UserController.js');

//Endpoints -- Represents the View of the Backend --CRUD
app.post('/api/products', ProductsController.create);
app.get('/api/products', ProductsController.read);
app.get('/api/products/:id', ProductsController.readOne);
app.put('/api/products/:id', ProductsController.update);
app.delete('/api/products/:id', ProductsController.delete);

app.post('/api/users', UserController.create);
app.get('/api/users', UserController.read);
app.get('/api/users/:id', UserController.readOne);
app.put('/api/users/:id', UserController.update);
app.delete('/api/users/:id', UserController.delete);

app.post('/api/orders', OrderController.create);
app.get('/api/orders', OrderController.read);
app.get('/api/orders/:id', OrderController.readOne);
app.put('/api/orders/:id', OrderController.update);
app.delete('/api/orders/:id', OrderController.delete);

//CART

app.post('/api/cart', CartController.addProduct);
app.get('/api/cart', CartController.getCart);
app.delete('/api/cart/remove/:id', CartController.deleteItem);
app.put('/api/cart/updateItem', CartController.updateItem);





//Port verification
app.listen(port, function(){
  console.log("Listening on port: ", port);
});
