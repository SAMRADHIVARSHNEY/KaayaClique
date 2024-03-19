const mongoose = require('mongoose');
const process = require('process');
require('dotenv').config();
const uri = process.env.MONGODB_URI;

mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    }
).then(() => {
    console.log("Connected to database!");
}).catch((err) => {
    console.log("could not connect to mongodb", err);
});

