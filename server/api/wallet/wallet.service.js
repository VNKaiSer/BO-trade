const db = require("./../../database");

module.exports = {
  getUSDTAddress: (nick, callback) => {
    db.query(
      `select address_USDT from users where nick_name = ?`,
      [nick],
      (error, results, fields) => {
        if (error) {
          return callback(error);
        }
        return callback(null, results[0].address_USDT);
      }
    );
  },

  getBTCAddress: (nick, callback) => {
    db.query(
      `select address_BTC from users where nick_name = ?`,
      [nick],
      (error, results, fields) => {
        if (error) {
          return callback(error);
        }
        return callback(null, results[0].address_BTC);
      }
    );
  },

  getETHAddress: (nick, callback) => {
    db.query(
      `select address_USDT from users where nick_name = ?`,
      [nick],
      (error, results, fields) => {
        if (error) {
          return callback(error);
        }
        return callback(null, results[0].address_USDT);
      }
    );
  },

  getBankingAdmin: (callback) => {
    db.query(
      `SELECT * FROM banking_admin WHERE type = 1`,
      (error, results, fields) => {
        if (error) {
          return callback(error);
        }
        return callback(null, results);
      }
    );
  },

  insertBankingAdmin: (data, callback) => {
    db.query(
      `INSERT INTO banking_admin (banking_tell, banking_number, banking_owner,banking_desc) VALUES (?, ?, ?,?)`,
      [
        data.banking_tell,
        data.banking_number,
        data.banking_owner,
        data.banking_desc,
      ],
      (error, results, fields) => {
        if (error) {
          return callback(error);
        }
        return callback(null, true);
      }
    );
  },

  activeBankingAdmin: (data, callback) => {
    db.query(
      `UPDATE banking_admin SET type = 0`,
      [],
      (error, results, fields) => {
        if (error) {
          return callback(error);
        }
        db.query(
          `UPDATE banking_admin SET type = 1 WHERE id = ?`,
          [data.id],
          (error, results, fields) => {
            if (error) {
              return callback(error);
            }
            return callback(null, true);
          }
        );
      }
    );
  },
};
