const express = require("express");
const serverless = require("serverless-http");

const app = express();
const router = express.Router();

app.get("/.netlify/functions/set-cookie", (req, res) => {
  return res
    .cookie('rememberme', '1', { expires: new Date(Date.now() + 900000), httpOnly: true })
})

module.exports.handler = serverless(app);