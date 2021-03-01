const axios = require("axios").default;

const major = "Софтуерно инженерство";
const year = 4;

axios("http://localhost:8000/api/schedule", { params: { major, year } }).then(
  (response) => {
    console.log(response.data);
  }
);
