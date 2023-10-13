const config = require('../config')
const Helper = require("../helpers");
const fileSys = config.PATH_SYS_CONFIG;
const serveStatic = require('serve-static');
const path = require('path');
const userRouter = require("./../api/users/user.router")
const tradeRouter = require("./../api/trade/trade.router")
const betRouter = require("./../api/bet/bet.router")
const exChangeRouter = require("./../api/exchange/ex.router")
const Wallet = require("./../api/wallet/wallet.router")

const uploadAvatar = require("./../auth/upload/router")

const payPal = require("./../auth/pay/paypal")
const walletSys = require("./../api/sys.router")
const { checkToken } = require("./../auth/token_validation");
const { verify } = require("jsonwebtoken");

const express = require('express');
const bodyParser = require('body-parser');
const Bank = require('../auth/pay/bank');
const cors = require('cors');
require('dotenv').config();
const app = express();

app.use(bodyParser.json())
app.use(cors({
    origin: 'https://api-bo.onrender.com',
    methods: 'GET, POST, PUT, DELETE',
    allowedHeaders: 'Content-Type, Authorization',
}))

app.use("/api/setup", walletSys)

app.use("/api/users", userRouter)
app.use("/api/trades", tradeRouter)
app.use("/api/bets", betRouter)
app.use("/api/exs", exChangeRouter)
app.use("/api/wallet", Wallet)

app.use("/api/auth", uploadAvatar)


app.use("/api/paypal", payPal)
app.use("/api/bank", Bank)


app.get('/status', (req, res) => {
    let dataSys = Helper.getConfig(fileSys);
    res.json({
        ok: dataSys.maintenance,
        msg: dataSys.maintenanceContent
    })
})


app.use(serveStatic(path.join(__dirname, 'public')))

app.get(/^\/portal\/?.*/, (req, res) => {
    res.sendFile(path.resolve(__dirname, 'public/portal.html'))
})

app.get(/./, (req, res) => {
    res.sendFile(path.resolve(__dirname, 'public/index.html'))
})

app.get('/status', (req, res) => {
    res.send({
        message: `Hello ${req.body.email} !`
    })
})


app.listen(process.env.PORT || 80);
console.log("- Web start port " + process.env.PORT);