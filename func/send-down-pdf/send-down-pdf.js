const path = require("path");
const fs = require("fs");

exports.handler = async function () {
  console.log(path.resolve(__dirname + "/rfc2468.pdf"));
  const pathToPDF = path.resolve(__dirname + "/rfc2468.pdf");
  console.log(fs.existsSync(pathToPDF));
  const pdf = fs.readFileSync(pathToPDF);
  const used = process.memoryUsage();
  for (let key in used) {
    console.log(
      `${key} ${Math.round((used[key] / 1024 / 1024) * 100) / 100} MB`
    );
  }
  try {
    return {
      statusCode: 200,
      headers: { "Content-type": "application/pdf" },
      isBase64Encoded: true,
      body: pdf.toString("base64"),
    };
  } catch (err) {
    return {
      statusCode: 500,
      body: err.toString(),
    };
  }
};
