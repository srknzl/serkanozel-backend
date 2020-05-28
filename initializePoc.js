// This script loads the initial turtle data that is at

const axios = require("axios").default;
const qs = require("querystring");
const { exec } = require("child_process");

let ntriples;

exec(
  "turtle --base=http://serkanozel.me/pocUsers.ttl pocUsers.ttl",
  (err, stdout, stderr) => {
    if (err) {
      console.log(`error: ${err.message}`);
      process.exit(1);
    }
    if (stderr) {
      console.log(`stderr: ${stderr}`);
      process.exit(1);
    }
    ntriples = stdout;
    const updateQuery = `INSERT {${ntriples}} WHERE {}`;
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
