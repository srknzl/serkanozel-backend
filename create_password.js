const bcrypt = require("bcrypt");

const f = async () => {
  const password = await bcrypt.hash("gg4@9%S95PD@", 12);
  console.log(password);
}

f();