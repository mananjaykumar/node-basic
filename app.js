const express = require('express');
const app = express();
const router = require('./routes/post')
const dotenv = require('dotenv')
// const conn = require('./dbs/connect')
const bodyParser = require('body-parser');
dotenv.config();

let port = process.env.PORT;

// app.get('/', (req, res) => {
//     res.send('hello node programmer');
// })
app.use(bodyParser.json());
app.use('/', router);

app.listen(port, () => {
    console.log(`App has started at port: ${port}`);
});