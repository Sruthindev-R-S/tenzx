const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.get('/hello', (req, res) => {
	res.send('hello');
});

module.exports = app;