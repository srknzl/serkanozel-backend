const express = require("express");
const helmet = require("helmet");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const history = require("connect-history-api-fallback");
const path = require("path");
const cookieParser = require("cookie-parser");
const $rdf = require("rdflib");
const fs = require("fs");

const blogRouter = require("./routes/blog");
const authRouter = require("./routes/auth");
const portfolioRouter = require("./routes/portfolio");

const app = express();
app.use(bodyParser.json({
  limit: "100mb" // Basically no limit
}));
app.use((req, res, next) => {
  res.setHeader(
    "Access-Control-Allow-Origin", "http://localhost:8080"
  );
  res.setHeader("Access-Control-Allow-Methods", "*");
  res.setHeader("Access-Control-Allow-Credentials", "true");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Content-Type,Cookie,Set-Cookie"
  );
  next();
});
app.use(cookieParser());
app.use(helmet());
app.post("/poc", (req, res, next) => {
  const userIRI = req.body.userIRI;
  const store = $rdf.graph();
  const VCARD = new $rdf.Namespace("http://www.w3.org/2006/vcard/ns#");
  const pocUsers = store.sym("https://serkanozel.me/pocUsers.ttl#poc");
  fs.readFile(path.join(__dirname, "dist", "pocUsers.ttl"), "utf8", (err, data) => {
    if (err) {
      console.log(err);
    } else {
      $rdf.parse(data, store, "https://serkanozel.me/pocUsers.ttl#poc", "text/turtle");
      store.add(pocUsers, VCARD("hasMember"), userIRI, pocUsers.doc())
      fs.writeFile(path.join(__dirname, "dist", "pocUsers.ttl"), $rdf.serialize(pocUsers.doc(), store, "https://serkanozel.me/pocUsers.ttl", 'text/turtle'), "utf8", () => {

      });
    }
  });
});
app.use("/blog", blogRouter);
app.use("/portfolio", portfolioRouter);
app.use("/auth", authRouter);
app.use(history());
app.use(express.static(path.join(__dirname, 'dist')));

let MONGODB_URI;

if (process.env.NODE_ENV === "production") {
  MONGODB_URI = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@srknzl-m0-development-cluster-hgcsl.mongodb.net/${process.env.MONGO_DEFAULT_DATABASE}?retryWrites=true&w=majority`;
} else {
  // MONGODB_URI = require("./credentials/mongo_uri").MONGODB_URI;
}



let port = process.env.PORT;

if (port == null || port == "") {
  port = 3000;
}

const errorHandler = (err, req, res, next) => {
  if (!err.statusCode) err.statusCode = 500;
  res.status(err.statusCode).json({
    message: err.message,
    error: err
  });
};
app.use(errorHandler);

app.listen(3000);

/* mongoose.connect(
  MONGODB_URI,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // useFindAndModify: false
  },
  async err => {
    if (err) console.error(err);
    app.listen(port, () => {
      console.log("Server listening on port ", port);
    });
  }
); */
