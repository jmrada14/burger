let express = require("express");
let PORT = process.env.PORT || 5080;
let app = express();
app.use(express.static("public"));
app.use(express.urlencoded({extended: true}));
app.use(express.json());
let handlebars = require("express-handlebars");
app.engine("handlebars", handlebars({defaultLayout : "main"}));
app.set("view engine", "handlebars");
let routes = require("./controllers/burgers_controllers");
app.use(routes);
app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});
