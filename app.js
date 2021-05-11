const express = require("express");
const fs = require("fs");
const axios = require("axios");

const app = express();
app.use(express.json())
const PORT = 3000;

app.listen(PORT, () => {
    console.log(`The server is listening at port: ${PORT}`);
})