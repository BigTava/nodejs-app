const fs = require("fs");

fs.readFile("./assets/Readme.md", "UTF-8", (err, text) => {
  console.log("file contexts read");
  console.log(text);
});

fs.readFile("./assets/alex.jpg", (err, img) => {
  if (err) {
    console.log(`An error has ocurred: ${err.message}`);
    process.exit;
  }
  console.log("file contexts read");
  console.log(img);
});
