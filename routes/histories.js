var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');

router.use(bodyParser.urlencoded({ extended: true}));

var history = require('../objects/history');

// insert into histories values(...)
router.post('/', function(req, res) {
  history.create({
    exi_user: req.body.exi_user,
    exi_dept: req.body.exi_dept,
    loca_cd: req.body.loca_cd,
    asst_id: req.body.asst_id,
    asst_no: req.body.asst_no,
    type_cd: req.body.type_cd,
    cls_id: req.body.cls_id,
    asst_nm: req.body.asst_nm,
    mfg_co: req.body.mfg_co,
    chg_user: req.body.chg_user,
    chg_dept: req.body.chg_dept,
    tran_dt: req.body.tran_dt,
    ins_id: req.body.ins_id,
    ins_dt: req.body.ins_dt,
    upd_id: req.body.upd_id,
    upd_dt: req.body.upd_dt
  },
  function(err, history) {
    if (err) return res.status(500).send("[failed] insert into histories values(...)");
    res.status(200).send(history);
  });
});

// select * from histories
router.get('/', function(req, res) {
  asset.find({}, function(err, assets) {
    if (err) return res.status(500).send("[failed] select * from histories");
    res.status(200).send(assets);
  });
});

// select * from histories where _id = :id
router.get('/:id', function(req, res) {
  asset.findById(req.params.id, function(err, asset) {
    if (err) return res.status(500).send("[failed] select * from histories where _id = :id");
    if (!asset) return res.status(404).send("[no returns] select * from histories where _id = :id");
    res.status(200).send(asset);
  });
});

// delete from histories where _id = :id
router.delete('/:id', function(req, res) {
  User.findByIdAndRemove(req.params.id, function(err, asset) {
    if (err) return res.status(500).send("[failed] delete from histories where _id = :id")
    res.status(200).send("asset " + asset.asst_nm + " deleted.");
  });
});

// update histories set { ... } where _id = :id
router.put('/:id', function(req, res) {
  User.findByIdAndUpdate(req.params.id, req.body, { new: true }, function(err, asset) {
    if (err) return res.status(500).send("[failed] update histories set { ... } where _id = :id")
    res.status(200).send(user);
  });
});

module.exports = router;