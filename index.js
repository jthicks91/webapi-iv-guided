require("dotenv").config(); // to make enviornment variables MUST BE AT VERY TOP OF INDEX.JS FILE
console.log("process env", process.env);

const server = require("./api/server.js");

const PORT = process.env.PORT || 4000;

server.listen(PORT, () => {
  console.log("\n*** Server Running on port ${PORT} ***\n");
});
