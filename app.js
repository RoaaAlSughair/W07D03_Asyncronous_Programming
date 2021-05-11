const express = require("express");
const fs = require("fs");
const axios = require("axios");

const app = express();
app.use(express.json())

const readFiles = ("data.txt", (data, error) => {
    if (error) {
        throw error;
    };
    console.log(data.toString());
});



const PORT = 3000;
app.listen(PORT, () => {
    console.log(`The server is listening at http://localhost:${PORT}`);
})