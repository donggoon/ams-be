var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');

router.use(bodyParser.urlencoded({ extended: true}));

var asset = require('../objects/asset');

var today = new Date();
var dd = today.getDate();
var mm = today.getMonth() + 1;
var yyyy = today.getFullYear();

if (dd < 10) {
  dd = '0' + dd;
}

if (mm < 10) {
  mm = '0' + mm;
} 

today = yyyy + '-' + mm + '-' + dd;

// insert into asstes values(...)
router.post('/', function(req, res) {
  console.log(req.body);
  asset.create({
    asst_id: req.body.params.asst_id,
    asst_no: req.body.params.asst_no,
    type_cd: req.body.params.type_cd,
    cls_id: req.body.params.cls_id,
    asst_nm: req.body.params.asst_nm,
    mfg_co: req.body.params.mfg_co,
    use_cd: req.body.params.use_cd,
    stat_cd: req.body.params.stat_cd,
    user_nm: req.body.params.user_nm,
    dept_nm: req.body.params.dept_nm,
    loca_cd: req.body.params.loca_cd,
    tran_seq: req.body.params.tran_seq,
    tran_dt: req.body.params.tran_dt,
    rmk_desc: req.body.params.rmk_desc,
    ins_id: 'donggunkim',
    ins_dt: today,
    upd_id: 'donggunkim',
    upd_dt: today
  },
  function(err, asset) {
      if (err) return res.status(500).send("[failed] insert into asstes values(...)");
      res.status(200).send(asset);
  });
});

// select * from asstes
router.get('/', function(req, res) {
  asset.find({}, function(err, assets) {
      if (err) return res.status(500).send("[failed] select * from asstes");
      res.status(200).send(assets);
  });
});

// select * from asstes where _id = :id
router.get('/:id', function(req, res) {
  asset.findById(req.params.id, function(err, asset) {
      if (err) return res.status(500).send("[failed] select * from asstes where _id = :id");
      if (!asset) return res.status(404).send("[no returns] select * from asstes where _id = :id");
      res.status(200).send(asset);
  });
});

// delete from asstes where _id = :id
router.delete('/:id', function(req, res) {
  User.findByIdAndRemove(req.params.id, function(err, asset) {
      if (err) return res.status(500).send("[failed] delete from asstes where _id = :id")
      res.status(200).send("asset " + asset.asst_nm + " deleted.");
  });
});

// update asstes set { ... } where _id = :id
router.put('/:id', function(req, res) {
  User.findByIdAndUpdate(req.params.id, req.body, { new: true }, function(err, asset) {
      if (err) return res.status(500).send("[failed] update asstes set { ... } where _id = :id")
      res.status(200).send(user);
  });
});

module.exports = router;