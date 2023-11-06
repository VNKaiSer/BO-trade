const Binance = require("node-binance-api");
const binance = new Binance().options({
  APIKEY: "srBGjy1ATl33Lzb5ZmeXneanYnygQw3QRCGNq0zKV9vvPM5O95CjV8aNX9C9HCUZ",
  APISECRET: "AVoHbbQcrOuUhdvkhdxyGuTk9FJlTJBgH02LPwA9TcUxxMCTnF8p1WL3ZPWw4C1T",
});
async function getPricecoin(symbol) {
  symbol = symbol + "USDT";
  let price = await binance.futuresPrices();
  return price[symbol];
}

function caculatorClosePrice(data) {
  const priceChange = Math.random() * 0.01;
  let closePrice = 0;
  if (data.type == "buy" && data.status == "win") {
    closePrice = data.op * (1 + priceChange);
  } else if (data.type == "buy" && data.status == "lose") {
    closePrice = data.op * (1 - priceChange);
  } else if (data.type == "sell" && data.status == "win") {
    closePrice = data.op * (1 - priceChange);
  } else if (data.type == "sell" && data.status == "lose") {
    closePrice = data.op * (1 + priceChange);
  }
  return parseFloat(closePrice.toFixed(2));
}

module.exports = {
  getPricecoin,
  caculatorClosePrice,
};
