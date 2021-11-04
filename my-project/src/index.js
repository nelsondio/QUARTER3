import 'dotenv/config';
import cors from 'cors';
import express from 'express';
import { v4 as uuidv4 } from 'uuid';

const app = express();

// Built-in middleware
app.use(express.json());
app.use(express.urlencoded( { extended: true }));
app.use(cors());

// Our middleware to authenticate user
app.use((req, res, next) =>{
    req.me = users[1];
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

app.get('/users', (req, res) => {
    res.send(Object.values(users));
});

app.get('/users/:userId', (req, res) => {
    res.send(users[req.params.userId]);
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
    res.send(Object.values(messages));
});

app.get('/messages/:messageId', (req, res) => {
    res.send(messages[req.params.messageId]);
});

app.post('/messages', (req, res) => {
    const id = uuidv4();
    const message = {
        id,
        text: req.body.text,
        userId: req.me.id,
    };
    messages[id] = message; // object property initialization
    
    return res.send(message);
});

app.put('/messages/:messageId', (req, res) => {
    res.send("PUT HTTP method on user resource");
});

app.delete('/messages/:messageId', (req, res) => {
    const {
        [req.params.messageId]: message,
        ...otherMessages
    } = messages;
    // we use spread operator to filter out the message with a given ID
    messages = otherMessages;
    
    return res.send(messages);
});

// SERVER PORT LISTENING
app.listen(process.env.PORT, () => 
    console.log(`Example app listening on port ${process.env.PORT}!`),
);

let users = {
    1: {
        id: '1',
        userName: 'Robin Wieruch',
    },
    2: {
        id: '2',
        userName: 'Dave Davids',
    },
};

let messages = {
    1: {
        id:'1',
        text: 'Hello World',
        userId: '1',
    },
    2: {
        id: '2',
        text: 'Bye World',
        userId: '2',
    },
};