const express = require("express");
const app = express();

require("./database");
require("./startup/routes")(app);

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Running on port ${port}`);
});
