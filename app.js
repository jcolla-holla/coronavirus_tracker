const axios = require("axios");
const express = require("express");
const request = require("request");
const path = require('path');
const app = express();

app.get("/test", (req, res) => res.json({mes: "this is a test proxy route"}));

// API source: https://coronavirus.app/get-latest

app.get('/api', function(req, res){
    request('https://coronavirus.app/get-latest', function(error, response, body) {
        if (!error && response.statusCode === 200) {
            console.log(body);
            res.send(body);
        }
    })
})

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, './index.html'))
})

app.listen(3000); 
console.log('server running on port %d', 3000);

let allData = () => {
    return axios.get(`/api`);
};

console.log(allData);

