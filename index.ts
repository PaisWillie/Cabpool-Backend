const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const config = require("./config");
const accountRoutes = require("./routes/accountRoutes");
const taxiRoutes = require("./routes/taxiRoutes");

const app = express();

app.use(express.json());
app.use(cors());
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/account", accountRoutes.routes);
app.use("/taxi", taxiRoutes.routes);

app.listen(config.port, () =>
  console.log(`Server started on url ${config.url}`)
);
