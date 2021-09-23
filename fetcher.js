let fetcher = process.argv.slice(2);
const request = require("request");
const fs = require("fs");

let url = fetcher[0];
let path = fetcher[1];


request(url, (error, response, body) => {
  fs.writeFile(path, body, (err) => {
    if (err) {
      console.error(err);
      return;
    }
    fs.stat(path, (err, stats) => {
      if (err) {
        console.log(`File doesn't exist.`);
      } else {
        console.log(
          `Downloaded and saved ${stats["size"]} bytes to ${path}`
        );
      }
    });
  });
});
