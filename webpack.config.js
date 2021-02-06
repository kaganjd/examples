const path = require("path");

module.exports = {
  mode: "production",
  entry: "./gotrue/src/identity.js",
  output: {
    filename: "main.js",
    publicPath: "/gotrue/dist/",
    path: path.resolve(__dirname, "gotrue/dist"),
  },
  devServer: {
    proxy: {
      "/.netlify": {
        target: "http://localhost:9000",
        pathRewrite: {
          "^/.netlify/functions": "",
        },
      },
    },
  },
};
