const {
  getBankingAdmin,
  insertBankingAdmin,
  deActiveBankingAdmin,
} = require("./admin-bank.service");

module.exports = {
  getBankingAdmin: (req, res) => {
    getBankingAdmin((err, results) => {
      if (err) {
        console.log(err);
        return;
      }
      return res.json({ success: 1, data: results });
    });
  },

  updateBankingAdmin: (req, res) => {
    const data = req.body;
    deActiveBankingAdmin((err, results) => {
      if (err) {
        console.log(err);
        return;
      }
      insertBankingAdmin(data, (err, results) => {
        if (err) {
          console.log(err);
          return;
        }
        return res.json({ success: 1 });
      });
    });
  },
};
