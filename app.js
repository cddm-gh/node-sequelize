const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const dust = require("dustjs-helpers");
const consolidate = require("consolidate");
const { Client } = require("pg");

const app = express();

const conectionStr = "postgres://gorydev:Darkgo13@localhost/nodetest";

app.engine("dust", consolidate.dust);
app.set("view engine", "dust");
app.set("views", path.join(__dirname, "/views"));
app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  const client = new Client({
    connectionString: conectionStr
  });
  client.connect();
  client.query("SELECT * FROM recipes WHERE id='1' ", (err, resp) => {
    if (err) console.log(err);
    if (resp) {
      console.log(resp.rows);
    }

    client.end();
  });
});

app.listen(3000, () => {
  console.log("Listening on port 3000");
});
