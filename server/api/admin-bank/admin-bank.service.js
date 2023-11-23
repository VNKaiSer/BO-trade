const BankingAdminService = require("./BankingAdminService");
module.exports = {
  getBankingAdmin() {
    return BankingAdminService.getBankingAdmin();
  },
  updateBankingAdmin(obj) {
    BankingAdminService.updateBankingAdmin(obj);
  },
};
