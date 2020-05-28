const axios = require("axios").default;
const qs = require("querystring");
const fs = require("fs");
const { exec } = require("child_process");

const data = qs.stringify({
  query: "SELECT ?s ?p ?o WHERE {?s ?p ?o}"
});

axios.post("http://134.122.65.239:3030/ds/query", data, {
  auth: {
    username: 'admin',
    password: 'pw123'
  },
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
  }
})
  .then(res => {
    let ntriples = "";
    res.data.results.bindings.forEach(x => {
      ntriples += `<${x.s.value}> <${x.p.value}> <${x.o.value}> . \n`;
    })
    fs.writeFileSync("dist/a.nt", ntriples);
    exec("./dist/apache-jena-3.15.0/bin/ntriples --base=http://serkanozel.me/pocUsers.ttl --output=turtle --nocheck a.nt", (err, stderr, stdout) => {
      if (err) {
        console.log(err);
        return;
      }
      /* if (stderr) {
        console.log(stderr);
        return;
      } */
      fs.writeFileSync("dist/a.ttl", stderr);
    })
  })
  .catch(err => {
    console.log(err);
  });
