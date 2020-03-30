const express = require("express");
const helmet = require("helmet");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const history = require("connect-history-api-fallback");
const path = require("path");
const cookieParser = require("cookie-parser");

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
app.use("/blog", blogRouter);
app.use("/portfolio", portfolioRouter);
app.use("/auth", authRouter);
app.use(history());
app.use(express.static(path.join(__dirname, 'dist')));

let MONGODB_URI;

if (process.env.NODE_ENV === "production") {
  MONGODB_URI = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@srknzl-m0-development-cluster-hgcsl.mongodb.net/${process.env.MONGO_DEFAULT_DATABASE}?retryWrites=true&w=majority`;
} else {
  MONGODB_URI = require("./credentials/mongo_uri").MONGODB_URI;
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
mongoose.connect(
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
);
