const axios = require("axios").default;
const qs = require("querystring");
const fs = require("fs");

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
      console.log(`<${x.s.value}> <${x.p.value}> <${x.o.value}> . `);
      ntriples += `<${x.s.value}> <${x.p.value}> <${x.o.value}> . \n`;
    })
    fs.writeFileSync("dist/a.nt", ntriples);
  })
  .catch(err => {
    console.log(err);
  });