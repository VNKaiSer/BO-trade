const Binance = require("node-binance-api");
const binance = new Binance().options({
  APIKEY: "srBGjy1ATl33Lzb5ZmeXneanYnygQw3QRCGNq0zKV9vvPM5O95CjV8aNX9C9HCUZ",
  APISECRET: "AVoHbbQcrOuUhdvkhdxyGuTk9FJlTJBgH02LPwA9TcUxxMCTnF8p1WL3ZPWw4C1T",
});

binance
  .futuresPrices()
  .then((result) => {
    console.log(result.BTCUSDT);
  })
  .catch((err) => {
    console.log(err);
  });
