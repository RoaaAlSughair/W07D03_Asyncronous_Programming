const express = require("express");
const fs = require("fs");
const axios = require("axios");

const app = express();
app.use(express.json());

const readFiles = () => {
  fs.readFile("./data.txt", (error, data) => {
    if (error) {
      throw error;
    }
    console.log(data.toString());
  });
};

readFiles();

const writeFiles = () => {
  fs.writeFile("./text.txt", "A new file has been created", (error) => {
    if (error) {
      throw error;
    }
    console.log("Created successfully");
  });
};

writeFiles();

const getPost = (id) => {
  axios
    .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
    .then((response) => {
      console.log(response.data);
    })
    .catch((err) => {
      throw err;
    });
};

getPost(1);

const getPostAsync = async (data) => {
    await axios
    .get(`https://jsonplaceholder.typicode.com/posts/${data}`)
    .then((response) => {
      console.log(response.data);
    })
    .catch((err) => {
      throw err;
    });
  };

  getPostAsync(2);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`The server is listening at http://localhost:${PORT}`);
});
