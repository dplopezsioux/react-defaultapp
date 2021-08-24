const express = require("express");
const dotenv = require("dotenv");
const path = require("path");
//
//
//    set up
//
//
const app = express();
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs"); //set the view engine to ejs
app.use("/static", express.static("public"));
//
//
//    global vari
//
//
const dotEnvResult = dotenv.config();
const PORT = parseInt(dotEnvResult.parsed.PORT) || 3000;
//
//
//    render pages
//
//
app.get("/", function (req, res) {
  res.render("pages/index");
});
//
//
//    start app
//
//
app.listen(PORT, (err) => {
  if (err) console.log(err);
  console.log(`Server run on port: ${PORT},
  http://localhost:${PORT}/`);
});
