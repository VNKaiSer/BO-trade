const config = require('../../config')
const cors = require('cors')
const express = require('express')
const db = require("../../database");
const fs = require('fs')
const Tele = require("../telegram_notify")
const request = require('request');
const { checkToken } = require('../token_validation');
const fileSys = config.PATH_SYS_CONFIG


const app = express()

app.set('view engine', 'ejs')

app.use(cors());

app.post('/pay', checkToken, async (req, res) => {
    const data = req.body;
    const nickname = data.nickname;
    const amount = data.amount;
    if (!nickname || !amount || amount <= 200000) {
        console.log('Sai dữ liệu');
        return res.status(200).json({
            status: false,
            message: "Sai dữ liệu"
        })
    }
    const [UserInfo] = await db.query(`select id, email from users where nick_name = ?`, [nickname]);

    var listBank = await getlistBank();
    if (!listBank) {
        return res.status(200).json({
            status: false,
            message: "Hệ thống bận, vui lòng thử lại sau!"
        })
    }
    var randBank = randomInteger(0, listBank.length - 1);
    let request_id = '' + Math.floor(Math.random() * Math.floor(99999999999999)) * 2 + 1;
    request.get("http://202.182.118.37:6688/api/requestPayment?username=" + config.BANK_UNAME + "&password=" + config.BANK_PASS + "&bank_code=" + listBank[randBank].Code + "&money=" + amount + "&request_id=" + request_id, function (err, httpResponse, body) {
        if (err) {
            console.log(err);
            return res.status(200).json({
                status: false,
                message: "Hệ thống bận, vui lòng thử lại sau!"
            })
        }
        let data = body ? JSON.parse(body) : {};
        console.log(body);
        if (data.errorCode == 1) {
            db.query(`INSERT INTO trade_history (email, from_u, to_u, type_key, type, currency, amount, note, status, bank, status, created_at)
                        values(?,?,?,?,?,?,?,?,?,?,?,now())`,
                [
                    UserInfo[0].email,
                    'Bank',
                    nickname,
                    'bank', // Nạp tiền
                    'Nạp ngân hàng',
                    'usd',
                    amount,
                    '',
                    1,
                    request_id,
                    0
                ])

            return res.status(200).json({
                status: true,
                message: "Thành công, vui lòng chuyển khoản theo thông tin hiển thị",
                info: body
            })
        } else {
            return res.status(200).json({
                status: false,
                message: "Hệ thống bận, vui lòng thử lại sau!"
            })
        }

    });
});
const getlistBank = async function () {
    let params = {
        username: config.BANK_UNAME,
        password: config.BANK_PASS
    }
    params = JSON.stringify(params);
    request.post({
        url: config.BANK_URL + '/listBank',
        body: params
    }, function (err, httpResponse, body) {
        if (err) {
            return false;
        } else {
            return JSON.parse(body);

        }
    });
}
let randomInteger = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}



module.exports = app;