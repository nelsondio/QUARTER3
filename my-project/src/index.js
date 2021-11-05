import 'dotenv/config';
import cors from 'cors';
import express from 'express';

import models from './models';
import routes from './routes';

const app = express();

// Built-in middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded( { extended: true }));

// Our middleware to authenticate user DELETED

// in Modular Models in Express as Data sources. CONTEXT
app.use( (req, res, next) => {
    req.context = {
        models,
        me: models.users[1],
    };
    next();
});

// Mount routes as modular routes. Each route receives a URI
app.use('/session', routes.session);
app.use('/users', routes.user);
app.use('/messages', routes.message);



app.get('/', (req, res) => {
    res.send("Received a GET request");
});

app.post('/', (req, res) => {
    res.send("Received a POST request");
});

app.put('/', (req, res) => {
    res.send("Received a PUT request");
});

app.delete('/', (req, res) => {
    res.send("Received a DELETE request");
});

// ROUTE SESSION as pseudo authentication

// ROUTES '/users'

// MESSAGES ROUTES

// SERVER PORT LISTENING
app.listen(process.env.PORT || 8888, () => 
    console.log(`Example app listening on port ${process.env.PORT}!`),
);
/*
We are using application-wide middleware to pass the models to all 
routes in a context object. Models are living outside src/index and 
can be refactored to actual db interfaces later . No global variables,
no side-effect of No PURE functions, passing context via the request
object with the context object. Now move routes out .
*/