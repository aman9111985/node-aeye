require("dotenv").config();
require('./config/dbConfig');

const express = require('express');
const cors = require('cors');
const bodyParser = require("body-parser");

const userRoutes = require('./routes/userRoutes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


app.use('/api', userRoutes);

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send("Something broke!");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => 
    console.log(`Server is running on port ${PORT}`)
);
