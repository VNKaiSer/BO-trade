const fs = require("fs");
const path = require("path");

// Path to your JSON file
const filePath = path.resolve(__dirname, "./banking_admin.json");

module.exports = {
  getBankingAdmin() {
    return JSON.parse(fs.readFileSync(filePath, "utf8"));
  },

  updateBankingAdmin(obj) {
    fs.writeFileSync(filePath, JSON.stringify(obj, null, 2));
  },
};
