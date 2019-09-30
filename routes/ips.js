var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');

router.use(bodyParser.urlencoded({ extended: true}));

var asset = require('../objects/ip');

// insert into ips values(...)
router.post('/', function(req, res) {
    asset.create({
        asst_id: req.body.asst_id,
        ip_addr: req.body.ip_addr,
        assi_dom: req.body.assi_dom,
        net_cd: req.body.net_cd,
        user_dom: req.body.user_dom,
        user_nm: req.body.user_nm,
        mac_addr: req.body.mac_addr,
        rmk_desc: req.body.rmk_desc,
        ins_id: req.body.ins_id,
        ins_dt: req.body.ins_dt,
        upd_id: req.body.upd_id,
        upd_dt: req.body.upd_dt
    },
    function(err, asset) {
        if (err) return res.status(500).send("[failed] insert into ips values(...)");
        res.status(200).send(asset);
    });
});

// select * from ips
router.get('/', function(req, res) {
    asset.find({}, function(err, assets) {
        if (err) return res.status(500).send("[failed] select * from ips");
        res.status(200).send(assets);
    });
});

// select * from ips where _id = :id
router.get('/:id', function(req, res) {
    asset.findById(req.params.id, function(err, asset) {
        if (err) return res.status(500).send("[failed] select * from ips where _id = :id");
        if (!asset) return res.status(404).send("[no returns] select * from ips where _id = :id");
        res.status(200).send(asset);
    });
});

// delete from ips where _id = :id
router.delete('/:id', function(req, res) {
    User.findByIdAndRemove(req.params.id, function(err, asset) {
        if (err) return res.status(500).send("[failed] delete from ips where _id = :id")
        res.status(200).send("asset " + asset.asst_nm + " deleted.");
    });
});

// update ips set { ... } where _id = :id
router.put('/:id', function(req, res) {
    User.findByIdAndUpdate(req.params.id, req.body, { new: true }, function(err, asset) {
        if (err) return res.status(500).send("[failed] update ips set { ... } where _id = :id")
        res.status(200).send(user);
    });
});

module.exports = router;