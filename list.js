const fs = require("fs");

const files = fs.readdir("./assets", (err, files) => {
  if (err) {
    throw err;
  }
  console.log("COMPLETE");
  console.log(files);
});
console.log("started reading files");
