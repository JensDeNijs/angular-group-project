const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const PORT = 4269;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.all("/*", function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
    next();
});


let allItems = [{itemName: 'bread', quantity: '200g', category: 'Drinks', id: "696969420"}];

// Below you can define how your API handles a get or a post request.
// Try sending a get request to the root, you should get a "Hello from server" back.

app.get('/', function (request, response) {
    response.send('Hello from server');
});

app.get('/allItems', function (request, response) {
    response.send(allItems);
});

app.post('/', function (request, response) {
    response.status(200).send({"message": "Data received"});
});

app.post('/allItems', function (request, response) {
    allItems.push(request.body)
});

app.delete("/allItems/:id", function (request, response) {

    const itemIndex = allItems.findIndex(function (o) {
        return o.id === ( request.params.id)
    });

    if (itemIndex !== -1) {
        allItems.splice(itemIndex, 1);
    }
});

app.listen(PORT, function () {
});
