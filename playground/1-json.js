const fs = require("fs");

const dataBuffer = fs.readFileSync("1 - JSON.json");
const dataJSON = dataBuffer.toString();
const data = JSON.parse(dataJSON);
data.name = "Joshua Hill";
data.age = 35;

fs.writeFileSync(`1 - JSON.json`, JSON.stringify(data));
