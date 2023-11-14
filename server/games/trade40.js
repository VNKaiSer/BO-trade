const express = require("express");
const app = express();
const config = require("./../config.js");
//const msg = require('./../msg')
const { v1: uuidv1 } = require("uuid");
const axios = require("axios");
const WebSocket = require("ws");
const cors = require("cors");
const { updatePriceWinLose } = require("./../api/trans_user");
const helperCoin = require("./helpper/apiBinance");

const BET_MAX = config.BET_MAX;
var PRICE_BUY_LIVE = 0,
  PRICE_SELL_LIVE = 0,
  PRICE_BUY_DEMO = 0,
  PRICE_SELL_DEMO = 0;
var BTC_USER_BUY = [],
  BTC_USER_SELL = [],
  AMOUNT_USER_BUY = [],
  AMOUNT_USER_SELL = [];
var rateNhaThuong = config.RATE_NHA_THUONG;

const Helper = require("../helpers");

let {
  getPriceUser,
  updateBalanceUser,
  updatePersonalTrading,
  updateAmountWin,
  updateAmountLose,
  insertBetOrder,
  getMaretingAcc,
  updateBetResult,
  getResultBet,
} = require("./../games/service.trade");
const WIN_STATUS = 1;
const LOSE_STATUS = 0;

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

class PlayerData {
  constructor(id, uid) {
    this.id = id;
    this.uid = uid;
    // this.data = data;
  }
}
const users = {};
var rateNhaThuong = config.RATE_NHA_THUONG;

wss.on("connection", function (ws) {
  // thông báo có user mới
  ws.on("message", (d) => {
    var data = JSON.parse(d);
    //info
    if (data.type === "accountDetail") {
      let obj = data.data;

      if (void 0 === obj.email) {
        let mess = {
          type: "reloadAccount",
          mess: "Không lấy được email!",
          style: "danger",
        };
        ws.send(JSON.stringify({ type: "mess", data: mess }));
        return;
      }
      // xóa user và thêm nếu có kết nối lại ( để lêu lại log xử lý kết quả )
      //let t = 0;
      for (let l in users) {
        if (users[l].email == obj.email) {
          //t++;
          //console.log(t+ ": " + users[l].email);
          // send có tài khoản đăng nhập ở nơi khác
          let ws = users[l].ws;
          let mess = {
            type: "disAccount",
            mess: "Tài khoản của bạn đang được đăng nhập ở nơi khác!",
            style: "danger",
          };
          ws.send(JSON.stringify({ type: "mess", data: mess }));
          break;
        }
      }

      let player = new PlayerData(uuidv1(), 0);
      player.ws = ws;
      player.uid = obj.uid;
      player.email = obj.email;
      users[player.id] = player;

      for (let obj in users) {
        let uid = users[obj].uid;
        // tìm UID của ADMIN rồi gửi
        if (uid == "ADMIN_BO") {
          //console.log(uid);
          let ws = users[obj].ws;
          ws.send(
            JSON.stringify({
              type: "Admin join to trade 4.0",
            })
          );
          console.log("Admin join to trade 4.0");
        }
      }
    }

    if (data.type === "bet") {
      let obj = data.data;
      if (obj.type === "buy") {
        BetBUY(ws, obj);
      } else {
        BetSELL(ws, obj);
      }
      // gọi lấy kết quả từ server
      // ws.send(JSON.stringify({ type: "getKq", data: "Goi lấy kết quả" }));
    }
    if (data.type === "getKq") {
      const statusBet = randomWinLost();
      HandlingProcessingGameTrade40(statusBet, data.data, ws);
      setTimeout(() => {
        handleSendKQ(data, ws);
      }, 1000);
    }
    if (data.type === "getPriceOP") {
      helperCoin.getPricecoin("BTC").then((res) => {
        ws.send(JSON.stringify({ type: "priceOP", data: res }));
      });
    }
  });
});

function handleSendKQ(data, ws) {
  let uid = data.uid;
  let amount = (data.amountBet / 100) * rateNhaThuong;
  let amountShow = Number(amount); // là số tiền nhận được
  let addMo = amountShow + Number(data.amountBet);
  let email = data.email;

  let obj = {
    balance: addMo,
    win: amountShow,
    upID: uid,
    email: email,
  };

  getResultBet(data.data.idBet, (err, rs) => {
    const wl = rs.wl;
    const amount_bet = rs.amount_bet;
    const amount_win = rs.amount_win;
    if (wl == "win") {
      updatePriceWinLose(obj, "w");
      updateAmountWin(obj, (err, result) => {});
      let obj2 = {
        type: "kq",
        data: { kq: wl, money: Number(amount_bet + amount_win) },
      };

      if (ws !== "") ws.send(JSON.stringify(obj2));
    } else {
      updateAmountLose(obj, (err, result) => {});
      updatePriceWinLose(obj, "l");
      let obj2 = {
        type: "kq",
        data: { kq: wl, money: Number(amount_bet) },
      };

      if (ws !== "") ws.send(JSON.stringify(obj2));
    }
  });
}

