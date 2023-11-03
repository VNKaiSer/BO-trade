const express = require("express");
const app = express();
const config = require("./../config.js");
//const msg = require('./../msg')
const apiBinace = require("node-binance-api");
const Binance = require("binance-api-node").default;

const toFixed = require("tofixed");
const axios = require("axios");
const WebSocket = require("ws");
const cors = require("cors");
const { updatePriceWinLose } = require("./../api/trans_user");

const Helper = require("../helpers");

app.use(
  cors({
    origin: "*",
    optionsSuccessStatus: 200,
  })
);

// use https

var httpServer = null;

if (!config.USE_SSL) {
  httpServer = require("http").createServer(app);
} else {
  let options = Helper.ssl;
  httpServer = require("https").createServer(options, app);
}

const wss = new WebSocket.Server({
  server: httpServer,
  //port: config.PORT_TRADE
});

httpServer.listen(config.PORT_TRADE40, function () {
  console.log("listent wss trade 4.0 at port: " + config.PORT_TRADE40);
});
