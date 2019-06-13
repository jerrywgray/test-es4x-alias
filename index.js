/// <reference types="@vertx/core/runtime" />
// @ts-check

const stream = require('stream');
const fs = require('fs');

vertx
  .createHttpServer()
  .requestHandler(function (req) {
    req.response().end(`Hello!: ${fs}`);
  })
  .listen(8080);

console.log('Server listening at: http://localhost:8080/');