function BetBUY(ws, data) {
  //let idPlayer = data.idPlayer;

  let uid = data.uid;
  let typeAccount = data.typeAccount;
  let action = data.type;
  let betAmount = Number(data.betAmount);

  for (let obj in users) {
    if (users[obj].ws == ws) {
      users[obj].uid = uid; // thay đổi id nếu change account
    }
  }

  var numberRegex = /^[]?\d+(\.\d+)?([eE][]?\d+)?$/;

  if (numberRegex.test(betAmount)) {
    // số tiền đc phép đặt cược
    if (betAmount < BET_MAX) {
      let obj = {
        type: "bet",
        mess: "Số tiền không được nhở hơn " + BET_MAX,
        style: "danger",
      };
      ws.send(JSON.stringify({ type: "mess", data: obj }));
      return;
    }

    getMaretingAcc(data.email, (err, result) => {
      accMarketing = result.marketing;

      // kết thúc
      getPriceUser(data, (err, result) => {
        if (err) {
          console.log(err);
          return;
        }
        if (!result) {
          return;
        }

        if (result.balance >= betAmount) {
          if (typeAccount == 1) {
            PRICE_BUY_LIVE += betAmount;
            //PRICE_BUY_LIVE.push(betAmount);
            updatePersonalTrading(data, (err, result) => {});
          } else {
            PRICE_BUY_DEMO += betAmount;
            //PRICE_BUY_DEMO.push(betAmount);
          }

          if (void 0 === AMOUNT_USER_BUY[`${uid}`])
            AMOUNT_USER_BUY[`${uid}`] = 0;

          if (typeAccount == 1 && accMarketing == 1) {
            PRICE_MAKETING_BUY += betAmount;
          }

          AMOUNT_USER_BUY[`${uid}`] += betAmount;
          BTC_USER_BUY[`${uid}`] =
            AMOUNT_USER_BUY[`${uid}`] +
            "||" +
            action +
            "||" +
            typeAccount +
            "||" +
            data.email +
            "||" +
            accMarketing +
            "||" +
            uid;
          //console.log('MKT BET BUY: ' + accMarketing);
          updateBalanceUser(data, (err, result) => {
            console.log(data);
            let priceOpen = getPriceOP(data);
            console.log(priceOpen);

            ws.send(
              JSON.stringify({
                type: "checkBet",
                data: "ok",
                priceOP: priceOpen,
              })
            );
          });

          //SendNotifyTele(uid, typeAccount, 'BUY', betAmount)
          // getPriceUser(data, (err, result) => {
          //     if(err){
          //         console.log(err);
          //         return
          //     }
          //     let obj = {acc: typeAccount, balance: Number(result.balance), type: action}
          //     ws.send(JSON.stringify({type: 'info', data: obj}))
          // })
        } else if (result.balance < betAmount) {
          let obj = { type: "bet", mess: "Số dư không đủ!", style: "danger" };
          ws.send(JSON.stringify({ type: "mess", data: obj }));
        }
      });
    });
  }
}
function getPriceOP(data) {
  (async () => {
    let price = await helperCoin.getPricecoin(data.coinBet);
    return price;
  })();
}

