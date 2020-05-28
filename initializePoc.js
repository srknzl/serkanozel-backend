const axios = require("axios").default;
const qs = require("querystring");

const updateQuery = `INSERT {<http://serkanozel.me/pocUsers.ttl#poc> <http://www.w3.org/1999/02/22-rdf-syntax-ns#type> <http://www.w3.org/2006/vcard/ns#Group> .
<http://serkanozel.me/pocUsers.ttl#poc> <http://www.w3.org/2006/vcard/ns#hasUID> <urn:uuid:8831CBAD-1111-2222-8563-F0F4787E5398:ABGroup> .
<http://serkanozel.me/pocUsers.ttl#poc> <http://purl.org/dc/elements/1.1/created> "2020-09-11T07:18:19"^^<http://www.w3.org/2001/XMLSchema#dateTime> .
<http://serkanozel.me/pocUsers.ttl#poc> <http://purl.org/dc/elements/1.1/modified> "2020-08-08T14:45:15"^^<http://www.w3.org/2001/XMLSchema#dateTime> .
<http://serkanozel.me/pocUsers.ttl#poc> <http://www.w3.org/2006/vcard/ns#hasMember> <https://srknzl.solid.community/profile/card#me> .} WHERE {}`;


const data = qs.stringify({
  update: updateQuery
})

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