const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

//proteção de enderecos
app.use(cors(
    //{origin: 'http://meuapp.com'}
));

//Para trabalhar com json nas reqs
app.use(express.json());

app.use(routes);

app.listen(3333);