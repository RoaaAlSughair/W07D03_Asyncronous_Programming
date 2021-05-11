const express = require("express");
const fs = require("fs");
const axios = require("axios");

const app = express();
app.use(express.json())

const readFiles = (() => {
    fs.readFile("data.txt", (data, error) => {
        if (error) {
            throw error;
        };
        console.log(data.toString());
    })
});

readFiles();

const writeFiles = () => {
    fs.writeFile("text.txt", "A new file has been created", (error) => {
        if (error) {
            throw error;
        }
        console.log("Created successfully");
    });
};

writeFiles();



const PORT = 3000;
app.listen(PORT, () => {
    console.log(`The server is listening at http://localhost:${PORT}`);
})