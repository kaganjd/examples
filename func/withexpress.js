const express = require("express");
const serverless = require("serverless-http");

const app = express();
const router = express.Router();

const html = (headers) => {
  return `
    <!DOCTYPE html>
    <html>
      <head>
      </head>
      <body>
        ${headers}
      </body>
    </html>
  `;
};

router.get("/withexpress", (req, res) => {
  res.send(
    html(
      `${res.json(req.headers)}`
    ))
})

app.use("/", router);

module.exports.handler = serverless(app);