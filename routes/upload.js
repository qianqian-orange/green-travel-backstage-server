const express = require('express');
const upload = require('../init/upload');
const { merchandise, advertisement } = require('../config/upload');
const moment = require('moment');
const advertisementController = require('../controller/AdvertisementController');

const router = express.Router();

router.post(`/${merchandise}`, upload.single(merchandise), (req, res) => {
  return res.json({
    code: 0,
    path: `/upload/${merchandise}/${moment().format('YYYY-MM-DD')}/${req.file.filename}`,
  });
});

router.post(`/${advertisement}`, upload.single(advertisement), (req, res) => {
  const { operate } = req.body;
  if (operate === 'save') advertisementController.save(req, res, `/upload/${advertisement}/${moment().format('YYYY-MM-DD')}/${req.file.filename}`);
  else res.json({ code: 0, path: `/upload/${advertisement}/${moment().format('YYYY-MM-DD')}/${req.file.filename}` });
});

module.exports = router;