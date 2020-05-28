const express = require("express");
const helmet = require("helmet");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const history = require("connect-history-api-fallback");
const path = require("path");
const cookieParser = require("cookie-parser");
const fs = require("fs");
const { exec } = require("child_process");

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

app.get("/pocUsers.ttl", (req, res, next) => {
  exec("node getAllPocAsTurtle.js", (err, stdout, stderr) => {
    if (err) {
      console.log(`error: ${error.message}`);
      return res.status(500).send("Error");
    }
    if (stderr) {
      console.log(`stderr: ${stderr}`);
      return res.status(500).send("Error");
    };
    const pocData = fs.readFileSync("dist/a.ttl", "utf-8");
    res.header("Content-Type", "text/turtle").status(200).send(pocData);
  });
});

app.post("/pocUsers.ttl", async (req, res, next) => {
  const userIRI = req.body.userIRI;
  exec(`node addUserPoc.js "${userIRI}"`, (err, stdout, stderr) => {
    if (err) {
      console.log(`error: ${error.message}`);
      return res.status(500).send("Error");
    }
    if (stderr) {
      console.log(`stderr: ${stderr}`);
      return res.status(500).send("Error");
    };
    res.header("Content-Type", "application/json").status(201).json("OK");
  });
});

app.delete("/pocUsers.ttl", async (req, res, next) => {
  const userIRI = req.body.userIRI;
  exec(`node deleteUserPoc.js "${userIRI}"`, (err, stdout, stderr) => {
    if (err) {
      console.log(`error: ${error.message}`);
      return res.status(500).send("Error");
    }
    if (stderr) {
      console.log(`stderr: ${stderr}`);
      return res.status(500).send("Error");
    };
    res.header("Content-Type", "application/json").status(200).json("OK");
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
