const axios = require("axios").default;
const qs = require("querystring");
const { exec } = require("child_process");
const path = require("path");
let ntriples;

exec(
  `riot --rdfs="${path.join(__dirname, "graph", "poc_core.ttl")}" "${path.join(
    __dirname,
    "spec.ttl"
  )}"`,
  (error, stdout, stderr) => {
    if (error) {
      console.error(error);
      return;
    }
    if (stderr) {
      console.error(stderr);
      return;
    }
    updateQuery = `
    CLEAR GRAPH <http://poc.core>;
    INSERT DATA {
      GRAPH <http://poc.core> {
        ${stdout}
      }
      };`;
    const data = qs.stringify({
      update: updateQuery,
    });

    axios
      .post("http://134.122.65.239:3030/ds/update", data, {
        auth: {
          username: "admin",
          password: "pw123",
        },
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }
);
