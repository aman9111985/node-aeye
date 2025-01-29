require("dotenv").config();
require('./config/dbConfig');


const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send("Something broke!");
});

app.listen(3002, () => {
    console.log("Server is running on port 3002");
});
