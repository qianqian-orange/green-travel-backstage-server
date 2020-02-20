const express = require('express');
const conversionController = require('../controller/ConversionController');

const router = express.Router();

router.get('/list', (req, res) => {
  conversionController.list(req, res);
});

router.get('/total', (req, res) => {
  conversionController.total(req, res);
});

router.post('/delete', (req, res) => {
  conversionController.remove(req, res);
});

module.exports = router;