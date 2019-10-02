var mongoose = require('mongoose');
var historySchema = new mongoose.Schema({
  exi_user: String,
  exi_dept: String,
  loca_cd: String,
  asst_id: String,
  asst_no: String,
  type_cd: String,
  cls_id: String,
  asst_nm: String,
  mfg_co: String,
  chg_user: String,
  chg_dept: String,
  tran_dt: String,
  ins_id: String,
  ins_dt: String,
  upd_id: String,
  upd_dt: String
})

mongoose.model('history', historySchema);

module.exports = mongoose.model('history');