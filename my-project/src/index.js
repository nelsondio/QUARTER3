import 'dotenv/config';
import cors from 'cors';
import express from 'express';

import models, { connectDb } from './models';
import routes from './routes';

const app = express();

// * Application-Level Middleware * //

// Third-Party Middleware
app.use(cors());

// Built-in middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Our middleware to authenticate user DELETED

// Custom middleware in Modular Models in Express as Data sources. CONTEXT 
app.use(async (req, res, next) => {
    req.context = {
        models,
        me: await models.User.findByLogin('rwieruch'),
    };
    next();
});

// * ROUTES * //
// Mount routes as modular routes. Each route receives a URI
app.use('/session', routes.session);
app.use('/users', routes.user);
app.use('/messages', routes.message);


// ROOT ROUTES
// ROUTE SESSION as pseudo authentication

// ROUTES '/users'

// MESSAGES ROUTES


// * START * //
// SERVER PORT LISTENING
// Connect asynchronously and start listening
const eraseDatabaseOnSync = true;

connectDb().then(async () => {
    if (eraseDatabaseOnSync){
        await Promise.all([
            models.User.deleteMany({}),
            models.Message.deleteMany({}),
        ]);

        createUserWithMessages();
    }
    app.listen(process.env.PORT, () =>
        console.log(`Example app listening on port ${process.env.PORT}!`),
    );
});

const createUserWithMessages = async () => {
    const user1 = new models.User({
        userName: 'rwieruch',
    });
    const user2 = new models.User({
        userName: 'ddavis',
    });
    const message1 = new models.Message({
        text: 'Published the ROAD TO LEARN REACT',
        user: user1.id,
    });
    const message2 = new models.Message({
        text: 'Happy to release ......',
        user: user2.id,
    });
    const message3 = new models.Message({
        text: 'Published a complete...... ',
        user: user2.id,
    });

    await message1.save();
    await message2.save();
    await message3.save();

    await user1.save();
    await user2.save();
    
};