function BetSELL(ws, data) {
  let uid = data.uid;
  let typeAccount = data.typeAccount;
  let action = data.type;
  let betAmount = Number(data.betAmount);

  let accMarketing = data.mkt;

  for (let obj in users) {
    if (users[obj].ws == ws) {
      users[obj].uid = uid; // thay đổi id nếu change account
    }
  }

  var numberRegex = /^[]?\d+(\.\d+)?([eE][]?\d+)?$/;

  if (numberRegex.test(betAmount)) {
    // số tiền đc phép đặt cược
    if (betAmount < BET_MAX) {
      let obj = {
        type: "bet",
        mess: "Số tiền không được nhở hơn " + BET_MAX,
        style: "danger",
      };
      ws.send(JSON.stringify({ type: "mess", data: obj }));
      return;
    }
    getMaretingAcc(data.email, (err, result) => {
      accMarketing = result.marketing;

      // kết thúc
      getPriceUser(data, (err, result) => {
        if (err) {
          console.log(err);
          return;
        }
        if (!result) {
          return;
        }
        if (result.balance >= betAmount) {
          if (typeAccount == 1) {
            //PRICE_SELL_LIVE.push(betAmount);
            PRICE_SELL_LIVE += betAmount;
            updatePersonalTrading(data, (err, result) => {});
          } else {
            //PRICE_SELL_DEMO.push(betAmount);
            PRICE_SELL_DEMO += betAmount;
          }

          if (void 0 === AMOUNT_USER_SELL[`${uid}`])
            AMOUNT_USER_SELL[`${uid}`] = 0;

          if (typeAccount == 1 && accMarketing == 1) {
            PRICE_MAKETING_SELL += betAmount;
          }

          // nếu tồn tại acc marketing

          AMOUNT_USER_SELL[`${uid}`] += betAmount;
          BTC_USER_SELL[`${uid}`] =
            AMOUNT_USER_SELL[`${uid}`] +
            "||" +
            action +
            "||" +
            typeAccount +
            "||" +
            data.email +
            "||" +
            accMarketing +
            "||" +
            uid;
          //console.log('MKT BET SELL: ' + accMarketing);
          updateBalanceUser(data, (err, result) => {
            ws.send(JSON.stringify({ type: "checkBet", data: "ok" }));
          });
        } else if (result.balance < betAmount) {
          let obj = { type: "bet", mess: "Số dư không đủ!", style: "danger" };
          ws.send(JSON.stringify({ type: "mess", data: obj }));
        }
      });
    });
  }

  // hàm radmom thắng thua
}
function randomWinLost() {
  // Tạo một số ngẫu nhiên từ 0 đến 1
  const randomValue = Math.random();

  // Kiểm tra giá trị và trả về 0 hoặc 1 với tỷ lệ 70% và 30%
  if (randomValue < 0.7) {
    return LOSE_STATUS;
  } else {
    return WIN_STATUS;
  }
}
async function HandlingProcessingGameTrade40(v, data, ws) {
  let money = data.betAmount;
  let uid = data.uid;
  let email = data.email;
  let type = 1;
  let action = data.type;
  let accMarketingBuy = 0;
  if (v === WIN_STATUS) {
    let amount = (money / 100) * rateNhaThuong; // Money của BUYs`
    let amountShow = Number(amount); // là số tiền nhận được
    const call = {
      type: "win",
      coinBet: data.coinBet,
    };
    (async () => {
      try {
        const result = await helperCoin.caculatorClosePrice({
          coinBet: data.coinBet,
          type: data.type,
          status: "win",
        });
        SaveHistory(
          "win",
          uid,
          type,
          action,
          data.coinBet,
          amountShow,
          money,
          email,
          accMarketingBuy,
          result.open,
          result.close,
          data.idBet,
          data.timeBet
        );
      } catch (error) {
        console.error(error);
      }
    })();
  } else {
    let amount = (money / 100) * rateNhaThuong; // Money của BUY

    let amountShow = Number(amount); // là số tiền nhận được

    const call = {
      type: "lose",
      coinBet: data.coinBet,
    };
    (async () => {
      try {
        const result = await helperCoin.caculatorClosePrice({
          coinBet: data.coinBet,
          type: data.type,
          status: "lose",
        });
        SaveHistory(
          "lose",
          uid,
          type,
          action,
          data.coinBet,
          amountShow,
          money,
          email,
          accMarketingBuy,
          result.open,
          result.close,
          data.idBet,
          data.timeBet
        );
      } catch (error) {
        console.error(error);
      }
    })();
  }
}

function SaveHistory(
  wl,
  uid,
  typeAccount,
  buy_sell,
  currency,
  amountWL,
  amountBet,
  email,
  marketing,
  op,
  cp,
  betId,
  session
) {
  let obj = {
    uid: uid,
    typeAccount: Number(typeAccount),
    currency: currency + "/USDT",
    buy_sell: buy_sell,
    amount_win: wl == "win" ? Number(amountWL) : 0,
    amount_lose: wl == "win" ? 0 : Number(amountWL),
    amount_bet: amountBet,
    open: op,
    close: cp,
    session: session,
    email: email,
    mkt: 0,
    betId: betId,
    wl: wl,
  };

  insertBetOrder(obj, (err, result) => {
    if (err) {
      console.log(err);
      return;
    }
  });
}

function updateResultBet() {
  updateBetResult(data, (err, result) => {
    if (err) {
      console.log(err);
      return;
    }
  });
}
