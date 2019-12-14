const webpackOptions = require("../webpack-options");
require("@babel/register")(webpackOptions);
const express = require("express");

const { start } = require("./react-server");

const app = express();

app.use(express.static("public"));

app.get("*", start);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("http://localhost:" + PORT);
});
