const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

const conn = mongoose.connect(process.env.MONGO_URI, { useUnifiedTopology: true, useNewUrlParser: true }).then(() => {
    console.log("DB connected!!");
})

mongoose.connection.on('error', err => {
    console.log(err.message);
})

module.exports = conn;