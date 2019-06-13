/// <reference types="@vertx/core/runtime" />
// @ts-check

const stream = require('stream');

vertx
  .createHttpServer()
  .requestHandler(function (req) {
    req.response().end(`Hello!: ${stream}`);
  })
  .listen(8080);

console.log('Server listening at: http://localhost:8080/');