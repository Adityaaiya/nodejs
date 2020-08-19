const http = require("http");
const fs = require("fs");
const path = require("path");
const hostname = "localhost";
const port = 3000;

const server = http.createserver((req, res) => {
  console.log("request for " + Req.url + " by method " + req.method);
  res.statuscode = 200;
  res.setheader("content-type", "text/html");
  res.end("<html><body><h1>hello world</h1></body></html>");
});

server.lisen(port, hostname, () => {
  console.log(`server running at http://${hostname}:${port}`);
});
