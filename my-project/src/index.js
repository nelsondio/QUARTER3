import express from 'express';

const app = express();

app.use(3000, () => {
    console.log("server is running on port 3000");
})
//console.log("Hello Project!.");