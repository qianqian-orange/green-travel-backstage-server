const express = require('express');
const advertisementController = require('../controller/AdvertisementController');

const router = express.Router();

router.get('/list', (req, res) => {
  advertisementController.list(req, res);
});

router.get('/total', (req, res) => {
  advertisementController.total(req, res);
});

router.post('/edit', (req, res) => {
  advertisementController.edit(req, res);
});

router.post('/delete', (req, res) => {
  advertisementController.remove(req, res);
});

module.exports = router;