var mongoose = require('mongoose');
var assetSchema = new mongoose.Schema({
  asst_id: String,
  asst_no: String,
  type_cd: String,
  cls_id: String,
  asst_nm: String,
  mfg_co: String,
  use_cd: String,
  stat_cd: String,
  user_nm: String,
  dept_nm: String,
  loca_cd: String,
  tran_seq: String,
  tran_dt: String,
  rmk_desc: String,
  ins_id: String,
  ins_dt: String,
  upd_id: String,
  upd_dt: String
})

mongoose.model('asset', assetSchema);

module.exports = mongoose.model('asset');