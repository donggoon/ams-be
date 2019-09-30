var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');

router.use(bodyParser.urlencoded({ extended: true}));

var asset = require('../objects/asset');

// insert into asstes values(...)
router.post('/', function(req, res) {
    asset.create({
        asst_id: req.body.asst_id,
        asst_no: req.body.asst_no,
        type_cd: req.body.type_cd,
        cls_id: req.body.cls_id,
        asst_nm: req.body.asst_nm,
        mfg_co: req.body.mfg_co,
        use_cd: req.body.use_cd,
        stat_cd: req.body.stat_cd,
        user_nm: req.body.user_nm,
        dept_nm: req.body.dept_nm,
        loca_cd: req.body.loca_cd,
        tran_seq: req.body.tran_seq,
        tran_dt: req.body.tran_dt,
        rmk_desc: req.body.rmk_desc,
        ins_id: req.body.ins_id,
        ins_dt: req.body.ins_dt,
        upd_id: req.body.upd_id,
        upd_dt: req.body.upd_dt
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