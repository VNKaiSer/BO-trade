const axios = require("axios");

// Thời điểm bạn muốn lấy giá trị của Bitcoin
const timestamp = Math.floor(new Date("2023-11-07T00:22:22Z").getTime() / 1000);

// URL của API CoinGecko để lấy giá trị Bitcoin vào thời điểm cụ thể
const apiUrl = `https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&from=${timestamp}&to=${timestamp}`;

async function getBitcoinPriceAtSpecificTime() {
  try {
    const response = await axios.get(apiUrl);
    if (response.data && response.data.prices) {
      const bitcoinPrice = response.data.prices[0][1];
      console.log(
        `Giá trị của 1 Bitcoin vào 7/11/2023 00:22:22 là: $${bitcoinPrice}`
      );
    }
  } catch (error) {
    console.error("Lỗi khi lấy giá trị Bitcoin:", error);
  }
}

getBitcoinPriceAtSpecificTime();
