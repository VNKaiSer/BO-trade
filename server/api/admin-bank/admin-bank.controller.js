const { getBankingAdmin, updateBankingAdmin } = require("./admin-bank.service");

module.exports = {
  getBankingAdmin: (req, res) => {
    const data = getBankingAdmin();
    return res.json(data);
  },

  updateBankingAdmin: (req, res) => {
    const data = updateBankingAdmin(req.body);
    return res.json(data);
  },
};
