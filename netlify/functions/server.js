const express = require("express");
const serverless = require("serverless-http");
const app = express();

require("../../database");
require("../../startup/routes")(app);

const port = process.env.PORT || 3000;

module.exports.hander = serverless(app);
