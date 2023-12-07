const db = require("../../database");
module.exports = {
  getBankingAdmin: (callback) => {
    db.query(
      `SELECT banking_tell, banking_number, banking_owner, banking_desc, exchangeVNDUSDT  FROM banking_admin WHERE type = 1`,
      (error, results, fields) => {
        if (error) {
          return callback(error);
        }
        return callback(null, results);
      }
    );
  },

  insertBankingAdmin: (data, callback) => {
    console.log(data);
    db.query(
      `INSERT INTO banking_admin (banking_tell, banking_number, banking_owner,banking_desc, type, exchangeVNDUSDT) VALUES (?, ?, ?,?,?,?)`,
      [
        data.bank_tell,
        data.bank_number,
        data.bank_owner,
        data.bank_desc,
        1,
        data.exchangeVNDUSDT ? data.exchangeVNDUSDT : 24000,
      ],
      (error, results, fields) => {
        if (error) {
          return callback(error);
        }
        return callback(null, true);
      }
    );
  },

  deActiveBankingAdmin: (callback) => {
    db.query(
      `UPDATE banking_admin SET type = 0`,
      [],
      (error, results, fields) => {
        if (error) {
          return callback(error);
        }

        return callback(null, true);
      }
    );
  },
};
