const express = require("express");
const bodyParser = require("body-parser");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send("Hello this is the ToDoList server")
})


app.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}`);
});

