const axios = require("axios").default;
const qs = require("querystring");

if (process.argv.length != 3) {
  console.error("Usage: node addUserPoc.js <userIRI>");
}
const userIRI = process.argv[2]

const updateQuery = `INSERT { <http://serkanozel.me/pocUsers.ttl#poc> <http://www.w3.org/2006/vcard/ns#hasMember> <${userIRI}> .} WHERE {}`;
const data = qs.stringify({
  update: updateQuery
});

axios.post("http://134.122.65.239:3030/ds/update", data, {
  auth: {
    username: 'admin',
    password: 'pw123'
  },
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
  }
})
  .then(res => {
    console.log(res);
  })
  .catch(err => {
    console.log(err);
  })





