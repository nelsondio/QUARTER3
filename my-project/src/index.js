import 'dotenv/config';
import cors from 'cors';
import express from 'express';

const app = express();

app.use(cors());

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
    res.send("GET HTTP method on user resource");
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

app.listen(process.env.PORT, () => 
    console.log(`Example app listening on port ${process.env.PORT}!`),
);