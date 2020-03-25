const bcrypt = require("bcrypt");

const f = async () => {
  const password = await bcrypt.hash("11037600", 12);
  console.log(password);
}

f();