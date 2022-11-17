const container = require('./di');
const express = require('express');
const helmet = require('helmet');
const bodyparser = require('body-parser');
const cors = require('cors');


const app = express();
app.use(cors());
app.use(helmet());
app.use((req, res, next) => {
    req.container = container.createScope();
    next();
});

app.get('/', (req, res) => {
    return res.send('Hello!');
});

app.get('/getCategories', (req, res, next) => {
    req.container.resolve('category').getCategories(req, res).catch(next);
});

app.get('/liveVideos', (req, res, next) => {
    req.container.resolve('category').getLiveVideosForCategory(req, res).catch(next);
});

app.get('/getNearbySellers', (req, res, next) => {
    req.container.resolve('seller').getNearbySellers(req, res).catch(next);
});

const port = 3000, keepAliveTimeout = 12000;

// Binds to a port
const finalApp = app.listen(port, () => {
    finalApp.keepAliveTimeout = keepAliveTimeout;
    console.log(`Server started successfully, running on port: ${finalApp.address().port}.`);
});
