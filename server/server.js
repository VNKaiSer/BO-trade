const TelegramBot = require("node-telegram-bot-api");
const config = require("./config");
const TELEGRAM_TOKEN = config.TELEGRAM_TOKEN;

const TelegramAll = new TelegramBot(TELEGRAM_TOKEN, { polling: false });

global["ARESTele"] = TelegramAll;

//require('./hoahong'); // chạy trả thưởng hoa hồng
require("./src/app"); // chạy http
require("./games/trade"); // chạy game
require("./auth/sys_settings"); // chạy thiết lập hệ thống
require("./auth/mess"); // chạy BOT Telegram
require("./src/nap"); // chạy BOT Nạp
require("./auth/notifi"); // chạy thông báo
require("./games/trade40");

process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = 0;
process.on("uncaughtException", function (exception) {
  console.log(exception);
});
