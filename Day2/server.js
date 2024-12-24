import http from "http";

http
  .createServer((req, res) => {
    res.write("Hello World!");
    res.end();
  })
  .listen(3002);
