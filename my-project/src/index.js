import 'dotenv/config';
import cors from 'cors';
import express from 'express';

import models, { connectDb } from './models';
import routes from './routes';

const app = express();

// Built-in middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Our middleware to authenticate user DELETED

// in Modular Models in Express as Data sources. CONTEXT
app.use((req, res, next) => {
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


// ROOT ROUTES
// ROUTE SESSION as pseudo authentication

// ROUTES '/users'

// MESSAGES ROUTES

// SERVER PORT LISTENING
// Connect asynchronously and start listening
connectDb().then(async () => {
    app.listen(process.env.PORT, () =>
        console.log(`Example app listening on port ${process.env.PORT}!`),
    );
});