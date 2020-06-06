const express = require("express");
const helmet = require("helmet");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const history = require("connect-history-api-fallback");
const path = require("path");
const cookieParser = require("cookie-parser");
const fs = require("fs");
const { exec } = require("child_process");
const axios = require("axios").default;
const qs = require("querystring");
const N3 = require("n3");
const df = require("n3").DataFactory;

const blogRouter = require("./routes/blog");
const authRouter = require("./routes/auth");
const portfolioRouter = require("./routes/portfolio");

const app = express();
app.use(
  bodyParser.json({
    limit: "100mb", // Basically no limit
  })
);
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "*");
  res.setHeader("Access-Control-Allow-Credentials", "false");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Content-Type,Cookie,Set-Cookie"
  );
  next();
});
app.use(cookieParser());
app.use(helmet());

app.get("/pocUsers.ttl", (req, res, next) => {
  const data = qs.stringify({
    query: "SELECT ?s ?p ?o WHERE {?s ?p ?o}",
  });

  axios
    .post("http://134.122.65.239:3030/ds/sparql", data, {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    })
    .then((ress) => {
      const writer = new N3.Writer({
        prefixes: {
          "": "http://serkanozel.me/pocUsers.ttl",
          acl: "http://www.w3.org/ns/auth/acl#",
          dc: "http://purl.org/dc/elements/1.1/",
          vcard: "http://www.w3.org/2006/vcard/ns#",
          xsd: "http://www.w3.org/2001/XMLSchema#",
        },
      });
      ress.data.results.bindings.forEach((x) => {
        if (x.s.value == "http://serkanozel.me/pocUsers.ttl#poc") {
          writer.addQuad(
            df.namedNode("#poc"),
            df.namedNode(x.p.value),
            x.o.type == "literal"
              ? df.literal(x.o.value, df.namedNode(x.o.datatype))
              : df.namedNode(x.o.value)
          );
        } else {
          writer.addQuad(
            df.namedNode(x.s.value),
            df.namedNode(x.p.value),
            x.o.type == "literal"
              ? df.literal(x.o.value, df.namedNode(x.o.datatype))
              : df.namedNode(x.o.value)
          );
        }
      });
      writer.end((err, result) => {
        res.header("Content-Type", "text/turtle").status(200).send(result);
      });
    })
    .catch((err) => {
      console.log(err);
    });
});


app.use("/blog", blogRouter);
app.use("/portfolio", portfolioRouter);
app.use("/auth", authRouter);
app.use(history());
app.use(express.static(path.join(__dirname, "dist")));

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
    error: err,
  });
};
app.use(errorHandler);

// app.listen(3000);

mongoose.connect(
  MONGODB_URI,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // useFindAndModify: false
  },
  async (err) => {
    if (err) console.error(err);
    app.listen(port, () => {
      console.log("Server listening on port ", port);
    });
  }
);
