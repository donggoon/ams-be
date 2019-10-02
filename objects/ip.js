var mongoose = require('mongoose');
var ipSchema = new mongoose.Schema({
  ip_addr: String,
  assi_dom: String,
  net_cd: String,
  user_dom: String,
  user_nm: String,
  mac_addr: String,
  rmk_desc: String,
  ins_id: String,
  ins_dt: String,
  upd_id: String,
  upd_dt: String
})

mongoose.model('ip', ipSchema);

module.exports = mongoose.model('ip');