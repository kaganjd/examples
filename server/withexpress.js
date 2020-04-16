const express = require("express");
const serverless = require("serverless-http");

const app = express();
const router = express.Router();

const html = (title, body, headers) => {
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <title>${title}</title>
      </head>
      <body>
        <div>
          <h1>${body}</h1>
          <h2>${headers}</h2>
        </div>
      </body>
    </html>
  `;
};

router.get("/withexpress", (req, res) => {
  res.send(
    html(
      "The functions title works",
      "the functions body works",
      `${res.headers}`
    ))
})

app.use("/", router);

module.exports.handler = serverless(app);