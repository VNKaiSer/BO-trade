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

async function caculatorClosePrice(data) {
  try {
    const result = await getPricecoin(data.coinBet);
    const priceChange = Math.random() * 0.01;
    let closePrice = 0;
    if (data.type == "buy" && data.status == "win") {
      closePrice = result * (1 + priceChange);
    } else if (data.type == "buy" && data.status == "lose") {
      closePrice = result * (1 - priceChange);
    } else if (data.type == "sell" && data.status == "win") {
      closePrice = result * (1 - priceChange);
    } else if (data.type == "sell" && data.status == "lose") {
      closePrice = result * (1 + priceChange);
    }
    const rs = {
      open: result,
      close: closePrice.toFixed(2),
    };
    console.log(rs);
    return rs;
  } catch (err) {
    console.error(err);
    throw err; // Chuyển lỗi tiếp theo để xử lý ở mức cao hơn
  }
}

module.exports = {
  getPricecoin,
  caculatorClosePrice,
};
