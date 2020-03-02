const axios = require("axios");


let allData = () => {
    return axios.get(`/api`);
};

console.log(allData);
