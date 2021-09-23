let fetcher = process.argv.slice(2);

const fs = require("fs");
let content = null;

const request = require("request");
request(fetcher[0], (error, response, body) => {
  content = body;

  fs.writeFile("./test.txt", content, (err) => {
    if (err) {
      console.error(err);
      return;
    }
    fs.stat("./test.txt", (err, stats) => {
      if (err) {
        console.log(`File doesn't exist.`);
      } else {
        console.log(
          `Downloaded and saved ${stats["size"]} bytes to ./test.txt`
        );
      }
    });
  });
});
