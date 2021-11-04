import 'dotenv/config';
import cors from 'cors';
import express from 'express';
import { v4 as uuidv4 } from 'uuid';
import models from './models';

const app = express();

// Built-in middleware
app.use(express.json());
app.use(express.urlencoded( { extended: true }));
app.use(cors());

// Our middleware to authenticate user


// in Modular Models in Express as Data sources. CONTEXT
app.use( (req, res, next) => {
    req.context = {
        models,
        me: models.users[1],
    };
    next();
});

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
app.get('/session', (req, res) => {
    //return res.send(users[req.me.id]); // outside variable, not PURE
    return res.send(req.context.models.users[req.context.me.id]);
});

app.get('/users', (req, res) => {
    res.send(Object.values(req.context.models.users));
});

app.get('/users/:userId', (req, res) => {
    res.send(req.context.models.users[req.params.userId]);
});

app.post('/users', (req, res) => {
    res.send("POST HTTP method on user resource");
});

app.put('/users', (req, res) => {
    res.send("PUT HTTP method on user resource");
});

app.delete('/users', (req, res) => {
    res.send("DELETE HTTP method on user resource");
});

// MESSAGES ROUTES
app.get('/messages', (req, res) => {
    res.send(Object.values(req.context.models.messages));
});

app.get('/messages/:messageId', (req, res) => {
    res.send(req.context.models.messages[req.params.messageId]);
});

app.post('/messages', (req, res) => {
    const id = uuidv4();
    const message = {
        id,
        text: req.body.text,
        userId: req.context.me.id,
    };
    req.context.models.messages[id] = message; // object property initialization
    
    return res.send(message);
});

app.put('/messages/:messageId', (req, res) => {
    res.send("PUT HTTP method on user resource");
});

app.delete('/messages/:messageId', (req, res) => {
    const {
        [req.params.messageId]: message,
        ...otherMessages
    } = req.context.models.messages;
    // we use spread operator to filter out the message with a given ID
    req.context.models.messages = otherMessages;
    
    return res.send(message);
});

// SERVER PORT LISTENING
app.listen(process.env.PORT, () => 
    console.log(`Example app listening on port ${process.env.PORT}!`),
);
/*
We are using application-wide middleware to pass the models to all 
routes in a context object. Models are living outside src/index and 
can be refactored to actual db interfaces later . No global variables,
no side-effect of No PURE functions, passing context via the request
object with the context object. Now move routes out .
*/