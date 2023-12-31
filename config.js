// const env = require("dotenv").config();
const DATABASE_URL = `mongodb+srv://ari:${process.env.DB_PASSWORD}@cluster0.ljbquw4.mongodb.net/foodAppDB?retryWrites=true&w=majority`
// console.log(process.env);
const PORT = process.env.PORT || 8080;
const JWT_KEY_SECRET = process.env.JWT_KEY_SECRET; //A.T. Json Web Token secret we keep in config,it stored as an environment variable, pulling from nodeman.json

module.exports = { DATABASE_URL, PORT, JWT_KEY_SECRET }; //A.T. added JWT
