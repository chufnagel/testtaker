const bodyParser = require("body-parser");
const cors = require("cors");
const express = require("express");
const next = require("next");
const logger = require("morgan");

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

const port = parseInt(process.env.PORT, 10) || 3000;

app
  .prepare()
  .then(() => {
    const server = express();
    server.use(bodyParser.json());
    server.use(bodyParser.urlencoded({ extended: false }));
    server.use(logger("dev"));
    server.use(cors());

    server.get("/quiz", (req, res) => {
      console.log("/quiz requested");
      console.log(req.query);
      return app.render(req, res, "/quiz", req.query);
    });

    server.get("/results", (req, res) => {
      console.log("/results requested");
      console.log(req.query);
      return app.render(req, res, "/quiz", req.query);
    });

    server.get("/", (req, res) => {
      console.log("/ requested");
      console.log(req.query);
      return app.render(req, res, "/", req.query);
    });

    server.get("*", (req, res) => handle(req, res));

    server.listen(port, err => {
      if (err) throw err;
      console.log(`> Ready on http://localhost:${port}`);
    });
  })
  .catch(ex => {
    console.error(ex.stack);
    process.exit(1);
  });

module.exports = app;
