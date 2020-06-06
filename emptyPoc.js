const axios = require("axios").default;
const qs = require("querystring");

const data = qs.stringify({
  update: "DELETE {?s ?p ?o} WHERE {?s ?p ?o}"
});

axios.post("http://134.122.65.239:3030/ds/update", data, {
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
  }
})
  .then(res => {
    console.log(res);
  })
  .catch(err => {
    console.log(err);
  });